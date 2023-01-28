export const capitalize = (str: string | null) => {
    if (str === null) {
        return
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}
