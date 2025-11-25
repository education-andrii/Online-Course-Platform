const validateField = (value: string | number, minLength: number = 0, key?: string) => {
    if (key !== 'duration' && value.toString().trim().length < minLength) {
        return [false, `${key} is required and should be at least 2 characters`]

    } else if (value.toString().trim() === '') {
        let inputName: string
        key ? inputName = key.charAt(0).toUpperCase() + key.slice(1) : inputName = '';
        key === 'author' ? inputName = inputName + ' Name' : inputName
        return [false, `${inputName} is required`]

    } else if (key === 'duration' && Number(value) <= 0) {
        return [false, 'The value should be more than 0'];

    } else {
        return [true, '']
    }

}
export default validateField;