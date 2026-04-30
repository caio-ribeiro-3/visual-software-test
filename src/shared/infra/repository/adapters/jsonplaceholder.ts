import type { Repository } from "../types";

export class JSONPlaceholderRepository implements Repository {
    private baseURL = 'https://jsonplaceholder.typicode.com';

    private formatRecordToInternalType(entity: string, record: Record<string, any>) {
        if (entity === 'users') {
            return {
                id: record.id,
                name: record.name,
                email: record.email,
                phone: record.phone,
                city: record.address.city,
            }
        }
        throw new Error(`Invalid formatRecordToInternalType entity type ${entity}`)
    }

    private formatRecordToExternalType(entity: string, record: Record<string, any>) {
        if (entity === 'users') {
            return {
                id: record.id,
                name: record.name,
                email: record.email,
                phone: record.phone,
                address: {
                    city: record.city
                }
            }
        }
        throw new Error(`Invalid formatRecordToExternalType entity type ${entity}`)
    }

    private fetcher<T>({
        body,
        entity,
        method,
    }: { entity: string; method: 'GET' | 'POST'; body?: Record<any, any> }) {
        return fetch(`${this.baseURL}/${entity}`, {
            method,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: body ? JSON.stringify(body) : undefined
        })
            .then(response => response.json() as T)
    }

    list<T>(entity: string): Promise<T[]> {
        return this.fetcher<T[]>({
            entity,
            method: 'GET',
        })
            .then(response => (response as any[]).map(record => this.formatRecordToInternalType(entity, record)) as T[])
    }

    create<T>(entity: string, payload: Partial<T>): Promise<T> {
        return this.fetcher<T>({
            entity,
            method: 'POST',
            body: this.formatRecordToExternalType(entity, payload)
        })
    }
}