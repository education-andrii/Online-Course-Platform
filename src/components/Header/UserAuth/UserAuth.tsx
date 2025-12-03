import { Link } from 'react-router-dom';

import Button from '../../../common/Button/Button';

import { BUTTON_LOGOUT_TEXT } from '../../../constants';
import { BUTTON_LOGIN_TEXT } from '../../../constants';

interface Props {
    isLogged: boolean;
    displayName: string;
}

const UserAuth: React.FC<Props> = ({ isLogged, displayName }) => {

    return (
        <div>
            {isLogged && <span className='headerDisplayName'>{displayName}</span>}
            {isLogged ? <Link to='/'><Button buttonText={isLogged ? BUTTON_LOGOUT_TEXT : BUTTON_LOGIN_TEXT}></Button></Link> : <Link to='/login'><Button buttonText={isLogged ? BUTTON_LOGOUT_TEXT : BUTTON_LOGIN_TEXT}></Button></Link>}
        </div>
    )
}
export default UserAuth;