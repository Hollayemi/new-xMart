import React from 'react';
import Header from './Header';

const HomeWrapper = (prop) => {
    return (
        <div>
            <Header />
            {prop.children}
        </div>
    );
};

export default HomeWrapper;
