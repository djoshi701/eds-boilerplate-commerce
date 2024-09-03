/* eslint-disable object-curly-spacing, class-methods-use-this */
import { useState } from '../../scripts/preact-hooks.js';
import {
  h, Fragment,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import {
  performCatalogServiceQuery,
  refineProductQuery,
  renderPrice,
} from '../../scripts/commerce.js';
import Icon from '../../components/Icon.js';
import { addProductToWishlist } from '../../scripts/storefront-wishlist/api.js';

const html = htm.bind(h);

function canAddToCart(product) {
  return !!product;
}

async function getVariantDetails(variantIds, sku) {
  const result = await performCatalogServiceQuery(
    refineProductQuery,
    {
      sku: sku.toUpperCase(),
      variantIds,
    },
  );
  return {
    images: result.refineProduct?.images,
    price: result.refineProduct?.price,
  };
}

function ProductCardShimmer() {
  return html`
    <li>
      <div class="picture shimmer"></div>
      <div class="variants"></div>
      <div class="name">
        <div class="shimmer shimmer-text"></div>
        <div class="shimmer shimmer-text" style="max-width: 70%"></div>
      </div>
      <div class="price">
        <div class="shimmer shimmer-text" style="max-width: 30%"></div>
      </div>
      <div class="rating"></div>
    </li>`;
}

function CartSection({ onAddToCart, onAddToWishlist, product }) {
  return html`<div class="card-section action">
    <button disabled=${!canAddToCart(product)} onclick=${onAddToCart} class="button primary cart-button">Add to Bag</button>
    <button onclick=${onAddToWishlist} class="button secondary secondary-action"><${Icon} c="span" name="heart" /></button>
  </div>`;
}

function Options({ product, updateSelection, selection }) {
  const options = product?.options;
  if (!options) {
    return null;
  }

  const renderSwatches = (option) => {
    const { values } = option;
    const selectedValue = selection?.[option.id]?.id;
    return values.map((value) => {
      const attr = {};
      if (value.type === 'COLOR_HEX') {
        attr.style = {
          backgroundColor: value.value,
        };
      }
      const isColor = option?.id?.includes('color');

      return html`<li key=${value.id} class="swatch ${option.id}${value.id === selectedValue ? ' selected' : ''}">
          <button
            ...${attr}
            class="swatch-button"
            aria-selected=${value.id === selectedValue}
            disabled=${!value.inStock}
            onClick=${() => updateSelection({ [option.id]: value })}> <span class=${isColor ? 'sr-only' : ''}>${value.title}</span>  </button>
        </li>`;
    });
  };

  return options.map((option) => {
    const selectedTitle = selection?.[option.id]?.title;

    return html`
      <fieldset class="card-section ${option.id}-selector">
          <legend>${selectedTitle ? `${option.title}: ${selectedTitle}` : option.title}</legend>
          <ul class="swatches swatches-regular">${renderSwatches(option)}</ul>
      </fieldset>`;
  });
}

function Image({ loading = 'lazy', product }) {
  // Placeholder as fallback
  let image;

  // Use base image if available
  if (product.images && product.images.length > 0) {
    image = product.images[0].url;
  }

  if (!image) {
    return html`<div class="no-image"></div>`;
  }
  const url = new URL(image);
  url.protocol = 'https:';
  url.search = '';

  return html`<picture>
    <source type="image/webp" srcset="${url}?width=163&bg-color=255,255,255&format=webply&optimize=medium 1x,${url}?width=326&bg-color=255,255,255&format=webply&optimize=medium 2x, ${url}?width=489&bg-color=255,255,255&format=webply&optimize=medium 3x" media="(max-width: 900px)" />
    <source type="image/webp" srcset="${url}?width=330&bg-color=255,255,255&format=webply&optimize=medium 1x, ${url}?width=660&bg-color=255,255,255&format=webply&optimize=medium 2x, ${url}?width=990&bg-color=255,255,255&format=webply&optimize=medium 3x" />
    <img class="product-image-photo" src="${url}?width=330&quality=100&bg-color=255,255,255" max-width="330" max-height="396" alt=${product.name} loading=${loading} />
  </picture>`;
}

const ProductCard = ({
  product: initialProduct, loading, index, secondLastProduct,
}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const [product, setProduct] = useState({ ...initialProduct });
  const [selection, setSelection] = useState({});

  function onProductClick(selectedProduct) {
    window.adobeDataLayer.push((dl) => {
      // TODO: Remove eventInfo once collector is updated
      dl.push({ event: 'search-product-click', eventInfo: { ...dl.getState(), searchUnitId: 'searchUnitId', sku: selectedProduct.sku } });
    });
  }

  const onAddToCart = async () => {
    if (Object.keys(selection).length === (product.options?.length || 0)) {
      const optionsUIDs = Object.values(selection).map((option) => option.id);
      const values = [{
        optionsUIDs,
        quantity: 1,
        sku: product.sku,
      }];
      const { addProductsToCart } = await import('@dropins/storefront-cart/api.js');
      console.debug('onAddToCart', values, addProductsToCart);
      addProductsToCart(values);
    }
  };

  const onSelectionChanged = (fragment) => {
    // update selection value
    setSelection((oldSelection) => ({
      ...oldSelection,
      ...fragment,
    }));
    // fetch new images and prices
    const variantIds = Object.values({ ...selection, ...fragment })
      .map((currSelection) => currSelection.id);
    getVariantDetails(variantIds, product.sku).then(({ images }) => {
      if (images?.length) {
        setProduct((prev) => ({
          ...prev,
          images,
        }));
      }
    });
  };

  const onAddToWishlist = async () => {
    const data = await addProductToWishlist({
      quantity: 1,
      sku: product.sku,
    });
    console.debug(data, 'onAddToWishlist', product.sku);
  };

  if (loading) {
    return html`<${ProductCardShimmer} />`;
  }

  const isMobile = window.matchMedia('only screen and (max-width: 900px)').matches;
  const numberOfEagerImages = isMobile ? 2 : 4;

  return html`
    <li index=${index} ref=${secondLastProduct}>
      <div class="picture">
        <a onClick=${() => onProductClick(product)} href="/products/${product.urlKey}/${product.sku.toLowerCase()}">
          <${Image} loading=${index < numberOfEagerImages ? 'eager' : 'lazy'} product=${product} />
        </a>
      </div>
      <div class="name">
        <a onClick=${() => onProductClick(product)} href="/products/${product.urlKey}/${product.sku.toLowerCase()}" dangerouslySetInnerHTML=${{ __html: product.name }} />
      </div>
      <div class="price">${renderPrice(product, formatter.format, html, Fragment)}</div>
      <${Options} product=${product} updateSelection=${onSelectionChanged} selection=${selection} />
      <${CartSection} onAddToWishlist=${onAddToWishlist} onAddToCart=${onAddToCart} product=${product} />
    </li>`;
};

export default ProductCard;
