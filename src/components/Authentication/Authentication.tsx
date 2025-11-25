// import { Link } from 'react-router-dom';
import { ReactNode } from "react";

import Button from '../../common/Button/Button';

import styles from './Authentication.module.scss';

interface Props {
    title: string;
    children: ReactNode;
    formRef?: React.Ref<HTMLFormElement>;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
    buttonText?: string;
    linkPath: string;
    linkText: string;
    linkBoldText: string;
    name?: string;
    role?: string;
}

const Authentication: React.FC<Props> = ({ title, children, formRef, handleSubmit, buttonText, linkPath, linkText, linkBoldText, name, role }) => {

    return (
        <div className={styles.authenticationContainerWrapper}>
            <h1>{title}</h1>
            <form ref={formRef} className={styles.authenticationForm} onSubmit={handleSubmit}>
                {children}
                <Button buttonText={buttonText} type="submit" name={name} role={role} width='286px' height='50px' />
                <a href={linkPath}><span>{linkText} <strong>{linkBoldText}</strong></span></a>
            </form>
        </div >
    )
}



export default Authentication;