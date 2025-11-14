import Authentication from '../Authentication/Authentication';
import Input from '../../common/Input/Input';

import { BUTTON_LOGIN_TEXT } from '../../constants';
import { INPUT_INPUT_TEXT_PLACEHOLDER } from '../../constants';

import { useRef } from 'react';
import { useState } from 'react';

const Login: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const [isFormValid, setIsFormValid] = useState({
        email: true,
        password: true
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }))

        setIsFormValid((prev) => ({
            ...prev,
            [name]: true,
        }))
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
        if (formRef.current) {
            e.preventDefault();
            const errors = {
                email: !(formValues.email.trim() === ''),
                password: !(formValues.password.trim() === '')
            }
            setIsFormValid(errors)

            if (errors.email && errors.password) {
                formRef.current.reset();
                setFormValues({
                    email: "",
                    password: ""
                })
                setIsFormValid({
                    email: true,
                    password: true
                })
            }

        }
    }

    return (
        // <div className={styles.loginContainerWrapper}>
        //     <h3>Login</h3>
        //     <form ref={formRef} className={styles.loginForm} onSubmit={handleLogin}>
        //         <Input id="email" name="email" placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Email" isValid={isFormValid.email} width='286px' height='50px' />
        //         <Input id='password' name='password' placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Password" isValid={isFormValid.password} width='286px' height='50px' />
        //         <Button buttonText={BUTTON_LOGIN_TEXT} type="submit" width='286px' height='50px' />
        //         <Link to="/registration"><span>If you don't have an account you may<b>Registration</b></span></Link>
        //     </form>
        // </div >
        <Authentication title={"Login"} formRef={formRef} handleLogin={handleLogin} buttonText={BUTTON_LOGIN_TEXT} linkPath={'/registration'} linkText={`If you don't have an account you may`} linkBoldText={'Registration'}>
            <Input id="email" name="email" withValidation placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Email" isValid={isFormValid.email} width='286px' height='50px' />
            <Input id='password' name='password' withValidation placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Password" isValid={isFormValid.password} width='286px' height='50px' />
        </Authentication>
    )
}



export default Login;