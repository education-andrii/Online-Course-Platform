import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import { BUTTON_LOGIN_TEXT } from '../../constants';

// import styles from './Header.module.scss';
import './Header.scss'


export const Header: React.FC = () => {
    return (<header className='header'>
        <Logo></Logo>
        <Button buttonText={BUTTON_LOGIN_TEXT}></Button>
    </header>)
}