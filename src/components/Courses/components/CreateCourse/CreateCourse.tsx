import { Link } from "react-router-dom";

import { useState } from "react";

import AuthorItem from "./AuthorItem/AuthorItem";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";
import Textarea from "../../../../common/Textarea/Textarea";

import { BUTTON_CANCEL_TEXT } from "../../../../constants";
import { BUTTON_CREATE_COURSE_TEXT } from "../../../../constants";
import { BUTTON_CREATE_AUTHOR_TEXT } from "../../../../constants";

import getCourseDuration from "../../../../helpers/getCourseDuration";
import validateField from "../../../../helpers/validateField";

import styles from './CreateCourse.module.scss'
import formatCreationDate from "../../../../helpers/formatCreationDate";

// const forbiddenSymbols = /[@#$%^&]/

export interface FormData {
    title?: boolean;
    description?: boolean;
    duration?: boolean;
    author?: boolean;
    [key: string]: boolean | undefined | string;
}

interface errorsObject {
    title?: string;
    description?: string;
    duration?: string;
    author?: string;
}

// type CreatedCoursesObject = {
//     id: string;
//     title: string;
//     description: string;
//     creationDate: string;
//     duration: string;
//     authors: string[];
// }

// type CreatedCoursesAuthorsObject = {
//     id: string;
//     name: string;
// }

interface Props {
    onDataSubmit: Function;
}


const CreateCourse: React.FC<Props> = ({ onDataSubmit }) => {

    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        duration: '',
        author: ''
    })

    let { title, description, duration, author } = formValues;

    const [isInputValid, setIsInputValid] = useState<FormData>({
        title: true,
        description: true,
        duration: true,
        author: true,
    })

    const [errorMessages, setErrorMessages] = useState<errorsObject>({})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target

        setIsInputValid((prev) => ({
            ...prev,
            [name]: true
        }))

        if (name === "duration") {
            setFormValues((prev) => ({
                ...prev,
                [name]: value.replace(/[^0-9]/g, '')
            }))

            if (isNaN(Number(value)) || value[value.length - 1] === ' ') {

                setErrorMessages(prev => ({
                    ...prev,
                    duration: 'The value should be a number',
                }))

                setIsInputValid((prev) => ({
                    ...prev,
                    [name]: false
                }))
            } else {
                setErrorMessages(prev => ({ ...prev, duration: '', }))
            }

        } else {
            setFormValues((prev) => ({
                ...prev,
                [name]: value
            }))

        }
    }

    const handleCreateCourse = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const entries = Object.entries(formValues);
        const newValidationState: FormData = {}


        for (let [key, value] of entries) {
            newValidationState[key] = validateField(value, 2, key)[0]

            setErrorMessages((prev) => ({
                ...prev,
                [key]: validateField(value, 2, key)[1]
            }))
        }

        setIsInputValid(newValidationState)

        if (Object.values(newValidationState).every(element => element === true)) {

            // Course transfer to App
            const newCourse = {
                id: '123',
                title: title,
                description: description,
                creationDate: formatCreationDate(new Date().toString()),
                duration: Number(duration),
                authors: ['124343', '343433']
            }

            onDataSubmit(newCourse)

            event.currentTarget.reset();
            setFormValues({
                title: '',
                description: '',
                duration: '',
                author: ''
            })
            setIsInputValid({
                title: true,
                description: true,
                duration: true,
                author: true,
            })
        }
    }


    const text = getCourseDuration(duration)
    const [firstPart, secondPart] = text.split(' ');

    return (
        <div className={styles.createCourseContainerWrapper}>
            <h1>Course edit/Create page</h1>
            <form onSubmit={handleCreateCourse}>
                <div className={styles.createCourseContainer}>
                    <div className={styles.upperPart}>
                        <div className={styles.mainInfo}>
                            <h3>Main Info</h3>
                            <Input id="title" name="title" value={title} withValidation onChange={(e) => handleChange(e)} labelText="Title" isValid={isInputValid.title} errorMessage={errorMessages.title} width="100%" />
                            <Textarea className={styles.textarea} name="description" id="description" value={description} withValidation onChange={(e) => handleChange(e)} labelText="Description" isValid={isInputValid.description} errorMessage={errorMessages.description}></Textarea>
                        </div>
                    </div>

                    <div className={styles.lowerPart}>
                        <div className={styles.left}>
                            <div className={styles.duration}>
                                <h3>Duration</h3>
                                <div>
                                    <Input id="duration" name="duration" value={duration} withValidation onChange={(e) => handleChange(e)} labelText="Duration" isValid={isInputValid.duration} errorMessage={errorMessages.duration}>
                                        <span><b>{firstPart}</b> {secondPart}</span></Input>
                                </div>
                            </div>
                            <div className={styles.authors}>
                                <div className={styles.authorsInput}>
                                    <h3>Authors</h3>
                                    <div>
                                        <Input id="author" name="author" value={author} withValidation onChange={(e) => handleChange(e)} labelText="Author Name" isValid={isInputValid.author} errorMessage={errorMessages.author}>
                                            <Button buttonText={BUTTON_CREATE_AUTHOR_TEXT} />
                                        </Input>
                                    </div>
                                </div>
                                <div className={styles.authorsList}>
                                    <h4>Authors List</h4>
                                    <ul>
                                        <li><AuthorItem name="Author One" /></li>
                                        <li><AuthorItem name="Author Two" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div>
                                <h3>Course Authors</h3>
                                <p>Author list is empty</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonsContainer}>
                    <Link to="/"><Button buttonText={BUTTON_CANCEL_TEXT} /></Link>
                    <Button type="submit" buttonText={BUTTON_CREATE_COURSE_TEXT} />
                </div>

            </form>
        </div>
    )
}
export default CreateCourse;