import Authentication from '../Authentication/Authentication';
import Input from '../../common/Input/Input';

import { BUTTON_LOGIN_TEXT } from '../../constants';
import { INPUT_INPUT_TEXT_PLACEHOLDER } from '../../constants';

import { useState } from 'react';

import { IsValidAuth } from '../Registration/Registration';
import loginUserApi from '@/helpers/loginUserApi';
import { useNavigate } from 'react-router-dom';
interface Props {
    onLogIn: Function
}
const Login: React.FC<Props> = ({ onLogIn }) => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const [isFormValid, setIsFormValid] = useState<IsValidAuth>({
        email: true,
        password: true
    })

    const navigate = useNavigate();

    const validateField = (value: string) => {
        return value.trim() !== '';
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }))
        setIsFormValid((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const { email, password } = formValues;

        const isEmailValid = validateField(email);
        const isPasswordValid = validateField(password);

        setIsFormValid({
            email: isEmailValid,
            password: isPasswordValid
        })


        if (isEmailValid && isPasswordValid) {
            const loginData = {
                email,
                password
            }
            const result = await loginUserApi(loginData)

            if (result.successful) {
                onLogIn(result.result, result.user.name)
                navigate('/courses', { replace: true })
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
    }

    return (
        <Authentication title={"Login"} onSubmit={handleLogin} buttonText={BUTTON_LOGIN_TEXT} linkPath={'/registration'} linkText={`If you don't have an account you may`} linkBoldText={'Register'}>
            <Input id="email" name="email" value={formValues.email} withValidation placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Email" isValid={isFormValid.email} width='286px' height='50px' />
            <Input id='password' name='password' value={formValues.password} withValidation type="password" placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Password" isValid={isFormValid.password} width='286px' height='50px' />
        </Authentication>
    )
}



export default Login;