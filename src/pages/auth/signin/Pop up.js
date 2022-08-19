import React from 'react';
import ModalPanel from '../../../components/elements/ModalPanel';
import { SignInForm } from './Signin';

const SigninPop = ({ openAdd, setOpenAdd }) => {
    return (
        <ModalPanel
            closeButton={true}
            title=" "
            children={<SignInForm going="/" />}
            hasBackdrop={true}
            keyboard={true}
            open={openAdd}
            buttonName="Varify Code"
            handleClose={() => setOpenAdd(!openAdd)}
        />
    );
};

export default SigninPop;
