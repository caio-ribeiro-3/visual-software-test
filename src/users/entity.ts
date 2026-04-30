export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    city: string;
}

export const userValidators: Record<keyof Omit<User, 'id'>, ((payload: unknown) => void)> = {
    name: (payload) => {
        if (typeof payload !== 'string') throw new Error('Campo nome deve ser do tipo texto');
        const trimmed = payload.trimStart().trimEnd()
        if (trimmed.length < 4) throw new Error('Campo nome deve ter mais de 4 caracteres');
    },
    city: (payload) => {
        if (typeof payload !== 'string') throw new Error('Campo cidade deve ser do tipo texto');
        const trimmed = payload.trimStart().trimEnd()
        if (trimmed.length < 4) throw new Error('Campo cidade deve ter mais de 4 caracteres');
    },
    email: (payload) => {
        if (typeof payload !== 'string') throw new Error('Campo email deve ser do tipo texto');
        const trimmed = payload.trim()
        if (!trimmed.length) throw new Error('Campo email não deve estar vazio');
        const emailInput = document.createElement('input')
        emailInput.type = 'email'
        emailInput.value = payload
        if (!emailInput.checkValidity()) throw new Error('Campo email é inválido');
    },
    phone: (payload) => {
        if (typeof payload !== 'string') throw new Error('Campo telefone deve ser do tipo texto');
        const trimmed = payload.trim()
        if (!trimmed.length) throw new Error('Campo telefone não deve estar vazio');
        const regex = /^\d+$/;
        if (!regex.test(payload)) throw new Error('Campo telefone contém caracteres inválidos');
        if (trimmed.length !== 11) throw new Error('Campo telefone deve conter 11 digitos com DDD e numero');
    }
}