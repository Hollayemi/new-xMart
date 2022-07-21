import React from 'react';
import { FaBell, FaUserEdit, FaUsers, FaShoppingBag } from 'react-icons/fa';
import Avartar from '../../../assets/images/avatar/avatar1.png';
import Prod1 from '../../../assets/images/png/_supreme5.png';
import Prod2 from '../../../assets/images/png/_supreme3.png';
import Prod3 from '../../../assets/images/png/_supreme4.png';
import Prod4 from '../../../assets/images/png/_supreme.png';

const RecentInfo = () => {
    return (
        <div className="overflow-y-scroll myScroll">
            <div className="w-full flex justify-between px-5 mt-5">
                <h5 className="flex items-center justify-center w-10 h-10 rounded-full relative border-2 border-slate-600 text-md text-slate-600 cursor-pointer ">
                    <FaBell />
                    <p className="text-white w-4 h-4 text-[9px] font-semibold absolute -top-0 -right-2  rounded-full bg-red-600 text-sm flex items-center justify-center">
                        23
                    </p>
                </h5>
                <i className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-600 text-md text-slate-600 cursor-pointer ">
                    <FaUserEdit />
                </i>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
                <img
                    src={Avartar}
                    alt="avartar"
                    className="w-36 h-36 rounded-full"
                />
                <h3 className="font-black text-lg">Stephen Olayemi</h3>
            </div>
            <div className="w-full flex justify-center my-5">
                <div className="flex p-3 border items-center">
                    <div className="flex items-center pr-3">
                        <i className="text-xl font-medium ">
                            <FaShoppingBag />
                        </i>
                        <div className="flex flex-col ml-4">
                            <p className="text-sm font-bold">49</p>
                            <h5 className="text-xs font-bold text-gray-400">
                                Products
                            </h5>
                        </div>
                    </div>
                    <div className="flex items-center pl-3 border-l">
                        <i className="text-2xl font-medium ">
                            <FaUsers />
                        </i>
                        <div className="flex flex-col ml-4">
                            <p className="text-sm font-bold">49</p>
                            <h5 className="text-xs font-bold text-gray-400">
                                Followers
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-2 px-4">
                <h3 className="font-black text-md">Recent Orders</h3>
                <h3 className="font-black text-blue-500 text-md cursor-pointer">
                    See All
                </h3>
            </div>
            <div className="flex justify-center w-full">
                <div className="w-full overflow-auto h-[300px] myScroll">
                    <OrdersComponent
                        amount={5000}
                        image={Prod1}
                        product="Redmi FX"
                        time="2 days ago"
                    />
                    <OrdersComponent
                        amount={5000}
                        image={Prod2}
                        product="Redmi FX"
                        time="2 days ago"
                    />
                    <OrdersComponent
                        amount={5000}
                        image={Prod3}
                        product="Redmi FX"
                        time="2 days ago"
                    />
                    <OrdersComponent
                        amount={5000}
                        image={Prod4}
                        product="Redmi FX"
                        time="2 days ago"
                    />
                    <OrdersComponent
                        amount={5000}
                        image={Prod4}
                        product="Redmi FX"
                        time="2 days ago"
                    />
                </div>
            </div>
        </div>
    );
};

export default RecentInfo;

const OrdersComponent = ({ image, product, time, amount }) => {
    return (
        <div className="flex justify-center">
            <div className="flex  justify-between py-4 border-b border-slate-100 items-center w-11/12 border px-3">
                <div className="flex items-center">
                    <div>
                        <img src={image} alt="This is about me" width={30} />
                    </div>
                    <div className="flex ml-3 flex-col items-between">
                        <h5 className="font-[600] text-blue-500">{product}</h5>
                        <h5>{time}</h5>
                    </div>
                </div>
                <div>
                    <h5 className="font-[700]">&#x20A6;{amount}</h5>
                </div>
            </div>
        </div>
    );
};
