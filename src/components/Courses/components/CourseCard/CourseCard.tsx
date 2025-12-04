import { Link } from 'react-router-dom';

import './CourseCard.scss';
import Button from '../../../../common/Button/Button';
import { BUTTON_SHOW_COURSE_TEXT } from '../../../../constants';
import remove from '@/assets/Icons/trash-can.svg'
import update from '@/assets/Icons/pencil.svg'
import { useDispatch } from 'react-redux';
import { coursesActions } from '@/store/courses/coursesSlice';

interface Props {
    course: {
        id: string,
        title: string,
        description: string,
        creationDate: string,
        duration: string,
        authors: string
    }
}

const CourseCard: React.FC<Props> = ({ course }) => {
    const dispatch = useDispatch();
    const { id, title, description, creationDate, duration, authors } = course

    const handleDeleteCourse = () => {
        dispatch(coursesActions.removeCourse(id))
    }

    return (
        <div className='courseCard' id={id}>
            <div className="left-line"></div>
            <div className="course-card-container">
                <h4 className='title'>{title}</h4>
                <div className='left-right-container'>
                    <div className="left-side">
                        <p className='description'>{description}</p>
                    </div>
                    <div className="right-side">
                        <ul>
                            <li><b>Authors:</b> <span>{authors}</span></li>
                            <li><b>Duration:</b> {duration}</li>
                            <li><b>Created:</b> {creationDate}</li>
                        </ul>
                        <div className='userButtons'>
                            <Link to={id}><Button buttonText={BUTTON_SHOW_COURSE_TEXT} width='180px' height='50px'></Button></Link>
                            <div>
                                <Button onClick={handleDeleteCourse} name='Delete' role='button' width='60px' height='50px'><img src={remove} alt="Delete" /></Button>
                                <Button name='Update' role='button' width='60px' height='50px'><img src={update} alt="Update" /></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseCard;