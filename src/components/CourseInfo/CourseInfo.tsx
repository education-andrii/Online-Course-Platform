// import { getCourseDuration } from '../../helpers/getCourseDuration.ts';
// import { formatCreationDate } from '../../helpers/formatCreationDate.ts';

import { BUTTON_BACK_TEXT } from '../../constants.ts'
import { Button } from '../../common/Button/Button.tsx';

import styles from './CourseInfo.module.scss';

interface Props {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: string;
    authors: string;
}

export const CourseInfo: React.FC<Props> = ({ id, title, description, creationDate, duration, authors }) => {
    return (
        <div className='courseInfoWrapper'>
            <h3>{title}</h3>
            <div className={styles.infoCardContainer}>
                <div className={styles.cardLeftInfo}>
                    <h4 className={styles.title}>Description</h4>
                    <p>{description}</p>
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
                        <li>{duration}</li>
                        <li>{creationDate}</li>
                        <li>{authors}</li>
                    </ul>
                    {/* <ul className={styles.infoList}>
                        <li>
                            <span className={styles.label}>Duration:</span>
                            <span className={styles.value}>23:35 hours</span>
                        </li>
                        <li>
                            <span className={styles.label}>Created:</span>
                            <span className={styles.value}>01.01.2023</span>
                        </li>
                    </ul> */}
                </div>
            </div>
            <Button buttonText={BUTTON_BACK_TEXT} width='185px' height='50px' className={styles.button}></Button>
        </div>
    )

}