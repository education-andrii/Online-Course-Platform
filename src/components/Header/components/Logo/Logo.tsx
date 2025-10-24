import logo from '../../../../assets/logo.png';

// import styles from './Logo.module.scss'
import './Logo.scss'

export const Logo: React.FC = () => {
    return (<img src={logo} alt="Logo" className='logo' />);
}
