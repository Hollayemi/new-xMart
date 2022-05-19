import React from 'react';

/**
 * @param  {} {btnClass
 * @param  {} type
 * @param  {} disabled
 * @param  {} onClick
 * @param  {} title
 * @param  {} ...props}
 */
const Button = ({ btnClass, type, disabled, onClick, title, ...props }) => (
    <button
        type={type || 'button'}
        className={`${btnClass} text-white ${
            !disabled
                ? 'bg-slate-700 hover:bg-slate-800'
                : 'bg-slate-50 hover:bg-slate-100 border text-slate-400'
        } font-semibold text-sm px-5 flex items-center mb-2`}
        onClick={onClick}
        disabled={disabled}
        {...props}
    >
        {title || 'Submit'}
    </button>
);

export default Button;
