import { addProductsToCart } from '@dropins/storefront-cart/api.js';
import { addProductToWishlist } from '../../../scripts/storefront-wishlist/api.js';

export default function Actions(ctx) {
  // Add to Cart Button
  ctx.appendButton((next, state) => {
    const adding = state.get('adding');
    return {
      text: adding
        ? next.dictionary.Custom.AddingToCart?.label
        : next.dictionary.PDP.Product.AddToCart?.label,
      icon: 'Cart',
      variant: 'primary',
      disabled: adding || !next.data.inStock,
      onClick: async () => {
        try {
          state.set('adding', true);
          if (!next.valid) {
            // eslint-disable-next-line no-console
            console.warn('Invalid product', next.values);
            return;
          }

          await addProductsToCart([{ ...next.values }]);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn('Error adding product to cart', error);
        } finally {
          state.set('adding', false);
        }
      },
    };
  });
  ctx.appendButton((next, state) => {
    const adding = state.get('adding-to-wishlist');
    return {
      text: adding
        ? next.dictionary.Custom.AddingToWishlist?.label
        : null,
      icon: 'Heart',
      variant: 'tertiary',
      disabled: adding,
      onClick: async () => {
        try {
          state.set('adding-to-wishlist', true);
          await addProductToWishlist({ ...next.values });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn('Error adding product to wishlist', error);
        } finally {
          state.set('adding-to-wishlist', false);
        }
      },
    };
  });
}
