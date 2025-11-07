import './Input.scss';

interface Props {
    className?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    onClick?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    labelText?: string;
    required?: boolean;
    width?: string;
    height?: string;
}

const Input: React.FC<Props> = ({ className, id, name, placeholder, onClick, onChange, labelText, width = '400px', height = '50px' }) => {
    return (
        <div className='inputContainer'>
            <label className='label' htmlFor={id}>{labelText}</label>
            <input type="text" className={`input ${className ?? ""}`} id={id} name={name} placeholder={placeholder} onClick={onClick} onChange={onChange} style={{ width, height }} />
            <p className='input-error-message'>{labelText} is required</p>
        </div>
    )
}
export default Input;