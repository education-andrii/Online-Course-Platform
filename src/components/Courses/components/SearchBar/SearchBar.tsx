import Button from "../../../../common/Button/Button"
import Input from "../../../../common/Input/Input"

import { BUTTON_SEARCH_TEXT } from '../../../../constants.ts';
import { INPUT_INPUT_TEXT_PLACEHOLDER } from '../../../../constants.ts';

import styles from './SearchBar.module.scss'

import { useState } from "react";
interface Props {
    handleSearch: Function
}

const SearchBar: React.FC<Props> = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value)
        if (value.trim() === '') {
            handleSearch('')
        }
    }
    const handleClick = () => {
        if (searchTerm.trim() !== '') {
            handleSearch(searchTerm)
        }
    }

    return (
        <div className={styles.search}>
            <Input value={searchTerm} onChange={handleChange} placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} width='400px' height='50px'></Input>
            <Button buttonText={BUTTON_SEARCH_TEXT} onClick={handleClick} width='148px' height='50px' />
        </div>
    )
}
export default SearchBar;