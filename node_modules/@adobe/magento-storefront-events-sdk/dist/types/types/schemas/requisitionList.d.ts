import { Product } from "./product";
export declare type RequisitionList = {
    id: string;
    name?: string;
    description?: string;
};
export declare type RequisitionListItem = Product & {
    quantity: number;
    selectedOptions: Array<SelectedOption>;
};
export declare type RequisitionListItems = {
    items: Array<RequisitionListItem>;
};
export declare type SelectedOption = {
    attribute: string;
    value: string;
};
//# sourceMappingURL=requisitionList.d.ts.map