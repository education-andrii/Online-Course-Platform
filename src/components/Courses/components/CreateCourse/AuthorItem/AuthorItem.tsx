import add from '../../../../../assets/Icons/Add.svg'
import remove from '../../../../../../src/assets/Icons/Remove.svg'
import styles from './AuthorItem.module.scss'
import { MouseEventHandler } from 'react'

interface Props {
    authorItem: {
        id: string;
        name: string;
    };
    addAuthor?: boolean;
    deleteAuthor?: boolean;
    onButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const AuthorItem: React.FC<Props> = ({ authorItem, addAuthor, deleteAuthor, onButtonClick }) => {
    const { id, name } = authorItem
    return (
        <div className={styles.wrapper} id={id}>
            <p>{name}</p>
            {addAuthor && <button type='button' onClick={onButtonClick}><img src={add} alt="Add" /></button>}
            {deleteAuthor && <button type='button' onClick={onButtonClick}><img src={remove} alt="Remove" /></button>}
        </div>
    )
}
export default AuthorItem;