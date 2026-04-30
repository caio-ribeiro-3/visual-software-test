import { useCallback } from 'react'
import { useNavigate as useNavigateRRD } from 'react-router'

export function useNavigate() {
    const navigate_ = useNavigateRRD()

    const navigate = useCallback((to: string) => {
        navigate_({
            pathname: to
        })
    }, [navigate_])

    return navigate
}