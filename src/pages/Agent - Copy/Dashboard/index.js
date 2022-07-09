import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardWrapper from '../../../components/AdminComponents';
import myPic from '../../../assets/images/avatar/avatar2.png';
import './index.css';
import Agents from './Agents';
import Busineses from './Businesses';
import Pickers from './QuickPickers';
import Overview from './Overview';
import Logout from './Logout';
import { adminFetch } from '../../../state/slices/admin/fetch';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showing, setShowing] = useState('Busineses');
    const [targetInfo, setTargetInfo] = useState('asBusiness');
    const [Viewing, setViewing] = useState({
        from: 'business',
        view: 'allBusiness',
    });
    const usersInfo = { username: 'Hollayemi', profPic: myPic };
    const { status, adminData } = useSelector(
        (state) => state.reducer.adminReducer
    );
    if (status === 'idle' || targetInfo.message === 'permission not granted') {
        navigate('/admin/login');
    }
    useEffect(() => {
        if (targetInfo === '') {
            adminFetch(dispatch, setTargetInfo, adminData.accessToken, Viewing);
        }
        adminFetch(dispatch, setTargetInfo, adminData.accessToken, Viewing);
    }, [Viewing]);

    console.log(targetInfo);
    const myNeededInfo = {
        Viewing: Viewing,
        setViewing: setViewing,
        targetInfo: targetInfo.message,
    };

    return (
        <DashboardWrapper
            danger="mainly"
            showing={showing}
            agentDetails={usersInfo}
            setShowing={setShowing}
            setViewing={setViewing}
            shopName="xMart"
        >
            {showing === 'Overview' && <Overview />}
            {showing === 'Agents' && <Agents myNeededInfo={myNeededInfo} />}
            {showing === 'Busineses' && (
                <Busineses myNeededInfo={myNeededInfo} />
            )}
            {showing === 'Pickers' && <Pickers />}
            {showing === 'Logout' && <Logout />}
        </DashboardWrapper>
    );
};

export default AdminDashboard;
