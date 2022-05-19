import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { wasGoing } from '../../state/slices/auth/Login';
import { REQUEST_STATUS } from '../../state/slices/constants';

const AuthOutlet = ({ to }) => {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.reducer.loginReducer);

    let auth = false;
    if (status === REQUEST_STATUS.FULFILLED) {
        auth = true;
    } else {
        dispatch(wasGoing(to));
    }
    return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default AuthOutlet;
