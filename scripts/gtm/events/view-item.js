function pushViewItemEvent(productDetail) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'view_item',
    ecommerce: {
      currency: productDetail?.price?.final?.amount?.currency,
      value: productDetail?.price?.final?.amount?.value,
      items: [
        {
          item_id: productDetail?.sku,
          item_name: productDetail?.name,
          item_brand: 'Test brand',
          price: productDetail.price?.final?.amount?.value,
          quantity: 1,
        },
      ],
    },
  });
}

export default pushViewItemEvent;
