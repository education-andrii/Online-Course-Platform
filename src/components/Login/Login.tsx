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

        if (value.trim() !== "") {
            setIsFormValid((prev) => ({
                ...prev,
                [name]: value.trim() !== '',
            }))
        }
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
        if (formRef.current) {
            e.preventDefault();

            const formData = new FormData(formRef.current);

            const emailValue = (formData.get('email') as string || '').trim()
            const passwordValue = (formData.get('password') as string || '').trim()

            const isEmailValid = emailValue !== '';
            const isPasswordValid = passwordValue !== '';

            setIsFormValid({
                email: isEmailValid,
                password: isPasswordValid
            })


            if (isEmailValid && isPasswordValid) {
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
        <Authentication title={"Login"} formRef={formRef} handleLogin={handleLogin} buttonText={BUTTON_LOGIN_TEXT} linkPath={'/registration'} linkText={`If you don't have an account you may`} linkBoldText={'Registration'}>
            <Input id="email" name="email" withValidation type="email" placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Email" isValid={isFormValid.email} width='286px' height='50px'>
                <p className={`input-error-message ${isFormValid.email ? 'hidden' : 'visible'}`}>Email is required.</p>
            </Input>
            <Input id='password' name='password' withValidation type="password" placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Password" isValid={isFormValid.password} width='286px' height='50px'>
                <p className={`input-error-message ${isFormValid.password ? 'hidden' : 'visible'}`}>Password is required.</p>
            </Input>
        </Authentication>
    )
}



export default Login;