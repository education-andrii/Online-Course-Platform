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
    if (authorItem.id && authorItem.name) {
        // const { id = '', name = '' } = authorItem;

        return (
            <div className={styles.wrapper} id={authorItem.id}>
                <p>{authorItem.name}</p>
                {addAuthor && <button type='button' name={authorItem.name} role='button' onClick={() => onButtonClick(authorItem.id)}><img src={add} alt="Add" />Add author</button>}
                {deleteAuthor && <button type='button' name={authorItem.name} role='button' onClick={() => onButtonClick(authorItem.id)}><img src={remove} alt="Remove" />Delete author</button>}
            </div>
        )
    }

}
export default AuthorItem;