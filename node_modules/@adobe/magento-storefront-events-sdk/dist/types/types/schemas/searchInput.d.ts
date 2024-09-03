export declare type SearchInput = {
    units: Array<SearchInputUnit>;
};
export declare type SearchInputUnit = {
    searchUnitId: string;
    searchRequestId: string;
    queryTypes: Array<"products" | "suggestions" | "categories">;
    phrase: string;
    pageSize: number;
    currentPage: number;
    filter: Array<SearchFilter>;
    sort: Array<SearchSort>;
    context?: QueryContextInput;
};
export declare type QueryContextInput = {
    customerGroup: string;
};
export declare type SearchFilter = {
    attribute: string;
    eq?: string;
    in?: Array<string>;
    range?: {
        from?: number;
        to?: number;
    };
};
export declare type SearchSort = {
    attribute: string;
    direction: "ASC" | "DESC";
};
//# sourceMappingURL=searchInput.d.ts.map