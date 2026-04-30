import { useMutation, useQuery } from "@/shared/infra/query/hooks";
import { useRepository } from "@/shared/infra/repository/context";
import { useForm } from "@/shared/form/use-form";
import type { QueryCallbacks } from "@/shared/infra/query/types";

import { CreateUserUseCase, ListUsersUseCase } from "@/users/use-cases";
import { userValidators, type User } from "@/users/entity";

export function useListUsers() {
    const repository = useRepository()

    return useQuery({
        handler: new ListUsersUseCase(repository).execute
    })
}

export function useCreateUser({ onSuccess }: QueryCallbacks) {
    const repository = useRepository()

    const form = useForm<Omit<User, 'id'>>({
        defaultValues: {
            city: '',
            email: '',
            name: '',
            phone: ''
        },
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