import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useMediaQuery } from './use-media-query';

describe('useMediaQuery', () => {
    it('deve retornar o estado inicial baseado na largura da janela', () => {
        window.innerWidth = 500;
        const { result } = renderHook(() => useMediaQuery((w) => w < 600));

        expect(result.current).toBe(true);
    });

    it('deve atualizar o estado quando a janela for redimensionada', () => {
        window.innerWidth = 800;
        const { result } = renderHook(() => useMediaQuery((w) => w < 600));

        expect(result.current).toBe(false);

        act(() => {
            window.innerWidth = 500;
            window.dispatchEvent(new Event('resize'));
        });

        expect(result.current).toBe(true);
    });

    it('deve remover o event listener ao desmontar o componente', () => {
        const removeSpy = vi.spyOn(window, 'removeEventListener');
        const { unmount } = renderHook(() => useMediaQuery((w) => w < 600));

        unmount();
        expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    });
});
