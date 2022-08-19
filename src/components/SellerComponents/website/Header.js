import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../../assets/images/png/logo2x_2.png';
const Header = () => {
    const [open, setOpen] = useState('-mr-48');
    return (
        <section>
            <div className="flex justify-center">
                <div className="flex items-center h-16 w-full px-10 justify-between border-b border-gray-100">
                    <div>
                        <Link to="/">
                            <img src={Logo} alt="logo" width={120} />
                        </Link>
                    </div>
                    <div className="w-48 md:w-auto Lucida">
                        <ul
                            className={`flex Helvetica font-semibold fixed w-48 ${open} md:w-auto px-2 md:px-0 md:mr-10 shadow md:shadow-none md:relative bg-white md:bg-transparent right-0 top-0  flex-col md:flex-row h-full items-center z-50 md:h-[50px] py-2 text-xs`}
                        >
                            <i
                                className="md:hidden absolute top-2 left-2 w-6 h-6 flex items-center justify-center rounded-full bg-slate-200"
                                onClick={() => setOpen('-mr-48')}
                            >
                                <FaTimes />
                            </i>
                            <li className=" Helvetica font-semibold h-10 px-2 mt-10 md:mt-0 sm:20 m-2 lg:w-24  lg:m-1 hover:bg-slate-100 rounded-sm flex md:justify-center items-center text-slate-800 w-full cursor-pointer">
                                ABOUT US
                            </li>
                            <li className="h-10 px-2 sm:20 m-2 lg:w-24  lg:m-1 hover:bg-slate-100 rounded-sm flex md:justify-center items-center text-slate-800 w-full cursor-pointer">
                                STORIES
                            </li>
                            <li className="h-10 px-2 sm:20 m-2 lg:w-24  lg:m-1 hover:bg-slate-100 rounded-sm flex md:justify-center items-center text-slate-800 w-full cursor-pointer">
                                CONTACT
                            </li>
                            <Link to="/signin">
                                <li className="h-10 px-2 sm:20 m-2 lg:w-24  lg:m-1 hover:bg-slate-100 rounded-sm flex md:justify-center items-center text-slate-800 w-full cursor-pointer">
                                    LOG IN
                                </li>
                            </Link>
                            <Link to="/signup">
                                <li className="h-10 px-2 bg-slate-700 text-white px-3 shadow-md rounded sm:20 m-2 lg:w-24  lg:m-1 hover:bg-slate-900 rounded-sm flex md:justify-center items-center text-slate-800 w-full cursor-pointer">
                                    SIGN UP
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

                <i
                    onClick={() => setOpen('mr-0')}
                    className=" h-16 flex items-center text-xl text-slate-700 block md:hidden"
                >
                    <FaBars />
                </i>
            </div>
            {/* <div className="flex justify-center w-full border-b border-gray-100 shadow-md hidden md:flex">
                <ul className="flex items-center h-[35px] py-2 text-xs">
                    <li className="h-full w-20 m-2 md:w-24  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center text-gray-800 hover:text-slate-400 cursor-pointer">
                        MARKET PLACE
                    </li>
                    <li className="h-full w-24 m-2 md:w-32  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center text-gray-800 hover:text-slate-400 cursor-pointer">
                        WHOLESALE CENTER
                    </li>
                    <li className="h-full w-24 m-2 md:w-32  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center text-gray-800 hover:text-slate-400 cursor-pointer">
                        SELLER CENTER
                    </li>
                    <li className="h-full w-20 m-2 md:w-32  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center text-gray-800 hover:text-slate-400 cursor-pointer">
                        SERVICES
                    </li>
                    <li className="h-full w-20 m-2 md:w-32  lg:m-1 hover:bg-gray-50 rounded-sm flex justify-center items-center text-gray-800 hover:text-slate-400 cursor-pointer">
                        EVENTS
                    </li>
                </ul>
            </div> */}
        </section>
    );
};

export default Header;
