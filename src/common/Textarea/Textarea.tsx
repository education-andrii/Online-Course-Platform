import './Textarea.scss';
import { ReactNode } from 'react';

import { INPUT_INPUT_TEXT_PLACEHOLDER } from '../../constants';

interface Props {
    className?: string;
    id?: string;
    name?: string;
    value?: string | number;
    withValidation?: boolean;
    type?: string;
    placeholder?: string;
    onClick?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
    labelText?: string;
    required?: boolean;
    isValid?: boolean;
    children?: ReactNode;
    errorMessage?: string
    width?: string;
    height?: string;
}

const Textarea: React.FC<Props> = ({ className, id, name, value, withValidation, placeholder = INPUT_INPUT_TEXT_PLACEHOLDER, onClick, onChange, labelText, isValid, children, errorMessage = `${labelText} is required`, width = '400px', height = '150px' }) => {
    return (
        <div className='textareaContainer'>
            <label className='label' htmlFor={id}>{labelText}</label>
            <div>
                <textarea className={`textarea ${className ?? ""} ${withValidation && (isValid ? '' : 'textarea-error')}`} id={id} name={name} value={value} placeholder={placeholder} onClick={onClick} onChange={onChange} style={{ width, height }}></textarea>
                {withValidation && <p className={`textarea-error-message ${isValid ? 'hidden' : 'visible'}`}>{errorMessage}</p>}
                {children}
            </div>
        </div>
    )
}
export default Textarea;