/* eslint-disable import/prefer-default-export */
import { fetchGraphQl } from '@dropins/tools/fetch-graphql.js';
import { getCookie } from '../configs.js';

const CUSTOMER_WISHLIST_QUERY = /* GraphQL */`
    {
      customer {
        wishlist {
          id
        }
      }
    }
`;
const ADD_PRODUCT_TO_WISHLIST_MUTATION = /* GraphQL */ `
  mutation AddProductsToWishlist(
      $wishlistId: ID!,
      $wishlistItems: [WishlistItemInput!]!
    ) {
    addProductsToWishlist(
      wishlistId: $wishlistId,
      wishlistItems: $wishlistItems
    ) {
      wishlist {
        id
        items_count
        items_v2(currentPage: 1, pageSize: 1) {
          items {
            id
            quantity
          }
        }
      }
      user_errors {
        code
        message
      }
    }
  }
`;

const getCustomerWishlists = async () => {
  try {
    const { data } = await fetchGraphQl(CUSTOMER_WISHLIST_QUERY);
    return data?.customer?.wishlist;
  } catch (error) {
    return null;
  }
};
/**
 * Add products to wishlist
 * @param {Object} value
 * @param {string} value.sku
 * @param {number} value.quantity
 * @returns
 */
const addProductToWishlist = async (value) => {
  const isAuthenticated = !!getCookie('auth_dropin_user_token');
  if (!isAuthenticated) {
    window.location.href = '/customer/login';
    return null;
  }
  const existingWishList = await getCustomerWishlists();
  if (!existingWishList?.id) {
    return null;
  }
  try {
    const { data } = await fetchGraphQl(ADD_PRODUCT_TO_WISHLIST_MUTATION, {
      variables: {
        wishlistId: existingWishList?.id,
        wishlistItems: [value],
      },
    });
    return data?.addProductsToWishlist?.wishlist;
  } catch (error) {
    return null;
  }
};

export {
  getCustomerWishlists,
  addProductToWishlist,
};
