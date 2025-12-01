import './Button.scss'

interface ButtonProps {
    className?: string;
    id?: string;
    buttonText?: React.ReactNode;
    onClick?: React.MouseEventHandler;
    type?: "submit" | "reset" | "button" | undefined;
    role?: string;
    name?: string;
    width?: string;
    height?: string;
}

const Button: React.FC<ButtonProps> = ({ className, id, buttonText, onClick, type = "button", role, name, width = '180px', height = '50px' }) => {
    return (
        <button className={`button ${className ?? ""}`} id={id} onClick={onClick} type={type} role={role} name={name} style={{ width, height }}>
            {buttonText}
        </button>
    )
}
export default Button;