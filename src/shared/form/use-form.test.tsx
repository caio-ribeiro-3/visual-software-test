import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useForm } from './use-form';

describe('useForm', () => {
    it('deve atualizar valores e validar com throw', async () => {
        const validators = {
            name: (val: string) => {
                if (val.length < 3) throw new Error('Curto demais');
            }
        };

        const { result } = renderHook(() => useForm({
            defaultValues: { name: '' },
            validators
        }));

        await act(async () => {
            result.current.setValues({ name: 'Ab' });
        });

        expect(result.current.errors.name?.message).toBe('Curto demais');

        await act(async () => {
            result.current.setValues({ name: 'Abc' });
        });

        expect(result.current.errors.name).toBeUndefined();
    });

    it('não deve chamar onSubmit se houver erros', async () => {
        const callback = vi.fn();
        const { result } = renderHook(() => useForm({
            defaultValues: { age: 0 },
            validators: { age: (v) => { if (v < 18) throw new Error('Menor'); } }
        }));

        await act(async () => {
            result.current.onSubmit(callback)
        });

        expect(callback).not.toHaveBeenCalled();
    });
});
