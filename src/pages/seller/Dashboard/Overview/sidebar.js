import React from 'react';
import { FaChartPie, FaSpeakerDeck } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <section>
            <div>
                <button className="h-9 w-4/5 ml-5 mt-14 rounded-full bg-green-500 hover:bg-green-400 text-white">
                    GENERATE INVOICE
                </button>
                <ul>
                    <h5 className="h-8 pl-9 mt-8 flex items-center text-md">
                        Main
                    </h5>
                    <li className="w-full cursor-pointer border-white h-12 pl-8 text-md border-l-4 flex items-center text-md hover:bg-blue-100 hover:text-blue-500 hover:border-blue-600">
                        <i className="pr-4">
                            <FaSpeakerDeck />
                        </i>
                        Overview
                    </li>
                    <h5 className="h-8 pl-9 mt-5 flex items-center text-md">
                        Payments
                    </h5>
                    <li className="w-full cursor-pointer border-white h-12 pl-8 text-md border-l-4 flex items-center text-md hover:bg-blue-100 hover:text-blue-500 hover:border-blue-600">
                        <i className="pr-4">
                            <FaChartPie />
                        </i>
                        All Payments
                    </li>
                    <li className="w-full cursor-pointer border-white h-12 pl-8 text-md border-l-4 flex items-center text-md hover:bg-blue-100 hover:text-blue-500 hover:border-blue-600">
                        <i className="pr-4">
                            <FaChartPie />
                        </i>
                        Reconcilled Payments
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;
