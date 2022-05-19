import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @param  {} {helperText
 * @param  {} linkText
 * @param  {} linkTo}
 */
const HelperText = ({ helperText, linkText, linkTo, style }) => (
    <>
        <p
            className={`py-2 text-sm text-gray-500 font-medium ml-auto w-fit ${style}`}
        >
            {helperText || ''}{' '}
            <Link
                to={linkTo || '/'}
                className="font-semibold text-blue-600 hover:text-blue-800 mr-auto hover:no-underline"
            >
                {linkText}
            </Link>
        </p>
    </>
);

export default HelperText;
