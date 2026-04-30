

import { InvalidHTTPResponse, type Repository } from "../types";

export class ApiRepository implements Repository {
    private baseURL = import.meta.env.VITE_API_ENDPOINT as string;

    private async fetcher<T>({
        body,
        entity,
        method,
    }: { entity: string; method: 'GET' | 'POST'; body?: Record<any, any> }) {
        const response = await fetch(`${this.baseURL}/${entity}`, {
            method,
            headers: {
                'Content-type': 'application/json',
            },
            body: body ? JSON.stringify(body) : undefined
        })

        if (!response.ok) {
            try {
                throw new Error((await response.json()).message)
            } catch {
                throw new InvalidHTTPResponse();
            }
        }

        return await response.json() as T
    }

    list<T>(entity: string): Promise<T[]> {
        return this.fetcher<T[]>({
            entity,
            method: 'GET',
        })
    }

    create<T>(entity: string, payload: Partial<T>): Promise<T> {
        return this.fetcher<T>({
            entity,
            method: 'POST',
            body: payload
        })
    }
}