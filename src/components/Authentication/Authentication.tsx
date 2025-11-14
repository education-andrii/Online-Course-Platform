import { Link } from 'react-router-dom';
import { ReactNode } from "react";

import Button from '../../common/Button/Button';

import styles from './Authentication.module.scss';

interface Props {
    title: string;
    // formJsx: string;
    children: ReactNode;
    formRef: React.Ref<HTMLFormElement>;
    handleLogin: React.FormEventHandler<HTMLFormElement>;
    buttonText: string;
    linkPath: string;
    linkText: string;
    linkBoldText: string;
}

const Authentication: React.FC<Props> = ({ title, children, formRef, handleLogin, buttonText, linkPath, linkText, linkBoldText }) => {
    // const formRef = useRef<HTMLFormElement>(null);
    // const [formValues, setFormValues] = useState({
    //     name: "",
    //     email: "",
    //     password: ""
    // });

    // const [isFormValid, setIsFormValid] = useState({
    //     name: true,
    //     email: true,
    //     password: true
    // })

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //     const { name, value } = e.target;

    //     setFormValues((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }))

    //     setIsFormValid((prev) => ({
    //         ...prev,
    //         [name]: true,
    //     }))
    // }

    // const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    //     if (formRef.current) {
    //         e.preventDefault();
    //         const errors = {
    //             name: !(formValues.name.trim() === ''),
    //             email: !(formValues.email.trim() === ''),
    //             password: !(formValues.password.trim() === '')
    //         }
    //         setIsFormValid(errors)

    //         if (errors.name && errors.email && errors.password) {
    //             formRef.current.reset();
    //             setFormValues({
    //                 name: "",
    //                 email: "",
    //                 password: ""
    //             })
    //             setIsFormValid({
    //                 name: true,
    //                 email: true,
    //                 password: true
    //             })
    //         }

    //     }
    // }

    return (
        <div className={styles.authenticationContainerWrapper}>
            <h3>{title}</h3>
            {/* {formJsx} */}
            <form ref={formRef} className={styles.authenticationForm} onSubmit={handleLogin}>
                {children}
                {/* <Input id="name" name="name" withValidation placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Name" isValid={isFormValid.name} width='286px' height='50px' />
                <Input id="email" name="email" withValidation placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Email" isValid={isFormValid.email} width='286px' height='50px' />
                <Input id='password' name='password' withValidation placeholder={INPUT_INPUT_TEXT_PLACEHOLDER} onChange={handleChange} labelText="Password" isValid={isFormValid.password} width='286px' height='50px' /> */}
                <Button buttonText={buttonText} type="submit" width='286px' height='50px' />
                <Link to={linkPath}><span>{linkText} <strong>{linkBoldText}</strong></span></Link>
            </form>
        </div >
    )
}



export default Authentication;