import AuthorItem from "./AuthorItem/AuthorItem";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";

import { INPUT_INPUT_TEXT_PLACEHOLDER } from "../../../../constants";
import { BUTTON_CANCEL_TEXT } from "../../../../constants";
import { BUTTON_CREATE_COURSE_TEXT } from "../../../../constants";

import styles from './CreateCourse.module.scss'

const CreateCourse: React.FC = () => {
    return (
        <div className={styles.createCourseContainerWrapper}>
            <h1>Course edit/Create page</h1>
            <form>
                <div className={styles.createCourseContainer}>
                    <div>
                        <div className={styles.mainInfo}>
                            <h4>Main Info</h4>
                            <Input id="name" name="name" withValidation placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} labelText="Title" isValid={true} width="auto">
                                <p className={`input-error-message ${true ? 'hidden' : 'visible'}`}>Name is required.</p>
                            </Input>
                            <label htmlFor="createCourseDescription">Description</label>
                            <textarea name="createCourseDescription" id="createCourseDescription" className={styles.textarea} placeholder="Input Text"></textarea>
                        </div>
                    </div>

                    <div>
                        <div className={styles.duration}>
                            <h4>Duration</h4>
                            <Input id="name" name="name" withValidation placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} labelText="Duration" isValid={true}>
                                <p className={`input-error-message ${true ? 'hidden' : 'visible'}`}>Name is required.</p>
                            </Input>
                        </div>
                        <AuthorItem name="Author One" />
                    </div>
                </div>
                <div className={styles.buttonsContainer}>
                    <Button buttonText={BUTTON_CANCEL_TEXT} />
                    <Button type="submit" buttonText={BUTTON_CREATE_COURSE_TEXT} />
                </div>

            </form>
        </div>
    )
}
export default CreateCourse;