import './Input.scss';
import { ReactNode } from 'react';

interface Props {
    className?: string;
    id?: string;
    name?: string;
    value?: string;
    withValidation?: boolean;
    type?: string;
    placeholder?: string;
    onClick?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    labelText?: string;
    required?: boolean;
    isValid?: boolean;
    children?: ReactNode;
    width?: string;
    height?: string;
}

const Input: React.FC<Props> = ({ className, id, name, value, withValidation, type = 'text', placeholder, onClick, onChange, labelText, isValid, children, width = '400px', height = '50px' }) => {
    return (
        <div className='inputContainer'>
            <label className='label' htmlFor={id}>{labelText}</label>
            <input type={type} className={`input ${className ?? ""} ${withValidation && (isValid ? '' : 'input-error')}`} id={id} name={name} value={value} placeholder={placeholder} onClick={onClick} onChange={onChange} style={{ width, height }} />
            {children}
        </div>
    )
}
export default Input;