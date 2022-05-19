import React from 'react';
import { Dropdown, Popover } from 'rsuite';

const RenderMenu = ({ onClose, className, content }, ref) => {
    const myContent = content.map((res, index) => {
        return (
            <Dropdown.Item eventKey={res.value} key={index}>
                {res.name}
            </Dropdown.Item>
        );
    });
    const handleSelect = (eventKey) => {
        onClose(eventKey);
        console.log(eventKey);
    };
    return (
        <Popover ref={ref} className={className} full>
            <Dropdown.Menu onSelect={handleSelect}>{myContent}</Dropdown.Menu>
        </Popover>
    );
};

export default RenderMenu;
