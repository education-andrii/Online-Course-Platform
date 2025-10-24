// import styles from './CourseCard.module.scss'
import './CourseCard.scss';

interface Props {
    duration: string
}

export const CourseCard: React.FC<Props> = ({ duration }) => {
    return (
        <div className='courseCard'>
            <div className="left-line"></div>
            <div className="course-card-container">
                <div className="left-side">
                    <h4>Angular</h4>
                    <p className='title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, tempore ab aliquid ex eius est corrupti fuga. Vero, quos corporis iusto harum fugiat culpa ducimus, vel sapiente tempora inventore eveniet.</p>
                </div>
                <div className="rigth-side">
                    <h6>{duration}</h6>
                </div>
            </div>
        </div>
    )
}