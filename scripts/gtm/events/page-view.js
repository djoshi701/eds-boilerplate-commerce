function pushPageViewEvent() {
  window.dataLayer = window.dataLayer || [];
  // testing page view event
  if (window?.location?.href) {
    window.dataLayer.push({
      event: 'pageview',
      pagePath: window.location.href,
      pageTitle: document?.title ?? 'Adobe Commerce Storefornt',
      visitorType: 'customer',
    });
  }
}

export default pushPageViewEvent;
