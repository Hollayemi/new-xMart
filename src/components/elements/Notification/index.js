import React from 'react';
import { Notification, toaster } from 'rsuite';

const Message = React.forwardRef(({ type, message }) => {
    return (
        <Notification type={type} header={type}>
            {message}
        </Notification>
    );
});

const DisplayInfo = (type, msg, placement) => {
    toaster.push(<Message type={type} message={msg} />, { placement });
    // <button onClick={() => toaster.push(message, { placement })}>Push</button>
};

export default DisplayInfo;
