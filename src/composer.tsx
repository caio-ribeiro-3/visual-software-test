import type { PropsWithChildren } from "react";

import type { Repository } from "@/shared/infra/repository/types";
import { RepositoryContext } from "@/shared/infra/repository/context";
import { UIProvider } from "@/shared/ui/context";
import { RouterProvider } from "./shared/infra/router/context";

interface ComposerProps {
    repository: Repository
}
/**
 * Componente de composição de contextos da aplicação.
 * 
 * Atua como o ponto de entrada principal para a injeção de dependências,
 * agrupando os provedores de infraestrutura (repositórios) e de interface (UI).
 * 
 * @example
 * <Composer repository={apiRepository}>
 *   ...
 * </Composer>
 */
export function Composer({
    repository,
    children
}: PropsWithChildren<ComposerProps>) {
    return (
        <RepositoryContext.Provider value={repository}>
            <UIProvider>
                <RouterProvider>
                    {children}
                </RouterProvider>
            </UIProvider>
        </RepositoryContext.Provider>
    )
}