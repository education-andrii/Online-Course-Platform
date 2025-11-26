import add from '../../assets/Icons/Add.svg'
import remove from '../../assets/Icons/Remove.svg'
import styles from './AuthorItem.module.scss'

interface Props {
    authorItem: {
        id: string;
        name: string;
    };
    addAuthor?: boolean;
    deleteAuthor?: boolean;
    onButtonClick: Function;
}

const AuthorItem: React.FC<Props> = ({ authorItem, addAuthor, deleteAuthor, onButtonClick }) => {
    const { id, name } = authorItem;

    if (!id) {
        return null
    }

    return (
        <div className={styles.wrapper} id={id}>
            <p>{name}</p>
            {addAuthor && <button type='button' name={name} role='button' onClick={() => onButtonClick(id)}><img src={add} alt="Add" />Add author</button>}
            {deleteAuthor && <button type='button' name={name} role='button' onClick={() => onButtonClick(id)}><img src={remove} alt="Remove" />Delete author</button>}
        </div>
    )
}
export default AuthorItem;