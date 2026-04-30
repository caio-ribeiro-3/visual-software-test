import { useEffect, useState } from "react"



/**
 * Hook para detecção reativa de dimensões da tela.
 * 
 * Escuta eventos de redimensionamento da janela e aplica uma lógica 
 * de comparação para determinar se o estado atual atende a um 
 * critério de largura específico.
 * 
 * retorna um booleano indicando se a condição da media query é atendida.
 */
export function useMediaQuery(cb: (payload: number) => boolean) {
    const [state, setState] = useState(cb(window.innerWidth))

    useEffect(() => {
        function update() {
            setState(cb(window.innerWidth))
        }

        window.addEventListener('resize', update)

        return () => {
            window.removeEventListener('resize', update)
        }
    }, [])

    return state
}