import React from 'react';
import { Drawer } from 'rsuite';

const DrawerPanel = ({
    handleClose,
    title,
    children,
    hasBackdrop,
    placement,
    size,
}) => (
    <>
        <Drawer
            open={true}
            onClose={handleClose}
            backdrop={hasBackdrop && 'static'}
            placement={placement}
            size={size}
        >
            {title && (
                <Drawer.Header>
                    <Drawer.Title>{title}</Drawer.Title>
                </Drawer.Header>
            )}

            <Drawer.Body>{children}</Drawer.Body>
        </Drawer>
    </>
);

export default DrawerPanel;
