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
            <button><img src={add} alt="Add" /></button>
            <button><img src={remove} alt="Remove" /></button>
        </div>
    )
}
export default AuthorItem;