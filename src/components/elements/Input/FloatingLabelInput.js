import React from 'react';

/**
 * @param  {} {name
 * @param  {} value
 * @param  {} label
 * @param  {} type
 * @param  {} required
 * @param  {} onChange
 * @param  {} onFocus
 * @param  {} error
 * @param  {} size
 * @param  {} status
 * @param  {} addColor
 * @param  {} ...props}
 */
const FloatingLabelInput = ({
    name,
    value,
    label,
    type,
    required,
    onChange,
    onFocus,
    error,
    size,
    status,
    addColor,
    ...props
}) => (
    <div className="relative z-0 w-full mb-6 group">
        <input
            className={`block py-2.5 px-0 w-full text-gray-900 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            id={name}
            type={type || 'text'}
            placeholder=" "
            onChange={onChange}
            onFocus={onFocus}
            name={name}
            value={value}
            required={required || false}
            {...props}
        />
        <label
            htmlFor={name}
            className="absolute text-sm text-gray-500 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
            {label || 'Input Label'}
            {required && (
                <span className="text-red-600 dark:text-red-500">*</span>
            )}
        </label>
        {error && (
            <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                <span className="font-medium">{error}</span>
            </p>
        )}
        {status && (
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="font-light">{status}</span>
            </p>
        )}
    </div>
);

export default FloatingLabelInput;
