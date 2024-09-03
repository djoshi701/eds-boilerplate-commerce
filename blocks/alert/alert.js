import { toCamelCase } from '../../scripts/aem.js';

const KEYS = {
  CONTENT: 'content',
  TYPE: 'type',
  ENABLECLOSE: 'enableClose',
};
/**
 * Manages a row within a block and applies
 * specific styles to the container based on the row's content.
 *
 * @param {HTMLElement} row - The row element to be managed.
 * @param {HTMLElement} container - The container element to which styles will be applied.
 *
 * @returns {void}
 */
const manageRow = (row, container) => {
  const rowKey = row?.firstElementChild?.textContent;
  const value = row?.children?.[1];
  const textValue = value?.textContent;
  if (!rowKey) return;
  const key = toCamelCase(rowKey);
  if (key === KEYS.TYPE && textValue) {
    container.classList.add(`alert-${textValue}`);
    return;
  }
  if (key === KEYS.CONTENT) {
    container.prepend(value);
    return;
  }
  if (key === KEYS.ENABLECLOSE && textValue?.toLocaleLowerCase() === 'true') {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.addEventListener('click', () => {
      container.remove();
    });
    container.append(closeButton);
  }
};

/**
 * Decorates a block element by creating a new div container
 * with the class "alert" and applying specific styles based on the content of the block's children.
 *
 * @param {HTMLElement} block - The HTML element to be decorated.
 * @returns {void}
 */
export default function decorate(block) {
  const container = document.createElement('div');
  container.classList.add('alert');
  [...block.children].forEach((row) => {
    manageRow(row, container);
  });
  block.replaceWith(container);
}
