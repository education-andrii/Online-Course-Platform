import { CourseCard } from './components/CourseCard/CourseCard';
// import { EmptyCourseList } from '../EmptyCourseList/EmptyCourseList';

// import { mockedCoursesList } from '../../constants.ts';
// import { mockedAuthorsList } from '../../constants.ts';

import { getCourseDuration } from '../../helpers/getCourseDuration.ts';
import { formatCreationDate } from '../../helpers/formatCreationDate.ts';

import styles from './Courses.module.scss'

interface Authors {
    id: string;
    name: string;
}

interface Courses {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
}

interface Props {
    authors?: Authors[]
    courses?: Courses[]
}

export const Courses: React.FC<Props> = ({ authors, courses }) => {
    const getAutorsArray = (authorId: string[]): string[] => {
        if (authors !== undefined) {
            const authorsArray = authors.filter((author) => authorId.includes(author.id));
            return authorsArray.map((author) => author.name);
        } else {
            return []
        }
    }
    if (courses !== undefined) {
        return (
            <ul className='courseCardContainer'>
                {courses.map((course, index) => {
                    let courseAuthors = getAutorsArray(course.authors)

                    const MAX_AUTHORS = 2;
                    let authorsToDisplay = [...courseAuthors]

                    if (authorsToDisplay.length > MAX_AUTHORS) {
                        authorsToDisplay = authorsToDisplay.slice(0, MAX_AUTHORS);
                        authorsToDisplay.push('...')
                    }

                    return (
                        <li key={course.id || index} className={styles.courseCard}>
                            <CourseCard
                                id={course.id}
                                title={course.title}
                                description={course.description}
                                creationDate={formatCreationDate(course.creationDate)}
                                duration={getCourseDuration(course.duration)}
                                authors={authorsToDisplay.join(', ')} />
                        </li>

                    )
                })}
            </ul>
        )
    }

}