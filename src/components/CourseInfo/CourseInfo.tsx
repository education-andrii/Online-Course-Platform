import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { BUTTON_BACK_TEXT } from '../../constants.ts'
import Button from '../../common/Button/Button.tsx';

import { CoursesType } from "../Courses/Courses.tsx";
import { AuthorsType } from '../Courses/Courses.tsx';

import getAuthorsNames from '@/helpers/getAuthorsNames.ts';
import getCourseDuration from '@/helpers/getCourseDuration.ts';

import styles from './CourseInfo.module.scss';


interface Props {
    allAuthors: AuthorsType[]
    allCourses: CoursesType[]
}

const CourseInfo: React.FC<Props> = ({ allAuthors, allCourses }) => {
    const { courseId } = useParams();
    const course = allCourses.find(courseItem => courseItem.id === courseId)
    if (!course) {
        return (<div className={styles.courseInfoWrapper}>
            <div className={styles.pageNotFoundWrapper}>
                <h1 className={styles.pageNotFoundMessage}>Course not found...</h1>
            </div>
        </div>)
    } else {
        const { id, title, description, creationDate, duration, authors } = course;
        const courseAuthors = getAuthorsNames(allAuthors, authors);
        const text: string = getCourseDuration(duration);
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
                            <li>{courseAuthors}</li>
                        </ul>
                    </div>
                </div>
                <Link to='/courses'><Button buttonText={BUTTON_BACK_TEXT} width='185px' height='50px' className={styles.button}></Button></Link>
            </div>
        )
    }
}
export default CourseInfo;