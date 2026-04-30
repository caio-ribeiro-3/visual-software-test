import { createContext, useContext } from "react";

import type { Repository } from "./types";

export const RepositoryContext = createContext<Repository | undefined>(undefined)

export function useRepository() {
    return useContext(RepositoryContext)!
}