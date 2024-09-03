import { Channel } from "./channel";
import { Commerce } from "./commerce";
import { Web } from "./pageView";
import { ProductListItem } from "./productListItem";
/** The Beacon Schema that matches our schema object in AEP */
export declare type BeaconSchema = {
    _id?: string;
    eventType?: string;
    channel?: Channel;
    commerce?: Commerce;
    identityMap?: IdentityMap;
    productListItems?: ProductListItem[];
    web?: Web;
    person?: Account;
    personID?: string;
    personalEmail?: Email;
    userAccount?: AccountActions;
    searchRequest?: SearchRequest;
    searchResponse?: SearchResponse;
    siteSearch?: Search;
};
export declare type IdentityMap = {
    ECID: {
        id: string;
        primary: boolean;
    }[];
    email?: {
        id: string;
        primary: boolean;
    }[];
};
export declare type Account = {
    accountID?: string;
    accountType?: string;
};
export declare type Email = {
    address?: string;
};
export declare type AccountActions = {
    login?: number;
    logout?: number;
    createProfile?: number;
    updateProfile?: number;
};
export declare type SearchRequest = {
    id?: string;
    value: number;
};
export declare type SearchResponse = {
    id?: string /** contains ID of the search request so the two can be mapped to each other */;
    value: number;
};
export declare type Search = {
    query?: string;
    refinements?: Filter[];
    sort?: Sort[];
    suggestions?: string[];
    numberOfResults?: number;
};
export declare type Filter = {
    attribute: string;
    value: string[];
    isRange: boolean;
};
export declare type Sort = {
    attribute: string;
    order: "ASC" | "DESC";
};
//# sourceMappingURL=beaconSchema.d.ts.map