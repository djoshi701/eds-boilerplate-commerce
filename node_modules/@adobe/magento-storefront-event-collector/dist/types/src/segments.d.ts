/**
 * Clear the browsers cookies set for Adobe Commerce AEP Segments
 */
export declare const clearAdobeCommerceAEPSegmentCookies: () => void;
/**
 * Set the browser cookies with the returned segmentMembershipIds from the proxy service
 *
 * @note for now we'll keep the `expires` param for cookies set to default.
 *
 * @param userSegmentIds comma delimited string of `segmentMembershipIds` that is returned from the proxy service
 */
export declare const setAdobeCommerceAEPSegmentCookies: (userSegmentIds?: string) => void;
export declare const getSegmentIds: (destinations?: never[]) => string;
//# sourceMappingURL=segments.d.ts.map