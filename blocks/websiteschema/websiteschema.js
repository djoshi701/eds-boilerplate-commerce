import { setJsonLd } from '../../scripts/commerce.js';

function createWebSchemaScript(data) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: new URL('/', window.location),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: new URL('search?q={search_term_string}', window.location),
      },
      'query-input': data?.queryInput,
    },
  };

  setJsonLd(schema, 'WebSite');
}

export default function decorate(block) {
  const data = {};
  [...block.children].forEach((row) => {
    data[row.firstElementChild.children[0].innerText] = row.lastElementChild.children[0].innerText;
  });
  createWebSchemaScript(data);
  const fragment = document.createDocumentFragment();
  block.parentNode.replaceWith(fragment);
}
