import { Link } from 'react-router-dom';

import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList.tsx';

import { BUTTON_ADD_NEW_COURSE_TEXT, mockedAuthorsList, mockedCoursesList } from '../../constants.ts';

import getCourseDuration from '../../helpers/getCourseDuration.ts';
import getAuthorsNames from '../../helpers/getAuthorsNames.ts';

import styles from './Courses.module.scss';
import { useEffect, useState } from 'react';

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
    authors: AuthorsType[]
    courses: CoursesType[]
}

const Courses: React.FC<Props> = ({ authors = mockedAuthorsList, courses = mockedCoursesList }) => {
    const [displayedCourses, setDisplayedCourses] = useState<CoursesType[]>([]);
    //For async data
    useEffect(() => {
        if (courses) {
            setDisplayedCourses(courses)
        }
    }, [courses])
    //------------
    if (!courses || courses.length === 0) {
        return <EmptyCourseList />
    }

    const handleSearch = (searchTerm: string) => {
        const term = searchTerm.toLowerCase().trim() || '';
        if (term === '') {
            setDisplayedCourses(courses)
            return;
        }
        const filteredCourses = courses.filter((course) => {
            const titleTerm = course.title.toLowerCase().includes(term);
            const idTerm = course.id.toLowerCase().includes(term);
            return titleTerm || idTerm
        })
        setDisplayedCourses(filteredCourses)
    }

    return (
        <div className={styles.mainCoursesContainer}>
            <div className={styles.mainFunctional}>
                <SearchBar handleSearch={handleSearch} />
                <Link to="/courses/add"><Button buttonText={BUTTON_ADD_NEW_COURSE_TEXT} width='183px' height='50px' /></Link>
            </div>
            <ul className={styles.coursesList}>
                {displayedCourses.length === 0 ?
                    <h1>No matches found...</h1>
                    : displayedCourses.map((course, index) => {
                        let courseAuthors: string = getAuthorsNames(authors, course.authors)
                        let newCourse = {
                            id: course.id,
                            title: course.title,
                            description: course.description,
                            creationDate: course.creationDate,
                            duration: getCourseDuration(course.duration),
                            authors: courseAuthors
                        }
                        return (
                            <li key={course.id || index} className={styles.courseCard}>
                                <CourseCard
                                    course={newCourse}
                                />
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )


}
export default Courses;