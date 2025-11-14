import Authentication from '../Authentication/Authentication';
import Input from '../../common/Input/Input';

import { BUTTON_REGISTRATION_TEXT } from '../../constants';
import { INPUT_INPUT_TEXT_PLACEHOLDER } from '../../constants';

import { useRef } from 'react';
import { useState } from 'react';


const Registration: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [isFormValid, setIsFormValid] = useState({
        name: true,
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
            [name]: value.trim() !== '',
        }))
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
        if (formRef.current) {
            e.preventDefault();

            const formData = new FormData(formRef.current);

            const nameValue = (formData.get('name') as string || '').trim()
            const emailValue = (formData.get('email') as string || '').trim()
            const passwordValue = (formData.get('password') as string || '').trim()

            const isNameValid = nameValue !== '';
            const isEmailValid = emailValue !== '';
            const isPasswordValid = passwordValue !== '';

            setIsFormValid({
                name: isNameValid,
                email: isEmailValid,
                password: isPasswordValid
            })


            if (isNameValid && isEmailValid && isPasswordValid) {
                formRef.current.reset();
                setFormValues({
                    name: "",
                    email: "",
                    password: ""
                })
                setIsFormValid({
                    name: true,
                    email: true,
                    password: true
                })
            }

        }
    }

    return (
        <Authentication title={"Registration"} formRef={formRef} handleLogin={handleLogin} buttonText={BUTTON_REGISTRATION_TEXT} linkPath={'/login'} linkText={`If you have an account you may`} linkBoldText={'Login'}>
            <Input id="name" name="name" withValidation placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Name" isValid={isFormValid.name} width='286px' height='50px'>
                <p className={`input-error-message ${isFormValid.name ? 'hidden' : 'visible'}`}>Name is required.</p>
            </Input>
            <Input id="email" name="email" withValidation type="email" placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Email" isValid={isFormValid.email} width='286px' height='50px'>
                <p className={`input-error-message ${isFormValid.email ? 'hidden' : 'visible'}`}>Email is required.</p>
            </Input>
            <Input id='password' name='password' withValidation type="password" placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Password" isValid={isFormValid.password} width='286px' height='50px'>
                <p className={`input-error-message ${isFormValid.password ? 'hidden' : 'visible'}`}>Password is required.</p>
            </Input>
        </Authentication>
    )
}



export default Registration;