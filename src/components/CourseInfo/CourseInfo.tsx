import { Link } from 'react-router-dom';

import { BUTTON_BACK_TEXT } from '../../constants.ts'
import Button from '../../common/Button/Button.tsx';

import { CoursesType } from "../Courses/Courses.tsx";

import styles from './CourseInfo.module.scss';

interface Props {
    course: CoursesType
}

const CourseInfo: React.FC<Props> = ({ course }) => {
    const { id, title, description, creationDate, duration, authors } = course
    const text: string = duration.toString();
    const [firstPart, secondPart, thirdPart, fourthPart] = text.split(' ');
    return (
        <div className={styles.courseInfoWrapper}>
            <h1>{title}</h1>
            <div className={styles.infoCardContainer}>
                <div className={styles.cardLeftInfo}>
                    <h4 className={styles.title}>Description</h4>
                    <p>{description}</p>
                </div>
                <div className={styles.divisionLine}></div>
                <div className={styles.cardRightInfo}>
                    <ul className={styles.labels}>
                        <li><h4>ID:</h4></li>
                        <li><h4>Duration:</h4></li>
                        <li><h4>Created:</h4></li>
                        <li><h4>Authors:</h4></li>
                    </ul>
                    <ul className={styles.values}>
                        <li>{id}</li>
                        <li>
                            {!fourthPart ? <><b>{firstPart}</b> {secondPart}</> : <><b>{firstPart} {secondPart}</b> {thirdPart} {fourthPart}</>}
                        </li>
                        <li>{creationDate}</li>
                        <li>{authors}</li>
                    </ul>
                </div>
            </div>
            <Link to='/'><Button buttonText={BUTTON_BACK_TEXT} width='185px' height='50px' className={styles.button}></Button></Link>
        </div>
    )

}
export default CourseInfo;