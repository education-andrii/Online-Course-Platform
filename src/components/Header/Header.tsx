import { useLocation, useNavigate } from 'react-router-dom';

import Logo from './components/Logo/Logo';

import Button from '../../common/Button/Button';

import { BUTTON_LOGOUT_TEXT } from '../../constants';

import './Header.scss'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName, isUserAuth } from '@/selectors/selectors';
import { userActions } from '@/store/user/userSlice';

const Header: React.FC = () => {

    const dispatch = useDispatch()
    const userName = useSelector(getUserName)

    const navigate = useNavigate()
    const location = useLocation();
    const [displayName, setDisplayName] = useState<string>('')
    const isAuthorized = useSelector(isUserAuth)

    useEffect(() => {
        if (isAuthorized) {
            const getUserName = () => {
                const name = userName;
                setDisplayName(name)
            }
            getUserName();
        } else {
            setDisplayName('')
        }
    }, [isAuthorized])

    const handleLogOutClick = () => {
        dispatch(userActions.logout())
        navigate('/login');
    }

    return (<header className='header'>
        <Logo></Logo>
        {(location.pathname !== '/login' && location.pathname !== '/registration') &&
            (isAuthorized &&
                <div>
                    <span className='headerDisplayName'>{displayName}</span>
                    <Button name='Logout' role='button' buttonText={BUTTON_LOGOUT_TEXT} onClick={handleLogOutClick}></Button>
                </div>
            )
        }
    </header>)
}
export default Header;