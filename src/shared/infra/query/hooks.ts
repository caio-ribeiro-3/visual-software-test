import { useEffect, useState } from "react";

import { useToast } from "@/shared/ui/toast";

import type { QueryCallbacks, UseMutationPayload, UseMutationReturn, UseQueryPayload, UseQueryReturn } from "./types";

/**
 * Hook para execução de consultas de dados (fetch) na montagem do componente.
 * 
 * Gerencia o ciclo de vida de uma requisição assíncrona, controlando estados de
 * carregamento, sucesso e erro. Dispara automaticamente um alerta visual (toast)
 * caso a execução do handler falhe.
 */
export function useQuery<T>({
    handler
}: UseQueryPayload<T>): UseQueryReturn<T> {
    const toaster = useToast()
    const [state, setState] = useState<{
        data?: T;
        isLoading: boolean,
        error: Error | null
    }>({
        error: null,
        isLoading: true,
        data: undefined
    })

    useEffect(() => {
        (async () => {
            try {
                const data = await handler()
                setState(prev => ({ ...prev, data }))
            } catch (e) {
                setState(prev => ({ ...prev, error: e as Error }))
                toaster(String(e), 'error')
            } finally {
                setState(prev => ({ ...prev, isLoading: false }))
            }
        })()
    }, [])

    return state
}

/**
 * Hook para execução de operações de alteração de dados (mutations).
 * 
 * Fornece uma função de execução manual que encapsula o tratamento de erros,
 * estados de ocupado (isLoading) e disparos de feedbacks visuais. Permite a
 * configuração de callbacks para sincronização de efeitos colaterais após o
 * sucesso ou falha da operação.
 */
export function useMutation<T, K>({
    handler,
    onFailure,
    onSuccess
}: UseMutationPayload<T, K> & QueryCallbacks): UseMutationReturn<T> {
    const toaster = useToast()
    const [state, setState] = useState<{
        isLoading: boolean,
        error: Error | null
    }>({
        error: null,
        isLoading: false,
    })

    const mutate = async (payload: Parameters<typeof handler>[0]) => {
        try {
            await handler(payload)
            onSuccess?.()
        } catch (e) {
            setState(prev => ({ ...prev, error: e as Error }))
            onFailure?.()
            toaster(String(e), 'error')
        } finally {
            setState(prev => ({ ...prev, isLoading: false }))
        }
    }

    return {
        ...state,
        mutate
    }
}