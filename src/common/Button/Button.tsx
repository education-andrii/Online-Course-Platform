import './Button.scss'

interface ButtonProps {
    className?: string;
    id?: string;
    buttonText?: React.ReactNode;
    onClick?: () => void;
    width?: string
    height?: string
}

const Button: React.FC<ButtonProps> = ({ className, id, buttonText, onClick, width = '180px', height = '50px' }) => {
    return (
        <button className={`button ${className ?? ""}`} id={id} onClick={onClick} style={{ width, height }}>
            <p className='buttonText'>{buttonText}</p>
        </button>
    )
}
export default Button;