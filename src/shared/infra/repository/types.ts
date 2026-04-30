export interface Repository {
    list<T>(entity: string): Promise<T[]>
    create<T>(entity: string, payload: Partial<T>): Promise<T>
}

export class InvalidEntity extends Error {
    constructor(entity: string) {
        super(`Entidade {${entity}} não existe no repositorio`)
    }
}
