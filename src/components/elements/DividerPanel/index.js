import React from 'react';
import { Divider } from 'rsuite';

const DividerPanel = ({ text, ...props }) => {
    return (
        <>
            <Divider {...props}>{text}</Divider>
        </>
    );
};

export default DividerPanel;
