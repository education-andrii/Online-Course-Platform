import './Input.scss';

interface Props {
    className?: string;
    id?: string;
    name?: string;
    withValidation?: boolean;
    placeholder?: string;
    onClick?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    labelText?: string;
    required?: boolean;
    isValid: boolean;
    width?: string;
    height?: string;
}

const Input: React.FC<Props> = ({ className, id, name, withValidation, placeholder, onClick, onChange, labelText, isValid, width = '400px', height = '50px' }) => {
    return (
        <div className='inputContainer'>
            <label className='label' htmlFor={id}>{labelText}</label>
            <input type="text" className={`input ${className ?? ""} ${withValidation && (isValid ? '' : 'input-error')}`} id={id} name={name} placeholder={placeholder} onClick={onClick} onChange={onChange} style={{ width, height }} />
            {withValidation && <p className={`input-error-message ${isValid ? 'hidden' : 'visible'}`}>{labelText} is required.</p>}
        </div>
    )
}
export default Input;