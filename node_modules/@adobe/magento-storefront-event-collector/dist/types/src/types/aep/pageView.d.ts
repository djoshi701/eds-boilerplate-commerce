/** View(s) of a webpage has occurred. */
export declare type PageViews = {
    value: number;
};
/** Details about the web page where the web interaction occurred. */
export declare type WebPageDetails = {
    pageViews?: PageViews;
    name?: string;
    URL?: string;
    siteSection?: string;
};
export declare type Referrer = {
    URL?: string;
};
/** Link clicks, web page details, referrer information, and browser details. */
export declare type Web = {
    webPageDetails?: WebPageDetails;
    webReferrer?: Referrer;
};
//# sourceMappingURL=pageView.d.ts.map