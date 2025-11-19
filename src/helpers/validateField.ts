const validateField = (value: string | number, minLength: number = 0) => {
    if (typeof value === 'number') {
        return value > 0;
    }
    if (minLength === 0) {
        return value.toString().trim() !== '';
    } else {
        return value.toString().trim().length > minLength - 1;
    }
}
export default validateField;