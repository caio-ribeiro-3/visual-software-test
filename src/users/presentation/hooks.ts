import { useMutation, useQuery } from "@/shared/infra/query/hooks";
import { useRepository } from "@/shared/infra/repository/context";
import { useForm } from "@/shared/form/use-form";
import type { QueryCallbacks } from "@/shared/infra/query/types";

import { CreateUserUseCase, ListUsersUseCase } from "@/users/use-cases";
import { userValidators, type User } from "@/users/entity";



/**
 * Hook de domínio para listagem de usuários.
 * 
 * Encapsula a lógica de busca utilizando o `ListUsersUseCase` injetado com o repositório
 * do contexto. Retorna o estado reativo da consulta (data, isLoading, error).
 */
export function useListUsers() {
    const repository = useRepository()

    return useQuery({
        handler: new ListUsersUseCase(repository).execute
    })
}

/**
 * Hook de domínio para criação de um novo usuário.
 * 
 * Integra de forma orquestrada:
 * 1. O gerenciamento de formulário (`useForm`) com validações específicas da entidade.
 * 2. A lógica de negócio (`CreateUserUseCase`).
 * 3. O estado da mutação (`useMutation`) para controle de carregamento e erros de rede.
 * 
 * Retorna uma interface simplificada para a UI controlar os campos e disparar a criação.
 */
export function useCreateUser({ onSuccess }: QueryCallbacks) {
    const repository = useRepository()

    const defaultValues = {
        city: '',
        email: '',
        name: '',
        phone: ''
    }

    const form = useForm<Omit<User, 'id'>>({
        defaultValues,
        validators: userValidators,
    })

    const mutation = useMutation({
        handler: new CreateUserUseCase(repository).execute,
        onSuccess,
    })

    return {
        values: form.values,
        errors: form.errors,
        setValues: form.setValues,
        isCreating: mutation.isLoading,
        creationError: mutation.error,
        execute() {
            form.onSubmit(mutation.mutate)
        }
    }
}