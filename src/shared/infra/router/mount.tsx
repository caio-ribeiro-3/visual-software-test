import { Route as RRDRoute, Routes } from 'react-router'

import type { Route } from "./types";



/**
 * Configura e renderiza a árvore de navegação da aplicação.
 * 
 * Recebe uma lista de definições de rotas e as transforma em uma estrutura
 * navegável, gerenciando a correspondência entre os caminhos da URL e os
 * componentes de página correspondentes.
 */
export function mountRoutes(routes: Route[]) {
    return (
        <Routes>
            {routes.map((route) => (
                <RRDRoute key={route.path} path={route.path} element={route.component} />
            ))}
        </Routes>
    )
}