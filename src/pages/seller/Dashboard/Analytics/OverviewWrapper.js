import React from 'react';
import Header from './header';
import Sidebar from './sidebar';

const DashboardWrapper = ({ children }) => {
    return (
        <section>
            <section className="mt-10">{children}</section>
        </section>
    );
};

export default DashboardWrapper;
