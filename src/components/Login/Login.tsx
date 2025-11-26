import Authentication from '../Authentication/Authentication';
import Input from '../../common/Input/Input';

import { BUTTON_LOGIN_TEXT } from '../../constants';
import { INPUT_INPUT_TEXT_PLACEHOLDER } from '../../constants';

import { useState } from 'react';

import { isValidAuth } from '../Registration/Registration';

const Login: React.FC = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const [isFormValid, setIsFormValid] = useState<isValidAuth>({
        email: true,
        password: true
    })

    const validateField = (value: string) => {
        return value.trim() !== '';
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const { email, password } = formValues;

        const isEmailValid = validateField(email);
        const isPasswordValid = validateField(password);

        setIsFormValid({
            email: isEmailValid,
            password: isPasswordValid
        })


        if (isEmailValid && isPasswordValid) {
            e.currentTarget.reset();
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

    return (
        <Authentication title={"Login"} handleSubmit={handleLogin} buttonText={BUTTON_LOGIN_TEXT} linkPath={'/registration'} linkText={`If you don't have an account you may`} linkBoldText={'Registration'}>
            <Input id="email" name="email" value={formValues.email} withValidation type="email" placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Email" isValid={isFormValid.email} width='286px' height='50px' />
            <Input id='password' name='password' value={formValues.password} withValidation type="password" placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Password" isValid={isFormValid.password} width='286px' height='50px' />
        </Authentication>
    )
}



export default Login;