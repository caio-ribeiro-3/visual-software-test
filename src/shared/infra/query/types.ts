export interface UseQueryReturn<T> {
    data?: T;
    isLoading: boolean;
    error: Error | null
}

export interface UseQueryPayload<T> {
    handler(): Promise<T>
}

export interface UseMutationReturn<T> {
    isLoading: boolean;
    error: Error | null;
    mutate(payload: T): Promise<void>
}

export interface UseMutationPayload<T, K> {
    handler(payload: T): Promise<K>
}

export interface QueryCallbacks {
    onSuccess?: () => void;
    onFailure?: () => void;
}