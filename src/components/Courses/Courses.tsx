import { Link } from 'react-router-dom';

import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList.tsx';

import { BUTTON_ADD_NEW_COURSE_TEXT } from '../../constants.ts';

import getCourseDuration from '../../helpers/getCourseDuration.ts';
import getAuthorsNames from '../../helpers/getAuthorsNames.ts';

import styles from './Courses.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthors, getCourses } from '@/selectors/selectors.ts';
import { coursesActions } from '@/store/courses/coursesSlice.ts';
import { getAuthorsApi, getCoursesApi } from '@/services/services.ts';
import { authorsActions } from '@/store/authors/authorsSlice.ts';

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


const Courses: React.FC = () => {
    const dispatch = useDispatch()
    const courses: CoursesType[] = useSelector(getCourses)
    const authors: AuthorsType[] = useSelector(getAuthors)

    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(courses.length === 0 || authors.length === 0)
    const [loadingError, setLoadingError] = useState<string | null>(null)

    //For async data
    useEffect(() => {
        if (courses.length > 0 && authors.length > 0) {
            setIsLoading(false)
            return
        }
        const loadData = async () => {
            try {
                if (courses.length === 0) {
                    const coursesData = await getCoursesApi();
                    dispatch(coursesActions.setCourses(coursesData.result))
                }
                if (authors.length === 0) {
                    const authorsData = await getAuthorsApi();
                    dispatch(authorsActions.setAuthors(authorsData.result))
                }
            } catch (error) {
                setLoadingError('Data loading error...')
            } finally {
                setIsLoading(false);
            }

        }
        loadData();
    }, [])
    //------------

    if (isLoading) {
        return <div className={styles.loading}>Loading...</div>
    }

    if (loadingError) {
        return <div className={styles.error}>{loadingError}</div>
    }

    if (!courses || courses.length === 0) {
        return <EmptyCourseList />
    }

    const handleSearch = (newSearchTerm: string) => {
        setSearchTerm(newSearchTerm.toLowerCase().trim() || '');
    }
    const filteredCourses = courses.filter((course) => {
        if (searchTerm === '') {
            return true;
        }
        const titleTerm = course.title.toLowerCase().includes(searchTerm);
        const idTerm = course.id.toLowerCase().includes(searchTerm);
        return titleTerm || idTerm
    })


    return (
        <div className={styles.mainCoursesContainer}>
            <div className={styles.mainFunctional}>
                <SearchBar handleSearch={handleSearch} />
                <Link to="/courses/add"><Button buttonText={BUTTON_ADD_NEW_COURSE_TEXT} width='183px' height='50px' /></Link>
            </div>
            <ul className={styles.coursesList}>
                {filteredCourses.length === 0 ?
                    <h1>No matches found...</h1>
                    : filteredCourses.map((course, index) => {
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