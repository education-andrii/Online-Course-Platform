import logo from '../../../../assets/logo.jpg';
import { Link } from 'react-router-dom';

import './Logo.scss'

const Logo: React.FC = () => {
    return (<Link to='/'><img src={logo} alt="Logo" className='logo' /></Link>);
}
export default Logo;
