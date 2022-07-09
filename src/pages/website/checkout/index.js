import React, { useState } from 'react';
import {
    FaAddressBook,
    FaAngleDown,
    FaHeart,
    FaLightbulb,
    FaPhoneAlt,
    FaTrash,
    FaUser,
} from 'react-icons/fa';
import myLogo from '../../../assets/images/png/logo_2.png';
import fakeImg1 from '../../../assets/images/png/_supreme4.png';
import fakeImg2 from '../../../assets/images/png/_supreme.png';
import fakeImg3 from '../../../assets/images/png/_supreme3.png';
import ModalPanel from '../../../components/elements/ModalPanel';
import AddressBook from './address';
import { useSelector } from 'react-redux';
import SearchWrapper from '../../../components/websiteCompoents/ReuseableFlex';

const Checkout = () => {
    const [openAdd, setOpenAdd] = useState(false);
    const [address, setAddress] = useState(null);
    const { userData } = useSelector((state) => state.reducer.loginReducer);
    return (
        <SearchWrapper>
            <section>
                <div className="mt-8 md:mt-12 pb-10 mx-2 sm:mx-5 md:flex">
                    {openAdd && (
                        <ModalPanel
                            closeButton={true}
                            title="Address Details"
                            children={
                                <AddressBook
                                    setAddress={setAddress}
                                    userId={userData._id}
                                    setOpenAdd={setOpenAdd}
                                    openAdd={openAdd}
                                />
                            }
                            hasBackdrop={true}
                            keyboard={true}
                            open={openAdd}
                            buttonName="Varify Code"
                            handleClose={() => setOpenAdd(!openAdd)}
                        />
                    )}
                    <div className="w-full md:w-4/6">
                        <div className=" flex bg-slate-50 px-2 flex-col items-center shadow-md rounded-t-md w-full">
                            <h5 className="w-full border-b h-10 px-4 leading-10">
                                Delivery / Pickup Options
                            </h5>
                            <div className="flex flex-col lg:flex-row items-center my-5">
                                <div className="w-full lg:w-6/12 pb-2 border rounded-t-md m-3 ">
                                    <div className="flex px-2 justify-between items-center h-10 py-2 border-b">
                                        <h5>Deliver to me</h5>
                                        <button
                                            onClick={() => setOpenAdd(true)}
                                            className="bg-slate-700 text-white text-xs rounded h-8 w-28 shadow"
                                        >
                                            Change Address
                                        </button>
                                    </div>
                                    <div className="h-40">
                                        <div className="px-2">
                                            <h5 className="flex my-2 items-center">
                                                <FaUser />{' '}
                                                <span className="ml-4">
                                                    {address
                                                        ? address.surname +
                                                          ' ' +
                                                          address.first_name +
                                                          ' ' +
                                                          address.last_name
                                                        : '(No subject)'}
                                                </span>
                                            </h5>
                                            <h5 className="flex my-2 ">
                                                <FaAddressBook className="mt-2" />{' '}
                                                <span className="ml-4">
                                                    {address
                                                        ? address.address
                                                        : '(No subject)'}
                                                </span>
                                            </h5>
                                            <h5 className="flex my-2 items-center">
                                                <FaPhoneAlt />{' '}
                                                <span className="ml-4">
                                                    {address
                                                        ? address.phone_number
                                                        : '(No subject)'}
                                                </span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-6/12 pb-2 border rounded-t-md m-3 ">
                                    <div className="flex px-2 justify-between items-center h-10 py-2 border-b">
                                        <h5>Pick from a store</h5>
                                        <button className="bg-slate-700 flex items-center justify-center text-white text-xs rounded h-8 w-36 shadow">
                                            Get Store Location{' '}
                                            <FaAngleDown className="ml-2" />
                                        </button>
                                    </div>
                                    <div className="w-full h-40 min">
                                        <div className="h-full flex items-center justify-center">
                                            <p className="w-full shadow-md my-2 w-4/5 bg-slate-50 p-2 flex rounded text-left  text-xs">
                                                <FaLightbulb className="mr-3" />{' '}
                                                Let us find you the closest
                                                store you can get you order from{' '}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 flex mt-3 flex-col items-center shadow-md rounded-t-md w-full">
                            <h5 className="w-full border-b h-10 px-4 leading-10">
                                Review Order
                            </h5>
                            <div className="w-full flex items-center bg-slate-700 text-white h-8 px-4 font-[300]">
                                <h5 className="w-3/6 ">Delivery</h5>
                                <h5 className="w-1/6 hidden lg:block">
                                    Quantity
                                </h5>
                                <h5 className="w-1/6 hidden lg:block">Price</h5>
                                <h5 className="w-1/6 hidden lg:block">
                                    Action
                                </h5>
                            </div>
                            <div className="w-full pb-2 rounded-t-md m-3 ">
                                <MyCheckoutItem
                                    image={fakeImg1}
                                    name="Arduino Uno Micro-controller Plus Usb Cabl..."
                                    F_qty={2}
                                    amount={5000}
                                    company={'Kemom'}
                                />
                                <MyCheckoutItem
                                    image={fakeImg2}
                                    name="Arduino Uno Micro-controller Plus Usb Cabl..."
                                    F_qty={2}
                                    amount={5000}
                                    company={'Kemom'}
                                />
                                <MyCheckoutItem
                                    image={fakeImg3}
                                    name="Arduino Uno Micro-controller Plus Usb Cabl..."
                                    F_qty={2}
                                    amount={5000}
                                    company={'Kemom'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/6 mt-6 md:mt-0 md:pl-5">
                        <div className="w-full rounded-t-md bg-slate-50 shadow-md">
                            <h4 className="w-full flex justify-btween items-center px-4 text-md font-bold h-10 leading-10 border-b">
                                Order Summary
                                <span className="px-2 ml-5 h-6 leading-6 rounded shadow bg-slate-100">
                                    3 items
                                </span>
                            </h4>
                            <div>
                                <h5 className="flex my-2 items-center justify-between px-5 h-10 border-b border-dotted">
                                    Subtotal{' '}
                                    <span className="font-bold">
                                        &#x20A6;5000
                                    </span>
                                </h5>
                                <h5 className="flex my-2 items-center justify-between px-5 h-10 border-b-2 border-slate-800 border-dotted">
                                    Shipping amount{' '}
                                    <span className="font-bold">
                                        &#x20A6;500
                                    </span>
                                </h5>
                                <h5 className="flex my-2 items-center justify-between px-5 h-10">
                                    Total{' '}
                                    <span className="font-bold">
                                        &#x20A6;5600
                                    </span>
                                </h5>
                            </div>
                        </div>

                        <div className="w-full mt-5 rounded-t-md bg-slate-50 shadow-md">
                            <h4 className="w-full flex justify-btween items-center px-4 text-md font-bold h-10 leading-10 border-b">
                                Delivery options
                            </h4>
                            <div>
                                <></>
                                <div className="p-2 mt-9">
                                    <button className="bg-green-700 text-white w-full h-10 rounded-md shadow ">
                                        Pay Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SearchWrapper>
    );
};

export default Checkout;

export const MyCheckoutItem = ({ image, name, F_qty, amount, company }) => {
    const [qty, setQty] = useState(F_qty);
    return (
        <div className="w-full py-6 text-slate-900 flex flex-col lg:flex-row items-center border-b">
            <div className="flex items-center w-full lg:w-3/6 px-2">
                <div className="w-20 h-16 md:w-36 md:h-36 lg:h-28 flex justify-center items-center">
                    <img
                        src={image}
                        className="w-full h-full max-h-fit"
                        alt="my images"
                    />
                </div>
                <div className="ml-3">
                    <h5 className="font-[500] text-lg">{name}</h5>
                    <div>
                        <div className="flex mb-4 md:mb-0 mt-2 px-3 w-28 max-w-fit tracking-wide text-xs items-center bg-slate-200 rounded-sm px-1 shadow-md">
                            <h5>sold by:</h5>
                            <span className="pl-1 ">{company}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-3/6 flex flex-col md:flex-row md:items-center">
                <div className="w-2/3 flex pl-3 mt-3 md:mt-0 items-center">
                    <div className="w-1/2">
                        <div className=" flex items-center bg-slate-100 tracking-widest w-24 font-bold text-gay-100 text-lg max-w-fit px-2 rounded-md shadow-md border border-ray-400">
                            <h5 className="w-8 min-w-6">{qty}</h5>
                            <div className="flex flex-col items-center ml-2">
                                <h5
                                    onClick={() =>
                                        setQty(qty > 1 ? qty - 1 : qty)
                                    }
                                    className="cursor-pointer"
                                >
                                    -
                                </h5>
                                <h5
                                    className="cursor-pointer"
                                    onClick={() => setQty(qty + 1)}
                                >
                                    +
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h5 className="font-bold tracking-wildest text-lg">
                            &#x20A6;{amount}
                        </h5>
                    </div>
                </div>
                <div className="w-full md:w-1/3 flex items-center justify-center mt-3 md:mt-0 md:flex-col">
                    <h5 className="flex items-center ">
                        <FaTrash />
                        <span className="ml-2 cursor-pointer">Remove</span>
                    </h5>
                    <h5 className="flex items-center ">
                        <FaHeart className="ml-4 md:ml-0" />
                        <span className="ml-2 cursor-pointer">
                            Move to List
                        </span>
                    </h5>
                </div>
            </div>
        </div>
    );
};
