// import styles from './Button.module.scss'
import './Button.scss'

interface ButtonProps {
    className?: string;
    id?: string;
    buttonText?: React.ReactNode;
    onClick?: () => void;
}

export const Button = ({ className, id, buttonText, onClick }: ButtonProps) => {
    return (
        <button className={`button ${className ?? ""}`} id={id} onClick={onClick}>
            <p className='buttonText'>{buttonText}</p>
        </button>
    )
}