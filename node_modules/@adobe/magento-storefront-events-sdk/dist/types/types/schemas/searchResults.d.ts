export declare type SearchResults = {
    units: Array<SearchResultUnit>;
};
export declare type SearchResultUnit = {
    searchUnitId: string;
    searchRequestId: string;
    rankingType?: string;
    trendingWindow?: string;
    executionTime?: number;
    products: Array<SearchResultProduct>;
    categories: Array<SearchResultCategory>;
    suggestions: Array<SearchResultSuggestion>;
    page: number;
    perPage: number;
    facets: Array<SearchFacet> | null;
};
export declare type SearchResultProduct = {
    name: string;
    sku: string;
    url: string;
    imageUrl: string;
    price?: number;
    rank: number;
};
export declare type SearchResultCategory = {
    name: string;
    url: string;
    rank: number;
};
export declare type SearchResultSuggestion = {
    suggestion: string;
    rank: number;
};
export declare type SearchFacet = {
    attribute: string;
    buckets: Array<SearchBucket>;
    title: string;
    type: "PINNED" | "INTELLIGENT" | "POPULAR";
};
export declare type SearchBucket = RangeBucket | ScalarBucket | StatsBucket;
export declare type RangeBucket = {
    count: number;
    from: number;
    title: string;
    to?: number;
};
export declare type ScalarBucket = {
    count: number;
    title: string;
};
export declare type StatsBucket = {
    min: number;
    max: number;
    title: string;
};
//# sourceMappingURL=searchResults.d.ts.map