function pushViewCartEvent() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
  window.dataLayer.push({
    event: 'view_cart',
    ecommerce: {
      currency: 'USD',
      value: 30.03,
      items: [
        {
          item_id: '24-WB06',
          item_name: 'Endeavor Daytrip Backpack',
          affiliation: 'Google Merchandise Store',
          coupon: 'SUMMER_FUN',
          discount: 2.22,
          index: 0,
          item_brand: 'Test brand',
          item_category: 'Apparel',
          item_category2: 'Adult',
          item_category3: 'Shirts',
          item_category4: 'Crew',
          item_category5: 'Short sleeve',
          item_list_id: 'related_products',
          item_list_name: 'Related Products',
          item_variant: 'green',
          location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
          price: 10.01,
          quantity: 3,
        },
      ],
    },
  });
}

export default pushViewCartEvent;
