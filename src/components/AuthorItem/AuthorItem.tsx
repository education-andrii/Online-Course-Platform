// import add from '../../assets/Icons/Add.svg'
// import remove from '../../assets/Icons/Remove.svg'
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
    // const { id = '', name = '' } = author;
    return (
        <li className={styles.wrapper} id={author.id}>
            <p>{author.name}</p>
            {addAuthor && <button type='button' name='Add author' role='button' onClick={() => onButtonClick(author.id)}>Add author</button>}
            {deleteAuthor && <button type='button' name='Delete author' role='button' onClick={() => onButtonClick(author.id)}>Delete author</button>}
        </li>
    )


}
export default AuthorItem;