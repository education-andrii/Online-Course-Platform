// import styles from './Button.module.scss'
import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    id?: string;
    buttonText?: React.ReactNode;
    onClick?: () => void;
    width?: string
    height?: string
}

export const Button = ({ className, id, buttonText, onClick, width, height }: ButtonProps) => {
    return (
        <button className={`button ${className ?? ""}`} id={id} onClick={onClick} style={{ width, height }}>
            <p className='buttonText'>{buttonText}</p>
        </button>
    )
}