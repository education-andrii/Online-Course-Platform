import { Link } from 'react-router-dom';

import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList.tsx';

import { BUTTON_ADD_NEW_COURSE_TEXT } from '../../constants.ts';

import getCourseDuration from '../../helpers/getCourseDuration.ts';
import getAutorsArray from '../../helpers/getAutorsArray.ts';

import styles from './Courses.module.scss';

export interface AuthorsType {
    id: string;
    name: string;
}

export interface CoursesType {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
}

interface Props {
    authors?: AuthorsType[]
    courses?: CoursesType[]
}

const Courses: React.FC<Props> = ({ authors, courses }) => {
    if (courses !== undefined && authors !== undefined) {
        return (
            <div className={styles.mainCoursesContainer}>
                <div className={styles.mainFunctional}>
                    <SearchBar />
                    <Link to="/create-course"><Button buttonText={BUTTON_ADD_NEW_COURSE_TEXT} width='183px' height='50px' /></Link>
                </div>
                <ul className={styles.coursesList}>
                    {courses.map((course, index) => {
                        let courseAuthors: string[] = getAutorsArray(authors, course.authors)

                        return (
                            <li key={course.id || index} className={styles.courseCard}>
                                <CourseCard
                                    id={course.id}
                                    title={course.title}
                                    description={course.description}
                                    creationDate={course.creationDate}
                                    duration={getCourseDuration(course.duration)}
                                    authors={courseAuthors.join(', ')} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return <EmptyCourseList />
    }

}
export default Courses;