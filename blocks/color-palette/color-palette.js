export default function decorate(block) {
  const colorPaletteHTML = `
  <div>
      <h3>Color Palette</h3>
      <h4>Primary Colors</h4>
      <ul class="swatch-container">
          <li class="swatch-item bg-primary-50 swatch-item-outline"></li>
          <li class="swatch-item bg-primary-100 swatch-item-outline"></li>
          <li class="swatch-item bg-primary-200"></li>
          <li class="swatch-item bg-primary-300"></li>
          <li class="swatch-item bg-primary-400"></li>
          <li class="swatch-item bg-primary-500"></li>
          <li class="swatch-item bg-primary-600"></li>
          <li class="swatch-item bg-primary-700"></li>
          <li class="swatch-item bg-primary-800"></li>
          <li class="swatch-item bg-primary-900"></li>
      </ul>

      <h4>Secondary Colors</h4>
      <ul class="swatch-container">
          <li class="swatch-item bg-secondary-50 swatch-item-outline"></li>
          <li class="swatch-item bg-secondary-100 swatch-item-outline"></li>
          <li class="swatch-item bg-secondary-200 swatch-item-outline"></li>
          <li class="swatch-item bg-secondary-300 swatch-item-outline"></li>
          <li class="swatch-item bg-secondary-400 swatch-item-outline"></li>
          <li class="swatch-item bg-secondary-500 swatch-item-outline"></li>
          <li class="swatch-item bg-secondary-600 swatch-item-outline"></li>
          <li class="swatch-item bg-secondary-700 swatch-item-outline"></li>
          <li class="swatch-item bg-secondary-800 swatch-item-outline"></li>
          <li class="swatch-item bg-secondary-900 swatch-item-outline"></li>
      </ul>

      <h4>Neutral Colors</h4>
      <ul class="swatch-container">
          <li class="swatch-item bg-neutral-50 swatch-item-outline"></li>
          <li class="swatch-item bg-neutral-100 swatch-item-outline"></li>
          <li class="swatch-item bg-neutral-200"></li>
          <li class="swatch-item bg-neutral-300"></li>
          <li class="swatch-item bg-neutral-400"></li>
          <li class="swatch-item bg-neutral-500"></li>
          <li class="swatch-item bg-neutral-600"></li>
          <li class="swatch-item bg-neutral-700"></li>
          <li class="swatch-item bg-neutral-800"></li>
          <li class="swatch-item bg-neutral-900"></li>
      </ul>

      <h4>Positive Colors</h4>
      <ul class="swatch-container">
          <li class="swatch-item bg-positive-200"></li>
          <li class="swatch-item bg-positive-500"></li>
          <li class="swatch-item bg-positive-800"></li>
      </ul>

      <h4>Informational Colors</h4>
      <ul class="swatch-container">
          <li class="swatch-item bg-informational-200"></li>
          <li class="swatch-item bg-informational-500"></li>
          <li class="swatch-item bg-informational-800"></li>
      </ul>

      <h4>Warning Colors</h4>
      <ul class="swatch-container">
          <li class="swatch-item bg-warning-200"></li>
          <li class="swatch-item bg-warning-500"></li>
          <li class="swatch-item bg-warning-800"></li>
      </ul>

      <h4>Alert Colors</h4>
      <ul class="swatch-container">
          <li class="swatch-item bg-alert-200"></li>
          <li class="swatch-item bg-alert-500"></li>
          <li class="swatch-item bg-alert-800"></li>
      </ul>
  </div>
  `;
  // Create a range and use it to create a document fragment from the HTML string
  const range = document.createRange();
  const documentFragment = range.createContextualFragment(colorPaletteHTML);
  block.appendChild(documentFragment);
}
