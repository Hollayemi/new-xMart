import React, { useState } from 'react';
import DashboardWrapper from '../../../components/AgentComponents/Dashboard';
import myPic from '../../../assets/images/avatar/avatar2.png';
import './index.css';
import Overview from './Overview';
import Reward from './Reward';
import Pickup from './Pickup';

const AgentDashboard = () => {
    const [showing, setShowing] = useState('Pickup');
    const usersInfo = { username: 'Hollayemi', profPic: myPic };

    return (
        <DashboardWrapper
            danger="mainly"
            agentDetails={usersInfo}
            setShowing={setShowing}
            shopName="Kemon-Mart"
        >
            {showing === 'Overview' && <Overview />}
            {showing === 'Reward' && <Reward />}
            {showing === 'Pickup' && <Pickup />}
        </DashboardWrapper>
    );
};

export default AgentDashboard;
