/* eslint-disable object-curly-spacing, class-methods-use-this */
import {
  h,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import ProductCard from './ProductCard.js';

const html = htm.bind(h);

const ProductList = ({
  products, loading, currentPageSize, secondLastProduct,
}) => {
  if (loading) {
    return html`<div class="list">
      <ol>
        ${Array(currentPageSize).fill().map(() => html`<${ProductCard} loading=${true} />`)}
      </ol>
    </div>`;
  }

  if (products.items.length === 0) {
    return html`<div class="list">
      <div class="empty">We're sorry, we couldn't find anything that matches your query.</div>
    </div>`;
  }

  const gridItems = products.items.map((product, index) => html`<${ProductCard} key=${product.sku} product=${product} index=${index} secondLastProduct=${index === products.items.length - 2 ? secondLastProduct : null} />`);
  return html`<div class="list">
    <ol>
        ${gridItems}
    </ol>
  </div>`;
};

export default ProductList;
