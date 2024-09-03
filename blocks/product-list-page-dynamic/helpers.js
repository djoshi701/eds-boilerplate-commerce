/* eslint-disable import/prefer-default-export */
import { getMetadata } from '../../scripts/aem.js';

function getPLPconfig() {
  const path = window.location.pathname;
  const result = /\/category\/(.+)$/.exec(path);
  const urlpath = result?.[1];
  const category = getMetadata('category-id') || null;
  if (!urlpath || !category) {
    return {
      urlpath: null,
      category: null,
    };
  }
  return {
    urlpath,
    category,
  };
}

export {
  getPLPconfig,
};
