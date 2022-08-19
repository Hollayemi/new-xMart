import React from 'react';
import { FaAccusoft, FaAddressCard, FaHorse } from 'react-icons/fa';

const Notification = () => {
    return (
        <div className="pt-5">
            <Each icon={<FaHorse />} />
            <Each icon={<FaAddressCard />} />
            <Each icon={<FaAccusoft />} />
        </div>
    );
};

export default Notification;

const Each = ({ icon }) => {
    return (
        <div className="flex items-start relative pb-4 border-b my-1 shadow-sm p-2 mx-5">
            <div className="pr-3">
                <div className="border w-10 h-10 text-2xl p-1 border-blue-400 rounded-full w-9 h-9 ">
                    {icon}
                </div>
            </div>
            <div>
                <h5 className="text-gray-400">
                    Product uploaded was successfully accepted. It will be
                    updated set more info{' '}
                    <span className="text-blue-400"> take note of this</span>
                </h5>
                <h5 className="absolute bottom-0 right-2 text-gray-300">
                    2:43 pm
                </h5>
            </div>
        </div>
    );
};
