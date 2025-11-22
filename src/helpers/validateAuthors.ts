const validateAuthors: Function = (value: string, minLength: number, maxLength: number) => {
    if (!value.trim()) {
        return [false, `Author Name is required`]

    } else if (value.trim().length < minLength) {
        return [false, 'There should be at least 2 characters']

    } else if (value.trim().length > maxLength) {
        return [false, `There should be no more than ${maxLength} characters`]
    } else {
        return [true, '']
    }
}
export default validateAuthors;