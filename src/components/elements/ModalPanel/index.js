import React from 'react';
import { Button, Modal } from 'rsuite';
import Loading from '../Loading';

const ModalPanel = ({
    handleClose,
    children,
    title,
    hasBackdrop,
    keyboard,
    buttonName,
    size,
    overflow,
    closeButton,
    open,
    hideFooterBtn,
}) => (
    <>
        <Modal
            open={open}
            onClose={handleClose}
            backdrop={hasBackdrop && 'static'}
            keyboard={keyboard || false}
            overflow={overflow || false}
            size={size}
        >
            {title && (
                <Modal.Header closeButton={closeButton || false}>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
            )}
            <Modal.Body>
                {children ? (
                    children
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <Loading size="md" />
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                {hideFooterBtn && (
                    <Button
                        onClick={handleClose}
                        appearance="primary"
                        className="bg-blue-400"
                    >
                        {buttonName}
                    </Button>
                )}
                {/* <Button onClick={handleClose} appearance="subtle">
                    Cancel
                </Button> */}
            </Modal.Footer>
        </Modal>
    </>
);

export default ModalPanel;
