import add from '../../../../../assets/Icons/Add.svg'
import remove from '../../../../../../src/assets/Icons/Remove.svg'
import styles from './AuthorItem.module.scss'

interface Props {
    name: string;
}

const AuthorItem: React.FC<Props> = ({ name }) => {
    return (
        <div className={styles.wrapper}>
            <p>{name}</p>
            <img src={add} alt="Add" />
            <img src={remove} alt="Remove" />
        </div>
    )
}
export default AuthorItem;