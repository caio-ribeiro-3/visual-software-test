/**
 * Interface que define o contrato fundamental para persistência e recuperação de dados.
 * 
 * Segue o padrão de repositório genérico, permitindo operações básicas sobre
 * qualquer entidade do sistema através de uma interface assíncrona.
 */
export interface Repository {
    /**
     * Recupera a coleção completa de uma entidade específica.
     */
    list<T>(entity: string): Promise<T[]>

    /**
     * Persiste uma nova entrada para a entidade informada.
     */
    create<T>(entity: string, payload: Partial<T>): Promise<T>
}

/**
 * Erro lançado quando uma operação é solicitada para uma entidade
 * que não foi mapeada ou não é suportada pelo repositório concreto.
 */
export class InvalidEntity extends Error {
    constructor(entity: string) {
        super(`Entidade {${entity}} não existe no repositorio`)
    }
}
