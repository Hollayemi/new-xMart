import React from 'react';
import { Badge, Drawer, Dropdown, Input, InputGroup } from 'rsuite';
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
import Categories from './Categories';
import { Link } from 'react-router-dom';
import myLogo from '../../assets/images/png/logo2x.png';

export const BigHeader = ({ top, raise, sideBarState, cartItems }) => {
    return (
        <div
            className={`container-fluid fixed top-0 z-50 w-full top-0 bg-slate-700 shadow-sm h-28`}
        >
            <div className="flex justify-between py-2 border-b border-slate-600 px-10 text-white items-center h-12">
                <Link to="/">
                    <div className="hidden md:block">
                        <img src={myLogo} alt="logo" width={80} />
                    </div>
                </Link>
                <div className="flex items-center justify-end">
                    <Link to="/seller">
                        <h5 className="mx-2">Sell on Kemon</h5>
                    </Link>
                    <Link to="/agent">
                        <h5 className="mx-2">Earn on Kemon</h5>
                    </Link>
                </div>
            </div>
            <div
                className={`flex flex-col md:flex-row fixed md:relative bg-white md:bg-transparent h-full md:h-auto w-3/4 
                sm:w-2/3 md:w-full md:left-0 top-0 shadow-lg md:shadow-none sm:px- md:justify-evenly md:items-center ${
                    sideBarState ? 'left-0' : '-left-3/4 sm:-left-2/3 py-2'
                }`}
            >
                <div className="flex items-center justify-evenly md:w-5/6 lg:w-4/5">
                    <div className="w-1/2 min-w-[290px] mx-4">
                        <InputGroup inside>
                            <Input placeholder="Search products, brand and categories" />
                            <InputGroup.Button>
                                <FaSearch />
                            </InputGroup.Button>
                        </InputGroup>
                    </div>
                    <div className="flex items-center justify-between text-white">
                        <Link to="/seller">
                            <div className="flex items-center mx-1 cursor-pointer hover:bg-gray-200 h-10 w-24 justify-center rounded-md">
                                <i className="text-lg">
                                    <FaDumpster />
                                </i>
                                <h5 className="mx-2 hiden lg:block">Sell</h5>
                            </div>
                        </Link>
                        <Link to="/agent">
                            <div className="flex items-center mx-1 cursor-pointer hover:bg-gray-200 h-10 w-24 justify-center rounded-md">
                                <i className="text-lg">
                                    <FaUserTag />
                                </i>
                                <h5 className="mx-2 hiden lg:block">Agent</h5>
                            </div>
                        </Link>
                        <Dropdown
                            size="md"
                            title={
                                <div className="flex items-center text-white hover:text-slate-600 h-full w-full mx-3">
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
                            {cartItems.length < 1 ? (
                                <div className="w-full h-16 flex text-xs text-gray-400 items-center justify-center">
                                    <i className="text-sm">
                                        <FaInfoCircle />
                                    </i>
                                    <h5 className="mx-2">
                                        No Item In Your Cart
                                    </h5>
                                </div>
                            ) : (
                                cartItems.map((res, index) => {
                                    return <div key={index}>{res}</div>;
                                })
                            )}

                            <div className="flex items-center items-center py-3 px-5 border-t">
                                <Link to="/cart">
                                    <button className="w-60 h-8 text-white rounded-md bg-slate-600 hover:bg-slate-700 shadow-lg">
                                        View My Cart
                                    </button>
                                </Link>
                            </div>
                        </Dropdown>
                        <Dropdown
                            size="md"
                            title={
                                <div className="flex items-center text-white hover:text-slate-600 mx-3">
                                    <i className="text-lg">
                                        <FaRegUser />
                                    </i>
                                    <h5 className="mx-2 ">Account</h5>
                                </div>
                            }
                        >
                            <div className="flex items-center mx-3 w-full h-10 text-slate-500 hover:text-slate-900 cursor-pointer font-semibold">
                                <i className="text-lg">
                                    <FaAddressCard />
                                </i>
                                <h5 className="mx-2 text-md ml-5 cursor-pointer">
                                    Orders
                                </h5>
                            </div>
                            <div className="flex items-center mx-3 w-full h-10 text-slate-500 hover:text-slate-900 cursor-pointer font-semibold">
                                <i className="text-lg">
                                    <FaLaptopCode />
                                </i>
                                <h5 className="mx-2 text-md ml-5 cursor-pointer">
                                    Coupons
                                </h5>
                            </div>
                            <div className="flex items-center mx-3 w-full h-10 text-slate-500 hover:text-slate-900 cursor-pointer font-semibold">
                                <i className="text-lg">
                                    <FaHeart />
                                </i>
                                <h5 className="mx-2 text-md ml-5 cursor-pointer">
                                    Wishlist
                                </h5>
                            </div>
                            <div className="flex items-center items-center py-3 px-5 border-t">
                                <Link to="/signin">
                                    <button className="w-40 h-8 text-white rounded-md bg-slate-600 hover:bg-slate-700 shadow-lg text-md">
                                        SIGN IN / SIGN UP
                                    </button>
                                </Link>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SmallHeader = ({ expandCate, setCategory, open, setOpen }) => {
    return (
        <div className="bg-slate-800 pb-2">
            <div className="flex justify-end px-4 text-slate-300 border-b border-slate-700 py-2 items-center h-6">
                <Link to="/seller">
                    <h5 className="mx-2">Sell on Kemon</h5>
                </Link>
                <Link to="/agent">
                    <h5 className="mx-2">Earn on Kemon</h5>
                </Link>
            </div>
            <div
                className={`block md:hidden sticky top-0 flex justify-between items-center py-1  px-4 sm:px-10 w-full`}
            >
                <div>
                    <i
                        className={`text-2xl text-slate-400`}
                        onClick={() => setOpen(!open)}
                    >
                        {!open ? <FaBars /> : <FaTimes />}
                    </i>
                </div>
                <div className={``}>
                    <img src={myLogo} alt="logo" width={80} />
                    {/* <h3 className="font-bold text-xl text-slate-400">xMart</h3> */}
                </div>
            </div>
            <div className="flex items-center sticky top justify-center mt-6 mb-3">
                <input
                    type="text"
                    placeholder="Search products, brand and categories"
                    className="border border-gray-400 h-10 pl-4 -ml-5 pr-9 w-4/5 min-w-[290px] rounded-2xl outline-none font-medium "
                />
                <i className="text-lg -ml-8 ">
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

                                <div className="flex items-center text-[30px] w-20 justify-between">
                                    <Link to="/cart">
                                        <Badge content={3}>
                                            <i className="">
                                                <FaShoppingCart />
                                            </i>
                                        </Badge>
                                    </Link>
                                    <Link to="/wishList">
                                        <Badge content={3}>
                                            <i className="text-blue-500">
                                                <FaHeart />
                                            </i>
                                        </Badge>
                                    </Link>
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
                                <Link to="/checkout">
                                    <li className="h-14 px-6 border-b flex items-center text-xl text-gray-500">
                                        <i className="pr-3">
                                            <FaShoppingBasket />
                                        </i>
                                        Orders
                                    </li>
                                </Link>
                                <Link to="/seller">
                                    <li className="h-14 px-6 border-b flex items-center text-xl text-gray-500">
                                        <i className="pr-3">
                                            <FaDumpster />
                                        </i>
                                        Sell
                                    </li>
                                </Link>
                                <Link to="/agent">
                                    <li className="h-14 px-6 border-b flex items-center text-xl text-gray-500">
                                        <i className="pr-3">
                                            <FaRegUser />
                                        </i>
                                        Agent
                                    </li>
                                </Link>
                            </ul>

                            <div className="shadow w-full mb-4">
                                <Categories
                                    setCategory={setCategory}
                                    expandCate={expandCate}
                                    setOpen={setOpen}
                                />
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
                            <Link to="/signin">
                                <button className="w-28 h-10 rounded-full text-md flex items-center justify-center text-bold text-white mr-5 bg-slate-800 p-0">
                                    <i className="mr-2">
                                        <FaUser />
                                    </i>{' '}
                                    Login
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="w-28 h-10 rounded-full text-md text-bold text-slate-800 border border-slate-800  hover:bg-slate-100 p-0">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

const Header = ({ expandCate, setCategory, setOpen, open, cartItems }) => {
    return (
        <>
            <div className="hidden md:block">
                <BigHeader cartItems={cartItems} />
            </div>
            <div className="block md:hidden">
                <SmallHeader
                    expandCate={expandCate}
                    setCategory={setCategory}
                    open={open}
                    setOpen={setOpen}
                />
            </div>
        </>
    );
};
export default Header;
