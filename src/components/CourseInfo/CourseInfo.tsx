import { BUTTON_BACK_TEXT } from '../../constants.ts'
import Button from '../../common/Button/Button.tsx';

import styles from './CourseInfo.module.scss';

interface Props {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: string;
    authors: string;
}

const CourseInfo: React.FC<Props> = ({ id, title = "Course 1", description = "Course 1 description", creationDate = "01.01.2025", duration = "01:00 hour", authors = "name2, name3" }) => {
    const text: string = duration;
    const [firstPart, secondPart] = text.split(' ');

    return (
        <div className='courseInfoWrapper'>
            <h3>Course 1</h3>
            <div className={styles.infoCardContainer}>
                <div className={styles.cardLeftInfo}>
                    <h4 className={styles.title}>Description</h4>
                    <p>Course 1 description</p>
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
                            01:00 hour
                        </li>
                        <li>01.01.2025</li>
                        <li>name2, name3</li>
                    </ul>
                </div>
            </div>
            <Button buttonText={BUTTON_BACK_TEXT} width='185px' height='50px' className={styles.button}></Button>
        </div>
    )

}
export default CourseInfo;