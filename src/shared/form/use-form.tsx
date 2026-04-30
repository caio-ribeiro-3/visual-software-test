import { useForm as useFormRHF } from "react-hook-form";

export type Validators<T> = {
    [K in keyof T]?: (value: T[K], allValues: T) => void;
};

export type FormErrors<T> = {
    [K in keyof T]?: { message: string };
};
/**
 * Hook Facade para gerenciamento de formulários.
 * 
 * Abstrai a complexidade interna de bibliotecas, fornecendo uma interface limpa
 * e desacoplada para os componentes de UI.
 * 
 * @example
 * const { field, onSubmit } = useForm({
 *   defaultValues: { email: '' },
 *   validators: { 
 *     email: (v) => { if (!v.includes('@')) throw new Error('Email inválido'); } 
 *   }
 * });
 */
export const useForm = <T extends Record<string, any>>({
    defaultValues,
    validators
}: { defaultValues: T, validators: Validators<T> }) => {

    const {
        handleSubmit: rhfHandleSubmit,
        setValue,
        watch,
        formState: { errors: rhfErrors },
    } = useFormRHF<T>({
        defaultValues: defaultValues as any,
        mode: 'onChange',
        resolver: async (data) => {
            const errors: any = {};
            for (const key in validators) {
                try {
                    validators[key]?.(data[key], data as T);
                } catch (err: any) {
                    errors[key] = { type: 'validate', message: err.message };
                }
            }
            return { values: Object.keys(errors).length === 0 ? data : {}, errors };
        }
    });

    return {
        values: watch() as T,
        errors: rhfErrors as FormErrors<T>,
        onSubmit: (callback: (data: T) => void) => {
            return rhfHandleSubmit(
                (data) => callback(data as T)
            )();
        },
        setValues: (payload: Partial<T>) => {
            Object.entries(payload).forEach(([k, v]) => setValue(k as any, v as any, { shouldValidate: true }));
        }
    };
};