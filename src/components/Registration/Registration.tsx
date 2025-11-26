import Authentication from '../Authentication/Authentication';
import Input from '../../common/Input/Input';

import { BUTTON_REGISTRATION_TEXT } from '../../constants';
import { INPUT_INPUT_TEXT_PLACEHOLDER } from '../../constants';

import { useState } from 'react';

import { FormData } from '../Courses/components/CreateCourse/CreateCourse';


const Registration: React.FC = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [isFormValid, setIsFormValid] = useState<FormData>({
        name: true,
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

    const handleRegistration = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const { name, email, password } = formValues;

        const isNameValid = validateField(name)
        const isEmailValid = validateField(email)
        const isPasswordValid = validateField(password)

        setIsFormValid({
            name: isNameValid,
            email: isEmailValid,
            password: isPasswordValid
        })

        if (isNameValid && isEmailValid && isPasswordValid) {
            e.currentTarget.reset();
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

    return (
        <Authentication title={"Registration"} handleSubmit={handleRegistration} buttonText={BUTTON_REGISTRATION_TEXT} linkPath={'/login'} linkText={`If you have an account you may`} linkBoldText={'Login'}>
            <Input id="name" name="name" value={formValues.name} withValidation placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Name" isValid={isFormValid.name} width='286px' height='50px' />
            <Input id="email" name="email" value={formValues.email} withValidation type="email" placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Email" isValid={isFormValid.email} width='286px' height='50px' />
            <Input id='password' name='password' value={formValues.password} withValidation type="password" placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Password" isValid={isFormValid.password} width='286px' height='50px' />
        </Authentication>
    )
}



export default Registration;