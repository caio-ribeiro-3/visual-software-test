import { createContext, useContext } from "react";

import type { Repository } from "./types";
/**
 * Contexto React para injeção da implementação concreta do repositório.
 * 
 */
export const RepositoryContext = createContext<Repository | undefined>(undefined)
/**
 * Hook para acessar a instância do repositório configurada no contexto.
 * 
 * Retorna a implementação do repositório injetada.
 */
export function useRepository() {
    return useContext(RepositoryContext)!
}