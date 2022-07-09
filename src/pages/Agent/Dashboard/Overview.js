import React, { useEffect, useState } from 'react';
import { Badge, Progress, Timeline, Toggle } from 'rsuite';
import { FaCreditCard, FaPlane, FaUser, FaWallet } from 'react-icons/fa';

const Overview = () => {
    const [amount1, setamt1] = useState('10000');
    const [amount2, setamt2] = useState('40000');

    const hideAmount = (action, content, func) => {
        var star = '*';
        console.log(content);
        console.log(action);
        for (let i = 1; i < content.length; i++) {
            star = star + '*';
            func(star);
        }
        if (action === true) {
            console.log(star);
            func(star);
        } else {
            console.log(content);
            func(content);
        }
    };
    return (
        <section className="py-10 overflow-x-auto">
            <div className="flex flex-col md:flex-row min-w-[270px] items-center justify-evenly px-2 md:px-6">
                <div className="w-full mx-3 md:w-2/5 min-w-280px h-44 rounded shadow-lg bg-slate-700">
                    <div className="w-full h-16 bg-slate-800 border-b border-slate-400 flex items-center px-2 justify-between">
                        <h3 className="text-slate-300 font-bold">
                            Registering Account
                        </h3>
                        <Toggle
                            size="md"
                            checkedChildren="Reveal Balance"
                            defaultChecked={false}
                            unCheckedChildren="Hide Balance"
                            onChange={(e) => hideAmount(e, '10000', setamt1)}
                        />
                    </div>
                    <div className="flex items-center justify-between px-6 h-28 ">
                        <h5 className="flex items-center text-gray-50 text-lg font-black">
                            <i className="w-8 h-8 rounded-full mx-1 text-blue-400 flex bg-slate-600 items-center justify-center">
                                <FaWallet />
                            </i>
                            <p>&#8358; {amount1}</p>
                        </h5>
                        <div style={{ width: 80 }}>
                            <Progress.Circle percent={30} strokeColor="slate" />
                        </div>
                    </div>
                </div>

                <div className="w-full mx-3 mt-4 md:mt-0 md:w-2/5  min-w-280px h-44 rounded shadow-lg bg-slate-700">
                    <div className="w-full h-16 bg-slate-800 border-b border-slate-400 flex items-center px-2 justify-between">
                        <h3 className="text-slate-300 font-bold">
                            Pick-up Agent <Badge color="violet" content="NEW" />
                        </h3>
                        <Toggle
                            size="md"
                            checkedChildren="Reveal Balance"
                            defaultChecked={false}
                            unCheckedChildren="Hide Balance"
                            onChange={(e) => hideAmount(e, '40000', setamt2)}
                        />
                    </div>
                    <div className="flex items-center justify-between px-6 h-28 ">
                        <h5 className="flex items-center text-gray-50 text-lg font-black">
                            <i className="w-8 h-8 rounded-full mx-1 text-blue-400 flex bg-slate-600 items-center justify-center">
                                <FaWallet />
                            </i>
                            <p>&#8358; {amount2}</p>
                        </h5>
                        <div style={{ width: 80 }}>
                            <Progress.Circle percent={30} strokeColor="slate" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 min-w-[270px] my-5 p-1 md:p-6 shadow-lg rounded-lg">
                <h2 className="font-bold ml-5 mb-4">Your Timeline</h2>
                <Timeline className="custom-timeline">
                    <Timeline.Item dot={<FaWallet />}>
                        <p>March 1, 10:20</p>
                        <p>Your order starts processing</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p>March 1, 11:34</p>
                        <p>
                            The package really waits for the company to pick up
                            the goods
                        </p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p>March 1, 16:20</p>
                        <p>[Packed]</p>
                        <p>Beijing company has received the shipment</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<FaPlane />}>
                        <p>March 2, 06:12</p>
                        <p>[In transit]</p>
                        <p>Order has been shipped from Beijing to Shanghai</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<FaCreditCard />}>
                        <p>March 2, 09:20</p>
                        <p>[In transit]</p>
                        <p>
                            Sended from the Shanghai Container Center to the
                            distribution center
                        </p>
                    </Timeline.Item>
                    <Timeline.Item dot={<FaUser />}>
                        <p>March 3, 14:20</p>
                        <p>[Delivery]</p>
                        <p>
                            Shanghai Hongkou District Company Deliverer: Mr. Li,
                            currently sending you a shipment
                        </p>
                    </Timeline.Item>
                    <Timeline.Item
                        dot={
                            <FaWallet
                                style={{ background: '#15b215', color: '#fff' }}
                            />
                        }
                    >
                        <p>March 3, 17:50</p>
                        <p>[Received]]</p>
                        <p>
                            Your courier has arrived and the signer is the front
                            desk
                        </p>
                    </Timeline.Item>
                </Timeline>
            </div>
        </section>
    );
};

export default Overview;
