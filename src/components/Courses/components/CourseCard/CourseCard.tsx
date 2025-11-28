import { Link } from 'react-router-dom';

import './CourseCard.scss';
import Button from '../../../../common/Button/Button';
import { BUTTON_SHOW_COURSE_TEXT } from '../../../../constants';

interface Props {
    course: {
        id: string,
        title: string,
        description: string,
        creationDate: string,
        duration: string,
        authors: string
    }
    onDataSubmit: Function
}

const CourseCard: React.FC<Props> = ({ course, onDataSubmit }) => {
    const { id, title, description, creationDate, duration, authors } = course

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
                        <Link to='/course-info'><Button buttonText={BUTTON_SHOW_COURSE_TEXT} width='180px' height='50px' onClick={() => onDataSubmit(course)}></Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseCard;