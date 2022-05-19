import React from 'react';
import { Progress } from 'rsuite';

const ProgressBar = ({
    type,
    percent,
    status,
    strokeColor,
    strokeWidth,
    vertical,
    width,
    ...props
}) => (
    <div style={{ width: `${width}%`, maxWidth: '100%' }}>
        {type === 'circle' && (
            <Progress.Circle
                percent={percent}
                status={status}
                strokeColor={strokeColor}
                strokeWidth={strokeWidth}
                {...props}
            />
        )}
        {type === 'line' && (
            <Progress.Line
                percent={percent}
                status={status}
                vertical={vertical}
                strokeColor={strokeColor}
                strokeWidth={strokeWidth}
                {...props}
            />
        )}
    </div>
);

export default ProgressBar;
