import './Input.scss';

interface Props {
    className?: string;
    id?: string;
    placeholder?: string;
    onClick?: () => void;
    width?: string
    height?: string
}

export const Input: React.FC<Props> = ({ className, id, placeholder, onClick, width = '400px', height = '50px' }) => {
    return (
        <input type="text" className={`input ${className ?? ""}`} id={id} placeholder={placeholder} onClick={onClick} style={{ width, height }} />
    )
}