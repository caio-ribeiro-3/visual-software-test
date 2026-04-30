import { useCallback } from 'react'
import { useNavigate as useNavigateRRD } from 'react-router'


/**
 * Hook para navegação programática entre páginas.
 * 
 * Fornece uma função que permite redirecionar o usuário para
 * diferentes caminhos da aplicação de forma imperativa.
 */
export function useNavigate() {
    const navigate_ = useNavigateRRD()

    const navigate = useCallback((to: string) => {
        navigate_({
            pathname: to
        })
    }, [navigate_])

    return navigate
}