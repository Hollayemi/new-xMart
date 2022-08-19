import React, { useState } from 'react';
import { ButtonToolbar, Dropdown, Popover, Whisper } from 'rsuite';
import DrawerPanel from '../DrawerPanel';
import CollectionDetails from '../DrawerPanel/drawerContent/collectionDetails';
import ViewProduct from '../DrawerPanel/drawerContent/viewProduct';

const IconDropdown = ({ Icon, Content, onSelect, className, ref }) => {
    const [prodId, prodDrawer] = useState(null);
    const [colId, colDrawer] = useState(null);
    const myContent = Content.map((res, index) => {
        return (
            <Dropdown.Item eventKey={res.value} key={index}>
                {res.name}
            </Dropdown.Item>
        );
    });
    const handleSelect = async (eventKey) => {
        console.log(eventKey);
        let exp = eventKey.split('-');
        if (exp[1] === 'view' && exp[3] && exp[3] === 'product') {
            prodDrawer(exp[2]);
        }
        if (exp[1] === 'details') {
            colDrawer(exp[2]);
        }
        onSelect(eventKey);
    };

    return (
        <>
            <ButtonToolbar>
                <Whisper
                    placement="bottomStart"
                    trigger="click"
                    speaker={
                        <Popover ref={ref} className={className} full>
                            <Dropdown.Menu onSelect={handleSelect}>
                                {myContent}
                            </Dropdown.Menu>
                        </Popover>
                    }
                >
                    <i className="w-full h-full">{Icon}</i>
                </Whisper>
            </ButtonToolbar>
            <DrawerPanel
                placement="right"
                title="Product Info"
                size="xs"
                children={<CollectionDetails id={colId} />}
                backdrop={true}
                open={colId && true}
                handleClose={() => colDrawer(false)}
            />
            <DrawerPanel
                placement="right"
                title="Collection Details"
                size="xs"
                children={<ViewProduct id={prodId} />}
                backdrop={true}
                open={prodId && true}
                handleClose={() => prodDrawer(false)}
            />
        </>
    );
};

export default IconDropdown;
