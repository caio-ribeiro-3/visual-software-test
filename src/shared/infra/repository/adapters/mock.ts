import { InvalidEntity, type Repository } from "../types";

export class MockRepository implements Repository {
    storage = {
        users: {
            data: [
                { id: '1', name: 'Ana Silva', email: 'ana@email.com', phone: '1199999999', city: 'São Paulo' },
                { id: '2', name: 'Bruno Costa', email: 'bruno@email.com', phone: '2198888888', city: 'Rio de Janeiro' },
            ],
            lastId: 2
        }
    }

    getEntityStorage(entity: string) {
        const entityStorage = this.storage[entity as keyof typeof this.storage]
        if (!entityStorage) throw new InvalidEntity(entity)
        return entityStorage
    }

    returnAsPromise<T>(value: T) {
        return new Promise<T>(resolve => {
            setTimeout(() => resolve(value), 1000)
        })
    }

    list<T>(entity: string): Promise<T[]> {
        const entityStorage = this.getEntityStorage(entity)
        return this.returnAsPromise<T[]>(entityStorage.data as T[])
    }

    create<T>(entity: string, payload: Partial<T>): Promise<T> {
        const entityStorage = this.getEntityStorage(entity)
        const newRecord = {
            ...payload,
            id: String(entityStorage.lastId++)
        } as T
        // @ts-expect-error
        entityStorage.data.push(newRecord)
        return this.returnAsPromise<T>(newRecord)
    }
}