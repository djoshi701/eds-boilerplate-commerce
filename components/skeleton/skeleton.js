import { loadCSS } from '../../scripts/aem.js';

const addSkeleton = async (container, {
  height,
  width,
}) => {
  await loadCSS(`${window.hlx.codeBasePath}/components/skeleton/skeleton.css`);
  const skeleton = document.createElement('div');
  skeleton.className = 'skeleton-wrapper';
  skeleton.style.width = Number.isNaN(width) ? width : `${width}px`;
  skeleton.style.height = Number.isNaN(height) ? height : `${height}px`;
  container.appendChild(skeleton);
};
export default addSkeleton;
