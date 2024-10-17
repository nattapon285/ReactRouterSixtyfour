import React from "react";

export interface Children {
    menuId?: number;
    path: string;
    name: string;
    element: React.ReactElement;
}

export interface ExtendedChildren extends Children {
    subSystemId: number;
}