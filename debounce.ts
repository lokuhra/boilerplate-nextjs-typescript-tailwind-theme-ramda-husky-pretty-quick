export const debounce = (callback: any, wait: number) => {
    let timeoutId: any = null
    return (...args: any) => {
        window.clearTimeout(timeoutId)
        timeoutId = window.setTimeout(() => {
            // eslint-disable-next-line prefer-spread
            callback.apply(null, args)
        }, wait)
    }
}
