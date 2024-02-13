import { ReactNode } from "react";
export interface DataHeader {
    render?: string;
    value?: string;
}
export interface DataItem {
}
export interface EzTableProps {
    dataHeaders: DataHeader[];
    dataItems: any[];
    defaultColor?: string;
    userTextColor?: string;
    userColor?: string;
    expand?: boolean;
    children?: ReactNode;
}
