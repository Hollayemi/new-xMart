import React from 'react';

const TextAreaGroup = ({
    name,
    value,
    placeholder,
    label,
    type,
    required,
    onChange,
    onFocus,
    error,
    size,
    status,
    rows,
    ...props
}) => {
    return (
        <>
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-bold text-gray-300 dark:text-gray-400"
            >
                {label || 'TextArea Label'}
            </label>
            <textarea
                id={name}
                rows={rows || 4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                onChange={onChange}
                onFocus={onFocus}
                name={name}
                value={value}
                required={required || false}
                placeholder={placeholder || 'Enter Message'}
                {...props}
            ></textarea>
            {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">{error}erorr....</span>
                </p>
            )}
        </>
    );
};

export default TextAreaGroup;
