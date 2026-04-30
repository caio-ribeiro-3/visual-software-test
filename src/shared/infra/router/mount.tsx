import { Route as RRDRoute, BrowserRouter, Routes } from 'react-router'

import type { Route } from "./types";

export function mountRoutes(routes: Route[]) {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => (
                    <RRDRoute key={route.path} path={route.path} element={route.component} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}