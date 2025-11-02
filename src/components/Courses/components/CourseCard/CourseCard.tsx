import './CourseCard.scss';
import Button from '../../../../common/Button/Button';
import { BUTTON_SHOW_COURSE_TEXT } from '../../../../constants';

interface Props {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: string;
    authors: string;
}

const CourseCard: React.FC<Props> = ({ id, title = "Course Title", description = "Course Description", creationDate = "01/01/2025", duration = "60", authors = "Nicolas Kim" }) => {
    return (
        <div className='courseCard' id={id}>
            <div className="left-line"></div>
            <div className="course-card-container">
                <h4 className='title'>Course Title</h4>
                <div className='left-right-container'>
                    <div className="left-side">
                        <p className='description'>Course Description</p>
                    </div>
                    <div className="right-side">
                        <ul>
                            <li><b>Authors:</b> <span>name2, name3</span></li>
                            <li><b>Duration:</b> 01:00 hour</li>
                            <li><b>Created:</b> 01.01.2025</li>
                        </ul>
                        <Button buttonText={BUTTON_SHOW_COURSE_TEXT} width='180px' height='50px'></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseCard;