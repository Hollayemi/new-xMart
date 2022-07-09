import React, { useState } from 'react';
import DashboardWrapper from '../../../components/AgentComponents/Dashboard';
import myPic from '../../../assets/images/avatar/avatar2.png';
import './index.css';
import Overview from './Overview';
import Reward from './Reward';
import Pickup from './Pickup';
import AvailablePickup from './available';
import Settings from './Settings';
import { useSelector } from 'react-redux';

const AgentDashboard = () => {
    const [showing, setShowing] = useState('Pickup');
    const usersInfo = { username: 'Hollayemi', profPic: myPic };

    const { data } = useSelector((state) => state.reducer.agentReducer);
    console.log(data);

    return (
        <DashboardWrapper
            danger="mainly"
            showing={showing}
            agentDetails={usersInfo}
            setShowing={setShowing}
            shopName="Kemon-Mart"
        >
            {showing === 'Overview' && <Overview />}
            {showing === 'Reward' && <Reward data={data} />}
            {showing === 'Pickup' && <Pickup />}
            {showing === 'Available' && <AvailablePickup />}
            {showing === 'Settings' && <Settings />}
        </DashboardWrapper>
    );
};

export default AgentDashboard;
