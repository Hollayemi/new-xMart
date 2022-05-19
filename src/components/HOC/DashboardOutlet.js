import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { wasGoing } from '../../state/slices/auth/Login';
import { REQUEST_STATUS } from '../../state/slices/constants';

const DashOutlet = ({ to }) => {
    const dispatch = useDispatch();
    const { shopData, status } = useSelector(
        (state) => state.reducer.setShopReducer
    );

    console.log(shopData);
    let auth = false;
    if (status === REQUEST_STATUS.PENDING) {
        auth = true;
        console.log('beta');
    } else {
        dispatch(wasGoing(to));
    }
    return auth ? <Outlet /> : <Navigate to="/seller" />;
};

export default DashOutlet;
