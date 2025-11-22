import add from '../../../../../assets/Icons/Add.svg'
import remove from '../../../../../../src/assets/Icons/Remove.svg'
import styles from './AuthorItem.module.scss'

interface Props {
    name: string;
    addAuthor?: boolean;
    deleteAuthor?: boolean;
}

const AuthorItem: React.FC<Props> = ({ name, addAuthor, deleteAuthor }) => {
    return (
        <div className={styles.wrapper}>
            <p>{name}</p>
            {addAuthor && <button type='button'><img src={add} alt="Add" /></button>}
            {deleteAuthor && <button type='button'><img src={remove} alt="Remove" /></button>}
        </div>
    )
}
export default AuthorItem;