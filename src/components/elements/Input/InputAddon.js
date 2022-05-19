import React from 'react';

/**
 * @param  {} {suffix
 * @param  {} prefix
 * @param  {} icon
 * @param  {} name
 * @param  {} value
 * @param  {} placeholder
 * @param  {} label
 * @param  {} type
 * @param  {} required
 * @param  {} onChange
 * @param  {} onFocus
 * @param  {} error
 * @param  {} size
 * @param  {} status
 * @param  {} ...props}
 */
const InputAddon = ({
    suffix,
    prefix,
    icon,
    name,
    value,
    placeholder,
    label,
    type,
    required,
    onChange,
    onClick,
    onFocus,
    error,
    size,
    status,
    ...props
}) => {
    return (
        <div className="mb-2">
            <label
                htmlFor={name}
                className="block text-sm font-bold text-slate-500 tracking-wide mb-1"
            >
                {label || 'Input Label'}
                {required && (
                    <span className="text-red-600 dark:text-red-500">*</span>
                )}
            </label>
            <div className="flex">
                {prefix && (
                    <span
                        className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 cursor-pointer"
                        onClick={onClick}
                    >
                        {icon}
                    </span>
                )}
                <input
                    type={type || 'text'}
                    id={name}
                    className={`${suffix && 'rounded-l-lg'} ${
                        prefix && 'rounded-r-lg'
                    } ${size === 'sm' && 'p-2'}  ${
                        (size === 'lg' && 'p-4') || 'p-2.5'
                    }  rounded-none  bg-gray-50 border border-gray-300 text-gray-600 focus:ring-blue-300 focus:border-blue-400 block flex-1 min-w-0 w-full text-sm p-2.5`}
                    placeholder={placeholder || 'Input Placeholder'}
                    onChange={onChange}
                    onFocus={onFocus}
                    name={name}
                    value={value}
                    required={required || false}
                    {...props}
                />
                {suffix && (
                    <span
                        className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-l-0 border-gray-300 cursor-pointer"
                        onClick={onClick}
                    >
                        {icon}
                    </span>
                )}
            </div>
        </div>
    );
};

export default InputAddon;
