import { useLocation } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import UserAuth from './UserAuth/UserAuth';

import './Header.scss'

const Header: React.FC = () => {

    const location = useLocation();

    let isLogged = false;
    let displayName = "John Doe";

    return (<header className='header'>
        <Logo></Logo>
        {(location.pathname !== '/login' && location.pathname !== '/registration') && <UserAuth isLogged={isLogged} displayName={displayName} />}
    </header>)
}
export default Header;