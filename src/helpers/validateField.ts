const validateField = (value: string | number, minLength: number = 0, key?: string) => {
    // if (key === 'duration') {
    //     alert(value)
    // }
    if (value.toString().trim() === '') {
        let inputName: string
        key ? inputName = key.charAt(0).toUpperCase() + key.slice(1) : inputName = ''
        return [false, `${inputName} is required`]

    } else if (key !== 'duration' && value.toString().trim().length < minLength) {
        return [false, 'There should be at least 2 characters']

    } else if (key === 'duration' && Number(value) <= 0) {
        return [false, 'The value should be more than 0'];

    } else {
        return [true, '']
    }
    // if (minLength === 0) {
    //     return [value.toString().trim() !== '', 'The field is required'];
    // } else {
    //     return [value.toString().trim().length > minLength - 1, 'There should be at least 2 characters'];
    // }

}
export default validateField;