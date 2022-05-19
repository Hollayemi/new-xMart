import React from 'react';
import { Loader } from 'rsuite';

const Loading = ({ size, speed, backdrop, content, center }) => (
    <>
        <Loader
            size={size}
            speed={speed}
            backdrop={backdrop}
            content={content}
            center={center}
        />
    </>
);

export default Loading;
