import type { Repository } from "@/shared/infra/repository/types"

import { userValidators, type User } from "@/users/entity"

const entity = 'users'
/**
 * Caso de uso responsável por listar todos os usuários do sistema.
 * 
 * Utiliza a infraestrutura de repositório para buscar a coleção completa
 * de entidades de usuários de forma assíncrona.
 */
export class ListUsersUseCase {
    repository: Repository

    constructor(repository: Repository) {
        this.repository = repository
    }

    execute = async () => {
        return await this.repository.list<User>(entity)
    }
}
/**
 * Caso de uso responsável pela criação de um novo usuário.
 * 
 * Executa o fluxo de negócio que inclui a validação obrigatória dos campos
 * (cidade, e-mail, nome e telefone) através dos validadores da entidade
 * antes de persistir os dados no repositório.
 * 
 * Lança um erro caso qualquer validação de campo falhe, interrompendo
 * o processo de criação.
 */
export class CreateUserUseCase {
    repository: Repository

    constructor(repository: Repository) {
        this.repository = repository
    }

    execute = async (payload: Partial<User>) => {
        userValidators.city(payload.city)
        userValidators.email(payload.email)
        userValidators.name(payload.name)
        userValidators.phone(payload.phone)
        return await this.repository.create(entity, payload)
    }
}