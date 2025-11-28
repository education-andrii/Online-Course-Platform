import './Button.scss'

interface ButtonProps {
    className?: string;
    id?: string;
    buttonText?: React.ReactNode;
    onClick?: React.MouseEventHandler;
    type?: "submit" | "reset" | "button" | undefined;
    width?: string
    height?: string
}

const Button: React.FC<ButtonProps> = ({ className, id, buttonText, onClick, type = "button", width = '180px', height = '50px' }) => {
    return (
        <button className={`button ${className ?? ""}`} id={id} onClick={onClick} type={type} style={{ width, height }}>
            <p className='buttonText'>{buttonText}</p>
        </button>
    )
}
export default Button;