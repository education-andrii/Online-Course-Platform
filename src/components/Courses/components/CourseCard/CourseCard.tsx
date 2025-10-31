// import styles from './CourseCard.module.scss'
import './CourseCard.scss';
import { Button } from '../../../../common/Button/Button';
import { BUTTON_SHOW_COURSE_TEXT } from '../../../../constants';

interface Props {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: string;
    authors: string;
}

export const CourseCard: React.FC<Props> = ({ id, title, description, creationDate, duration, authors }) => {
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
                        <div>
                            <p><b>Authors:</b> <span>{authors}</span></p>
                            <p><b>Duration:</b> {duration}</p>
                            <p><b>Created:</b> {creationDate}</p>
                        </div>
                        <Button buttonText={BUTTON_SHOW_COURSE_TEXT} width='180px' height='50px'></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}