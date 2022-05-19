import React from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';

const TopLoader = () => {
    TopBarProgress.config({
        barColors: {
            0: '#00a8e6',
            '1.0': '#4dcfff',
        },
        shadowBlur: 5,
    });

    return <TopBarProgress />;
};

export default TopLoader;
