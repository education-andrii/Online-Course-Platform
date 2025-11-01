import { Button } from "../../../../common/Button/Button"
import { Input } from "../../../../common/Input/Input"

import { BUTTON_SEARCH_TEXT } from '../../../../constants.ts';
import { INPUT_INPUT_TEXT_PLACEHOLDER } from '../../../../constants.ts';

import styles from './SearchBar.module.scss'

export const SearchBar: React.FC = () => {
    return (
        <div className={styles.search}>
            <Input placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} width='400px' height='50px'></Input>
            <Button buttonText={BUTTON_SEARCH_TEXT} width='148px' height='50px' />
        </div>
    )
}