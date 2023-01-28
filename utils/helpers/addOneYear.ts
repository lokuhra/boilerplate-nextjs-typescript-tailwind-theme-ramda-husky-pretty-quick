export const addOneYear = (date: string) => {
    const newDate = new Date(date)
    newDate.setFullYear(newDate.getFullYear() + 1)

    return newDate.toString()
}
