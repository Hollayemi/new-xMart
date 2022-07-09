import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { REQUEST_STATUS } from '../../state/slices/constants';

export const AdminOutlet = () => {
    const { status } = useSelector((state) => state.reducer.adminReducer);

    let auth = false;
    if (status === REQUEST_STATUS.FULFILLED) {
        auth = true;
    }
    return auth ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminOutlet;
