import type { PropsWithChildren } from 'react';

import { BrowserRouter } from 'react-router'

export function RouterProvider({ children }: PropsWithChildren) {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}