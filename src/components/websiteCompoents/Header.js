import React from 'react';
import { Drawer, Dropdown } from 'rsuite';
import {
    FaShoppingCart,
    FaAddressCard,
    FaBars,
    FaHeart,
    FaInfoCircle,
    FaLaptopCode,
    FaSearch,
    FaTimes,
    FaDumpster,
    FaRegUser,
    FaUserTag,
    FaUser,
    FaShoppingBasket,
    FaHome,
    FaPhone,
    FaMailBulk,
} from 'react-icons/fa';
import Button from '../elements/Button';
import { websiteImages } from './Images';
import Categories from './Categories';
import { Link } from 'react-router-dom';

export const BigHeader = ({ top, raise, sideBarState }) => {
    return (
        <div
            className={`container-fluid fixed top-0 z-50 w-full top-0 bg-slae-600 shadow-sm h-24 bg-white`}
        >
            <div className="flex justify-end px-4 items-center h-8">
                <Link to="/seller">
                    <h5 className="mx-2">Sell on Kemon</h5>
                </Link>
                <Link to="/agent">
                    <h5 className="mx-2">Earn on Kemon</h5>
                </Link>
            </div>
            <div
                className={`flex flex-col md:flex-row fixed md:relative bg-white md:bg-transparent h-full md:h-auto w-3/4 
                sm:w-2/3 md:w-full md:left-0 top-0 shadow-lg md:shadow-none sm:px- md:justify-evenly md:items-center ${
                    sideBarState ? 'left-0' : '-left-3/4 sm:-left-2/3 py-2'
                }`}
            >
                <div className="hidden md:block">
                    <h1 className="font-black text-xl text-black">
                        Kemon-Mart
                    </h1>
                </div>
                <div className="flex items-center justify-evenly md:w-3/6 lg:w-4/5">
                    <div className="w-full md:py-0 flex">
                        {/* <input
                            type="text"
                            placeholder="Search products, brand and categories"
                            className="border text-[14px] border-gray-400 h-9 pl-4 w-4/5 min-w-[200px] max-w-[470px] rounded-l outline-none font-medium "
                        />
                        <select
                            name="cars"
                            className="border border-gray-400 font-semibold rounded-r-lg md:w-32 text-sm -ml-2 lg:px-3 focus:outline-none"
                        >
                            <option value="worship">Brand</option>
                            <option value="Praise">Praise Jam</option>
                            <option value="Chant">Chant</option>
                            <option value="Instrumental">Instrumental</option>
                            <option value="Message">Message</option>
                        </select>
                        <button className="ml-3 bg-slate-500 px-5 text-white rounded shadow-xl">
                            Search
                        </button> */}
                    </div>

                    <div className="flex items-center md:ml-4 lg:ml-10 justify-between text-hite">
                        <Link to="/seller">
                            <div className="text-black flex items-center mx-1 cursor-pointer hover:bg-gray-200 h-10 w-24 justify-center rounded-md">
                                <i className="text-lg">
                                    <FaDumpster />
                                </i>
                                <h5 className="mx-2 hiden lg:block">Sell</h5>
                            </div>
                        </Link>
                        <Link to="/agent">
                            <div className="flex items-center text-black mx-1 cursor-pointer hover:bg-gray-200 h-10 w-24 justify-center rounded-md">
                                <i className="text-lg">
                                    <FaUserTag />
                                </i>
                                <h5 className="mx-2 hiden lg:block">Agent</h5>
                            </div>
                        </Link>
                        <Dropdown
                            size="md"
                            title={
                                <div className="flex items-center mx-3">
                                    <i className="text-lg">
                                        <FaShoppingCart />
                                    </i>
                                    <h5 className="mx-2">Cart</h5>
                                </div>
                            }
                        >
                            <h5 className="w-full px-4 text-sm text-gray-500 py-3 border-b">
                                The Latest Addition
                            </h5>
                            <div className="w-full h-16 flex text-xs text-gray-400 items-center justify-center">
                                <i className="text-sm">
                                    <FaInfoCircle />
                                </i>
                                <h5 className="mx-2">No Item In Your Cart</h5>
                            </div>
                            <div className="flex items-center items-center py-3 px-5 border-t">
                                <button className="w-60 h-8 text-white rounded-md bg-slate-600 hover:bg-slate-700 shadow-lg">
                                    View My Cart
                                </button>
                            </div>
                        </Dropdown>
                        <Dropdown
                            size="md"
                            title={
                                <div className="flex items-center mx-3">
                                    <i className="text-lg">
                                        <FaRegUser />
                                    </i>
                                    <h5 className="mx-2 ">Account</h5>
                                </div>
                            }
                        >
                            <div className="flex items-center mx-3 w-full h-10 hover:bg-slate-50 cursor-pointer hover:font-semibold">
                                <i className="text-lg">
                                    <FaAddressCard />
                                </i>
                                <h5 className="mx-2 text-md ml-5 cursor-pointer">
                                    Orders
                                </h5>
                            </div>
                            <div className="flex items-center mx-3 w-full h-10 hover:bg-slate-50 cursor-pointer hover:font-semibold">
                                <i className="text-lg">
                                    <FaLaptopCode />
                                </i>
                                <h5 className="mx-2 text-md ml-5 cursor-pointer">
                                    Coupons
                                </h5>
                            </div>
                            <div className="flex items-center mx-3 w-full h-10 hover:bg-slate-50 cursor-pointer hover:font-semibold">
                                <i className="text-lg">
                                    <FaHeart />
                                </i>
                                <h5 className="mx-2 text-md ml-5 cursor-pointer">
                                    Wishlist
                                </h5>
                            </div>
                            <div className="flex items-center items-center py-3 px-5 border-t">
                                <button className="w-40 h-8 text-white rounded-md bg-slate-600 hover:bg-slate-700 shadow-lg">
                                    SIGN IN
                                </button>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SmallHeader = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="bg-white pb-2 shadow z-50 fixed left-0 top-0 w-full">
            <div
                className={`block md:hidden flex justify-between items-center py-1  px-3 sm:px-10 w-full`}
            >
                <div>
                    <i
                        className={`text-2xl text-black`}
                        onClick={() => setOpen(!open)}
                    >
                        {!open ? <FaBars /> : <FaTimes />}
                    </i>
                </div>
                <div className="flex justify-end px-4 items-center h-6">
                    <Link to="/seller">
                        <h5 className="mx-2">Sell on Kemon</h5>
                    </Link>
                    <Link to="/agent">
                        <h5 className="mx-2">Earn on Kemon</h5>
                    </Link>
                </div>
                <div className={``}>
                    <h3>xMart</h3>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Search products, brand and categories"
                    className="border border-gray-400 h-10 pl-4 -ml-5 pr-9 w-4/5 min-w-[290px] rounded-2xl outline-none font-medium "
                />
                <i className="text-lg -ml-8">
                    <FaSearch />
                </i>
            </div>
            <div className="w-[10%] max-w-[20px]">
                <Drawer
                    backdrop={true}
                    open={open}
                    onClose={() => setOpen(false)}
                    placement="left"
                    size="xs"
                >
                    <div className="h-full bg-slate-50">
                        <Drawer.Header className="bg-white shadow mb-4">
                            <div className="w-full flex items-center justify-between px-5">
                                <h5 className="font-black text-2xl ">xMart</h5>

                                <div className="flex items-center text-xl">
                                    <i className="m-2">
                                        <FaShoppingCart />
                                    </i>
                                    <i className="text-red-500 m-2">
                                        <FaHeart />
                                    </i>
                                </div>
                            </div>
                        </Drawer.Header>
                        <div className="overflow-y-auto h-[calc(100%_-_180px)] mb-20">
                            <ul className="bg-white shadow mb-4">
                                <li className="h-14 px-6 border-b flex items-center text-xl text-gray-500">
                                    <i className="pr-3">
                                        <FaHome />
                                    </i>
                                    Home
                                </li>
                                <li className="h-14 px-6 border-b flex items-center text-xl text-gray-500">
                                    <i className="pr-3">
                                        <FaShoppingBasket />
                                    </i>
                                    Orders
                                </li>
                                <li className="h-14 px-6 border-b flex items-center text-xl text-gray-500">
                                    <i className="pr-3">
                                        <FaDumpster />
                                    </i>
                                    Sell
                                </li>
                                <li className="h-14 px-6 border-b flex items-center text-xl text-gray-500">
                                    <i className="pr-3">
                                        <FaRegUser />
                                    </i>
                                    Agent
                                </li>
                            </ul>

                            <div className="shadow w-full mb-4">
                                <Categories />
                            </div>
                            <ul className="bg-white shadow mb-4">
                                <h4 className="font-bold pt-5 text-md text-blue-600 pl-8">
                                    OUR SERVICES
                                </h4>
                                <li className="h-14 px-6 flex items-center text-xl text-gray-500">
                                    <i className="pr-3">
                                        <FaPhone />
                                    </i>
                                    08101889892
                                </li>
                                <li className="h-14 px-6 flex items-center text-xl text-gray-500">
                                    <i className="pr-3">
                                        <FaMailBulk />
                                    </i>
                                    services@xmart.com
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center fixed bottom-0 h-16 w-full bg-white pl-5">
                            <button className="w-28 h-10 rounded-full text-md flex items-center justify-center text-bold text-white mr-5 bg-slate-800 p-0">
                                <i className="mr-2">
                                    <FaUser />
                                </i>{' '}
                                Login
                            </button>
                            <button className="w-28 h-10 rounded-full text-md text-bold text-slate-800 border border-slate-800  hover:bg-slate-100 p-0">
                                Register
                            </button>
                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <>
            <div className="hidden md:block">
                <BigHeader />
            </div>
            <div className="block md:hidden">
                <SmallHeader />
            </div>
        </>
    );
};
export default Header;
