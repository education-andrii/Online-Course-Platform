import { AuthorsType } from "../components/Courses/Courses";
const validateAuthors: Function = (value: string, minLength: number, maxLength: number, allAuthors?: AuthorsType[], addedToCourse?: AuthorsType[]) => {
    if (addedToCourse && addedToCourse.length !== 0) {
        return [true, '']
    } else if (allAuthors && allAuthors.length !== 0) {
        return [true, '']
    }
    if (!value.trim()) {
        return [false, `Author Name is required`]

    } else if (value.trim().length < minLength) {
        return [false, 'There should be at least 2 characters']

    } else if (value.trim().length > maxLength) {
        return [false, `There should be no more than ${maxLength} characters`]
    } else if (allAuthors && addedToCourse && allAuthors?.length === 0 && addedToCourse?.length === 0) {
        return [false, 'Author Name is required']
    }
    else {
        return [true, '']
    }
}
export default validateAuthors;