import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import AuthorItem from "../AuthorItem/AuthorItem";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import Textarea from "../../common/Textarea/Textarea";

import { BUTTON_CANCEL_TEXT } from "../../constants";
import { BUTTON_CREATE_COURSE_TEXT } from "../../constants";
import { BUTTON_CREATE_AUTHOR_TEXT } from "../../constants";

import getCourseDuration from "../../helpers/getCourseDuration";
import validateField from "../../helpers/validateField";
import validateAuthors from "../../helpers/validateAuthors";

import styles from './CreateCourse.module.scss'
import formatCreationDate from "../../helpers/formatCreationDate";

import { AuthorsType } from "../Courses/Courses";

import { v4 as uuidv4 } from 'uuid';


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

interface Props {
    onDataSubmit: Function;
}


const CreateCourse: React.FC<Props> = ({ onDataSubmit }) => {

    const navigate = useNavigate()

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

    const [allAuthors, setAllAuthors] = useState<AuthorsType[]>([]);

    const [addedToCourseAuthors, setAddedToCourseAuthors] = useState<AuthorsType[]>([])

    const [areAuthorsAdded, setAreAuthorsAdded] = useState<boolean>(true);

    //Handler for assigning values ​​to a state variable 

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target

        setIsInputValid((prev) => ({
            ...prev,
            [name]: true
        }))
        //Logic for "onfly" duration input field validation
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

        }//-----------------------
        else {
            setFormValues((prev) => ({
                ...prev,
                [name]: value
            }))

        }
    }

    // Handler for an Author creation

    const handleAuthorCreation = () => {

        setErrorMessages((prev) => ({
            ...prev,
            author: validateAuthors(author, 2, 20)[1]
        }))
        setIsInputValid((prev) => ({ ...prev, author: validateAuthors(author, 2, 20)[0] }))
        if (validateAuthors(author, 2, 20)[0]) {
            setAllAuthors((prev) => ([...prev, { id: uuidv4(), name: author }]))

            setFormValues((prev) => ({
                ...prev,
                author: ''
            }))
        } else {
            return
        }
    }

    // Handler for adding or deleting AuthorItem to or from the Course Authors section

    const handleAuthorAddDelete = (id: string) => {
        const authorToAdd = allAuthors.find(a => a.id === id);
        const authorToDelete = addedToCourseAuthors.find(a => a.id === id);
        if (authorToAdd) {
            setAddedToCourseAuthors((prev) => [
                ...prev,
                authorToAdd
            ])
            setAllAuthors((prev) => [
                ...prev.filter(a => a.id !== id)
            ])
            // Logic for validation
            setIsInputValid((prev) => ({
                ...prev,
                author: true
            }))
            setAreAuthorsAdded(true)
            //--------------------
        } else if (authorToDelete) {
            setAllAuthors((prev) => [
                ...prev,
                authorToDelete
            ])
            setAddedToCourseAuthors((prev) => [
                ...prev.filter(a => a.id !== id)
            ])
        }
    }

    // Handler for the Course creation

    const handleCreateCourse = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const entries = Object.entries(formValues);
        const newValidationState: FormData = {}


        for (let [key, value] of entries) {
            newValidationState[key] = key !== 'author' ? validateField(value, 2, key)[0] : validateAuthors(author, 2, 20, allAuthors, addedToCourseAuthors)[0] //validateAuthors(author, 2, 20)[0] validateField(value, 2, key, allAuthors, addedToCourse)[0]

            setErrorMessages((prev) => ({
                ...prev,
                [key]: key !== 'author' ? validateField(value, 2, key)[1] : validateAuthors(author, 2, 20, allAuthors, addedToCourseAuthors)[1] // validateAuthors(author, 2, 20)[1]
            }))
        }

        setIsInputValid(newValidationState);
        //Additional validation for Course Authors
        if (addedToCourseAuthors.length === 0) {
            setAreAuthorsAdded(false)
        } else if (addedToCourseAuthors.length !== 0) {
            setAreAuthorsAdded(true)
        }
        //------------------------------

        if (Object.values(newValidationState).every(element => element === true) && addedToCourseAuthors.length !== 0) {

            // Transfer of the latest course data to the App
            const newCourse = {
                id: uuidv4(),
                title: title,
                description: description,
                creationDate: formatCreationDate(new Date().toString()),
                duration: Number(duration),
                authors: addedToCourseAuthors.map((i) => i.id)
            }

            onDataSubmit(newCourse, addedToCourseAuthors);
            //----------------------------------------
            event.currentTarget.reset();
            setAddedToCourseAuthors([]);
            setAllAuthors([])

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
            navigate('/')
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
                                            <Button onClick={handleAuthorCreation} buttonText={BUTTON_CREATE_AUTHOR_TEXT} />
                                        </Input>
                                    </div>
                                </div>
                                <div className={styles.authorsList}>
                                    <h4>Authors List</h4>
                                    <ul>
                                        {allAuthors.map((authorItem) => (
                                            <li key={authorItem.id}><AuthorItem authorItem={authorItem} addAuthor onButtonClick={() => handleAuthorAddDelete(authorItem.id)} /></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.courseAuthors}>
                                <h3>Course Authors</h3>
                                <ul>
                                    {addedToCourseAuthors.length === 0 ? <li>Author list is empty</li> : addedToCourseAuthors.map((authorItem) => (
                                        <li key={authorItem.id}><AuthorItem authorItem={authorItem} deleteAuthor onButtonClick={() => handleAuthorAddDelete(authorItem.id)} /></li>
                                    ))}
                                </ul>
                                {<p style={{ color: 'red' }} className={areAuthorsAdded ? styles.hidden : styles.active}>{areAuthorsAdded || "There should be at least one author in the course"}</p>}
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