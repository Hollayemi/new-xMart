import React from 'react';
import { Tooltip, Whisper } from 'rsuite';

/**
 * @param  {} {icon
 * @param  {} name
 * @param  {} value
 * @param  {} placeholder
 * @param  {} label
 * @param  {} type
 * @param  {} required
 * @param  {} onChange
 * @param  {} onFocus
 * @param  {} error
 * @param  {} border
 * @param  {} tooltip
 * @param  {} }
 */

const InputGroup = ({
    icon,
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
    border,
    tooltip,
    min,
    ...props
}) => {
    const tooltipMessage = <Tooltip>{tooltip && tooltip}</Tooltip>;
    let pos = null;
    if (tooltip) {
        if (value.length < 6) {
            pos = 'top';
        }
    }
    return (
        <div className="mb-6">
            <label
                htmlFor={name}
                className="block text-sm font-bold text-slate-700 tracking-wider mb-1"
            >
                {label || 'Input Label'}
                {required && (
                    <span className="text-red-600 dark:text-red-500">*</span>
                )}
            </label>
            {icon ? (
                <>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            {icon}
                        </div>
                        <input
                            id={name}
                            type={type || 'text'}
                            className={`${size === 'sm' && 'p-2'}  ${
                                (size === 'lg' && 'p-4') || 'p-2.5'
                            } bg-white-50 ${
                                border && 'border'
                            } border-gray-300 text-gray-900 text-sm rounded-xs placeholder-text-xs focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm pl-10`}
                            onChange={onChange}
                            onFocus={onFocus}
                            name={name}
                            value={value}
                            placeholder={placeholder || 'Input Placeholder'}
                            required={required || false}
                            {...props}
                        />
                    </div>
                </>
            ) : (
                <Whisper
                    placement={pos}
                    controlId="control-id-click"
                    trigger="click"
                    speaker={tooltipMessage}
                >
                    <input
                        id={name}
                        type={type || 'text'}
                        className={`${size === 'sm' && 'p-2'}  ${
                            (size === 'lg' && 'p-4') || 'p-2.5'
                        } bg-slate-50 border border-gray-300 text-gray-600 placeholder-text-xs text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-sm`}
                        onChange={onChange}
                        onFocus={onFocus}
                        name={name}
                        value={value}
                        placeholder={placeholder || 'Input Placeholder'}
                        required={required || false}
                        {...props}
                    />
                </Whisper>
            )}

            {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">{error}</span>
                </p>
            )}

            {status && (
                <p className="mt-2 text-sm text-slate-600	 dark:text-slate-400">
                    <span className="font-light">{status}</span>
                </p>
            )}
        </div>
    );
};

export default InputGroup;
