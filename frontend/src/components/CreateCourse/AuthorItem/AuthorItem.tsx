import add from '../../../assets/Icons/Add.svg'
import remove from '../../../assets/Icons/Remove.svg'
import styles from './AuthorItem.module.scss'

interface Props {
    author: {
        id: string;
        name: string;
    };
    addAuthor?: boolean;
    deleteAuthor?: boolean;
    onButtonClick: Function;
}

const AuthorItem: React.FC<Props> = ({ author, addAuthor, deleteAuthor, onButtonClick }) => {
    const { id, name } = author
    return (
        <div className={styles.wrapper} id={id}>
            <p>{name}</p>
            {addAuthor && <button type='button' onClick={() => onButtonClick(id)}><img src={add} alt="Add" />Add author</button>}
            {deleteAuthor && <button type='button' onClick={() => onButtonClick(id)}><img src={remove} alt="Remove" />Delete author</button>}
        </div>
    )
}
export default AuthorItem;