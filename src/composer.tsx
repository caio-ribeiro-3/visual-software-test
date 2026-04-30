import type { PropsWithChildren } from "react";

import type { Repository } from "@/shared/infra/repository/types";
import { RepositoryContext } from "@/shared/infra/repository/context";
import { UIProvider } from "@/shared/ui/context";

interface ComposerProps {
    repository: Repository
}

export function Composer({
    repository,
    children
}: PropsWithChildren<ComposerProps>) {
    return (
        <RepositoryContext.Provider value={repository}>
            <UIProvider>
                {children}
            </UIProvider>
        </RepositoryContext.Provider>
    )
}