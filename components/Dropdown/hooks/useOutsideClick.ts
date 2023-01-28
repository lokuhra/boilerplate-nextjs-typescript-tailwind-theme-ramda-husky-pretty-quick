import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback: any) => {
    const ref = useRef<HTMLInputElement>()

    useEffect(() => {
        const handleClick = (event: any) => {
            if (ref !== null && ref.current !== null && !ref.current?.contains(event.target)) {
                callback()
            }
        }

        document.addEventListener('click', handleClick, true)

        return () => {
            document.removeEventListener('click', handleClick, true)
        }
    }, [ref])

    return ref
}
