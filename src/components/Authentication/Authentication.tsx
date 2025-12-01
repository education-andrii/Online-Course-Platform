import { Link } from 'react-router-dom';
import { ReactNode } from "react";

import Button from '../../common/Button/Button';

import styles from './Authentication.module.scss';

interface Props {
    title: string;
    children: ReactNode;
    formRef?: React.Ref<HTMLFormElement>;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    buttonText?: string;
    linkPath: string;
    linkText?: string;
    linkBoldText?: string;
    buttonRole?: string;
    buttonName?: string
}

const Authentication: React.FC<Props> = ({ title, children, formRef, onSubmit, buttonText, linkPath, linkText, linkBoldText, buttonRole, buttonName }) => {

    return (
        <div className={styles.authenticationContainerWrapper}>
            <h1>{title}</h1>
            <form ref={formRef} className={styles.authenticationForm} onSubmit={onSubmit}>
                {children}
                <Button buttonText={buttonText} type="submit" role={buttonRole} name={buttonName} width='286px' height='50px' />
                <Link to={linkPath}><span>{linkText} <strong>{linkBoldText}</strong></span></Link>
            </form>
        </div >
    )
}



export default Authentication;