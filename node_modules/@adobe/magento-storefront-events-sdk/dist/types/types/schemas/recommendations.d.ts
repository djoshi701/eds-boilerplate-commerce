export declare type Recommendations = {
    units: Array<RecommendationUnit>;
};
export declare type RecommendationUnit = {
    unitId: string;
    unitName: string;
    unitType: string;
    searchTime: number;
    totalProducts: number;
    primaryProducts: number;
    backupProducts: number;
    products: Array<RecommendedProduct>;
    pagePlacement: string | null;
    typeId: string;
    yOffsetTop?: number | null;
    yOffsetBottom?: number | null;
};
export declare type RecommendedProduct = {
    rank: number;
    score: number;
    sku: string;
    name: string;
    productId: number;
    shortDescription?: string | null;
    type: string;
    visibility: string;
    categories: Array<string>;
    weight: number;
    weightType?: string | null;
    currency?: string;
    image?: Image | null;
    smallImage?: Image | null;
    thumbnailImage?: Image | null;
    swatchImage?: string | null;
    url: string;
    prices?: Prices;
    queryType: string;
};
export declare type Image = {
    label?: string | null;
    url: string;
};
export declare type Prices = {
    maximum: Price;
    minimum: Price;
};
export declare type Price = {
    finalAdjustments: Array<Adjustment>;
    final: number;
    regular: number;
    regularAdjustments: Array<Adjustment>;
};
export declare type Adjustment = {
    code: string;
    amount: number;
};
//# sourceMappingURL=recommendations.d.ts.map