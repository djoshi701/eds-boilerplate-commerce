import getYotpoBottomLine from '../../../scripts/yotpo/api/bottomline.js';

const getStar = (average, pos) => (pos > average ? '☆' : '★');

export default function Title(ctx) {
  const reviewsWrapper = document.createElement('div');
  reviewsWrapper.className = 'yotpo-display-wrapper';
  ctx.appendSibling(reviewsWrapper);
  getYotpoBottomLine('2250').then((payload) => {
    reviewsWrapper.innerHTML = `
      <span class="yotpo-stars">
        <span>${getStar(payload.average, 1)}</span>
        <span>${getStar(payload.average, 2)}</span>
        <span>${getStar(payload.average, 3)}</span>
        <span>${getStar(payload.average, 4)}</span>
        <span>${getStar(payload.average, 5)}</span>
      </span>
      <span>${payload.total} Review</span>
      `;
  });
  reviewsWrapper.style.cursor = 'pointer';
  reviewsWrapper.addEventListener('click', () => {
    setTimeout(() => {
      const reviewsSection = document.querySelector('.yotpo.yotpo-main-widget');
      const headerOffset = 100;
      const elementPosition = reviewsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      if (reviewsSection) {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
}
