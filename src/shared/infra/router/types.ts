import type { ReactNode } from "react";
/**
 * Define a estrutura de uma rota no sistema.
 * 
 * Associa um caminho de URL específico ao elemento visual que deve 
 * ser exibido quando essa rota for acessada pelo usuário.
 */
export interface Route {
    /** Caminho da URL (ex: '/usuarios'). */
    path: string;
    /** Componente ou elemento a ser renderizado. */
    component: ReactNode;
}