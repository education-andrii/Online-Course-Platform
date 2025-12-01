import { useLocation, useNavigate } from 'react-router-dom';

import Logo from './components/Logo/Logo';

import Button from '../../common/Button/Button';

import { BUTTON_LOGOUT_TEXT } from '../../constants';

import './Header.scss'
import { useEffect, useState } from 'react';
interface Props {
    isAuthorized?: boolean;
    onLogOut?: Function
}
const Header: React.FC<Props> = ({ }) => {
    const navigate = useNavigate()
    const location = useLocation();
    const [displayName, setDisplayName] = useState<string>('')
    // let isLogged = isAuthorized
    let isLogged = !!localStorage.getItem('token');

    useEffect(() => {
        if (isLogged) {
            const getUserName = () => {
                const name = localStorage.getItem('user') || '';
                setDisplayName(name)
            }
            getUserName();
        } else {
            setDisplayName('')
        }
    }, [isLogged])

    const handleLogOutClick = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        // onLogOut();
        navigate('/login');
    }

    return (<header className='header'>
        <Logo></Logo>
        {(location.pathname !== '/login' && location.pathname !== '/registration') &&
            (isLogged &&
                <div>
                    <span className='headerDisplayName'>{displayName}</span>
                    <Button buttonText={BUTTON_LOGOUT_TEXT} onClick={handleLogOutClick}></Button>
                </div>
            )
        }
    </header>)
}
export default Header;