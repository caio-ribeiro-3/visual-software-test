import type { ReactNode } from "react";

export interface Route {
    path: string;
    component: ReactNode;
}