export declare type Commerce = {
    productListAdds?: ProductListAdds;
    productListOpens?: ProductListOpens;
    productListRemovals?: ProductListRemovals;
    productListViews?: ProductListViews;
    cart?: Cart;
    checkouts?: Checkout;
    commerceScope?: CommerceScope;
    purchases?: Purchases;
    order?: Order;
    promotionID?: string;
    productViews?: ProductView;
    requisitionList?: RequisitionList;
    requisitionListOpens?: RequisitionListOpens;
    requisitionListDeletes?: RequisitionListDeletes;
    requisitionListAdds?: RequisitionListAdds;
    requisitionListRemovals?: RequisitionListRemovals;
    shipping?: Shipping;
};
export declare type CommerceScope = {
    environmentID: string;
    storeCode?: string;
    storeViewCode?: string;
    websiteCode?: string;
};
export declare type ProductView = {
    value: number;
};
export declare type Cart = {
    cartID?: string | null;
};
export declare type Purchases = {
    value: number;
};
export declare type Order = {
    purchaseID: string;
    purchaseOrderNumber?: string;
    payments: Payment[];
    priceTotal?: number;
    currencyCode?: string;
    orderType?: "checkout" | "instant_purchase";
    discountAmount?: number;
};
export declare type Shipping = {
    shippingMethod?: string;
    shippingAmount?: number;
};
export declare type Payment = {
    transactionID?: string;
    paymentAmount?: number;
    paymentType?: string;
    currencyCode?: string;
};
export declare type Checkout = {
    value: number;
};
/**
 * Addition or increase in quantity of a product to the product list, for example a product is added
 * to a shopping cart.
 */
export declare type ProductListAdds = {
    id?: string;
    value: number;
};
/**
 * Addition of a product to an empty product list
 */
export declare type ProductListOpens = {
    id?: string;
    value: number;
};
/**
 * Removal or decrease in quantity of a product from the product list, for example a product is deleted
 * from a shopping cart.
 */
export declare type ProductListRemovals = {
    id?: string;
    value: number;
};
/** View or views of a product-list has occurred. */
export declare type ProductListViews = {
    value: number;
};
export declare type RequisitionList = {
    ID: string;
    name?: string;
    description?: string;
};
/**
 * Creation of a new requisition list
 */
export declare type RequisitionListOpens = {
    id?: string;
    value: number;
};
/**
 * Delete existed requisition list
 */
export declare type RequisitionListDeletes = {
    id?: string;
    value: number;
};
/**
 * Addition of a products to a requisition list
 */
export declare type RequisitionListAdds = {
    id?: string;
    value: number;
};
export declare type RequisitionListRemovals = {
    id?: string;
    value: number;
};
//# sourceMappingURL=commerce.d.ts.map