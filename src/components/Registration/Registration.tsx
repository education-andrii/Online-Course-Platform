import { Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { BUTTON_LOGIN_TEXT } from '../../constants';
import { INPUT_INPUT_TEXT_PLACEHOLDER } from '../../constants';

import { useRef } from 'react';
import { useState } from 'react';

import styles from './Registration.module.scss';

const Registration: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [forValues, setFormValues] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormValues({
            ...forValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        if (formRef.current) {
            e.preventDefault();

            return formRef.current.reset();
        }
    }

    return (
        <div className={styles.registrationContainerWrapper}>
            <h3>Registration</h3>
            <form ref={formRef} className={styles.registrationForm} onSubmit={handleSubmit}>
                <Input id="name" name="name" placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Name" required width='286px' height='50px' />
                <Input id="email" name="email" placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Email" required width='286px' height='50px' />
                <Input id='password' name='password' placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Password" required width='286px' height='50px' />
                <Button buttonText={BUTTON_LOGIN_TEXT} type="submit" width='286px' height='50px' />
                <Link to="/login">If you have an account you may <b>Login</b></Link>
            </form>
        </div >
    )
}



export default Registration;