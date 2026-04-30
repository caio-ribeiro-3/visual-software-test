import type { Repository } from "@/shared/infra/repository/types"

import { userValidators, type User } from "@/users/entity"

const entity = 'users'

export class ListUsersUseCase {
    repository: Repository

    constructor(repository: Repository) {
        this.repository = repository
    }

    execute = async () => {
        return await this.repository.list<User>(entity)
    }
}

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