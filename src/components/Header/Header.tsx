import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

import { BUTTON_LOGOUT_TEXT } from '../../constants';

import './Header.scss'


const Header: React.FC = () => {
    return (<header className='header'>
        <Logo></Logo>
        <Button buttonText={BUTTON_LOGOUT_TEXT}></Button>
    </header>)
}
export default Header;