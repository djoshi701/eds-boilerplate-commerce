import { AlloySendEventResponse, BeaconSchema } from "../../types/aep";
export declare type CommandType = "configure" | "sendEvent" | "getIdentity" | "setConsent" | "getLibraryInfo";
export declare type ConfigOptions = {
    edgeConfigId: string;
    orgId: string;
    /** defaults to false */
    debugEnabled?: boolean;
    /** defaults to "in" */
    defaultConsent?: "in" | "out" | "pending";
    /** defaults to edge.adobedc.net */
    edgeDomain?: string;
    edgeBasePath?: string;
    onBeforeEventSend?: () => void;
};
export interface XDM<T> {
    xdm: T;
}
export declare type consentOptions = {
    consent: [
        {
            standard: "Adobe";
            version: "1.0" | "2.0";
            value: {
                general: "in" | "out";
            };
        }
    ];
};
export declare type AlloyInstance = (command: CommandType, options?: ConfigOptions | XDM<BeaconSchema> | consentOptions) => Promise<void | AlloyIndentity | AlloySendEventResponse>;
export declare type AlloyIndentity = {
    identity: {
        ECID?: string;
    };
};
//# sourceMappingURL=alloy.types.d.ts.map