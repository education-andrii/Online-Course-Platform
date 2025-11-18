import { Link } from "react-router-dom";

import AuthorItem from "./AuthorItem/AuthorItem";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";

import { INPUT_INPUT_TEXT_PLACEHOLDER } from "../../../../constants";
import { BUTTON_CANCEL_TEXT } from "../../../../constants";
import { BUTTON_CREATE_COURSE_TEXT } from "../../../../constants";
import { BUTTON_CREATE_AUTHOR_TEXT } from "../../../../constants";

import getCourseDuration from "../../../../helpers/getCourseDuration";

import styles from './CreateCourse.module.scss'

const CreateCourse: React.FC = () => {
    const text = getCourseDuration(0)
    const [firstPart, secondPart] = text.split(' ');

    return (
        <div className={styles.createCourseContainerWrapper}>
            <h1>Course edit/Create page</h1>
            <form>
                <div className={styles.createCourseContainer}>
                    <div className={styles.upperPart}>
                        <div className={styles.mainInfo}>
                            <h3>Main Info</h3>
                            <Input id="title" name="title" withValidation placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} labelText="Title" isValid={true} width="100%" />
                            <label htmlFor="createCourseDescription">Description
                                <textarea name="createCourseDescription" id="createCourseDescription" className={styles.textarea} placeholder="Input Text"></textarea></label>
                        </div>
                    </div>

                    <div className={styles.lowerPart}>
                        <div className={styles.left}>
                            <div className={styles.duration}>
                                <h3>Duration</h3>
                                <div>
                                    <Input id="duration" name="duration" withValidation placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} labelText="Duration" isValid={true}>
                                        <span><b>{firstPart}</b> {secondPart}</span></Input>
                                </div>
                            </div>
                            <div className={styles.authors}>
                                <div className={styles.authorsInput}>
                                    <h3>Authors</h3>
                                    <div>
                                        <Input id="authors" name="authors" withValidation placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} labelText="Author Name" isValid={true}>
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