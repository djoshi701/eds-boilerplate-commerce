import { setJsonLd } from '../../scripts/commerce.js';

function createOrgSchemaScript(data) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: new URL('/', window.location),
    address: {
      '@type': 'PostalAddress',
      streetAddress: data?.streetAddress,
      addressLocality: data?.addressLocality,
      addressRegion: data?.addressRegion,
      postalCode: data?.postalCode,
    },
    logo: data?.logo,
    name: data?.name,
    email: data?.email,
    sameAs: [data?.sameAs],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: data?.telephone,
      contactType: data?.contactType,
      contactOption: data?.contactOption,
      areaServed: data?.areaServed,
      availableLanguage: data?.availableLanguage,
    },
  };

  setJsonLd(schema, 'Organization');
}

export default function decorate(block) {
  const data = {};
  [...block.children].forEach((row) => {
    data[row.firstElementChild.children[0].innerText] = row.lastElementChild.children[0].innerText;
  });
  createOrgSchemaScript(data);
  const fragment = document.createDocumentFragment();
  block.parentNode.replaceWith(fragment);
}
