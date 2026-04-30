import { useEffect, useState } from "react"

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