import React, { useEffect, useState } from 'react';
import { FaCartArrowDown, FaCartPlus, FaTimes } from 'react-icons/fa';
import fakeImg1 from '../../../../assets/images/png/_supreme4.png';
import fakeImg2 from '../../../../assets/images/png/_supreme.png';
import fakeImg3 from '../../../../assets/images/png/_supreme3.png';
import { cartHandler } from '../../../../state/slices/home/cart';
import fakeImg6 from '../../../../assets/images/png/_supreme5.png';
import { ColorBtn, MyCartPreView, PreviewImg, SizeBtn } from './components';
import { Loader } from 'rsuite';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    getOnebyId,
    getOneProductHandler,
} from '../../../../state/slices/home';
import { unwrapResult } from '@reduxjs/toolkit';

export const ProductDisplay = ({
    productInfo,
    chosenSize,
    payload,
    status,
    prodState,
}) => {
    const [qty, setQty] = useState(10);
    const [image, setImage] = useState(fakeImg6);
    const [hideCart, setHideCart] = useState('hidden');
    const [openAdd, setOpenAdd] = useState(false);
    const [myCarts, setAllCarts] = useState([]);
    const dispatch = useDispatch();

    let allCart = [];
    const getMyCartFunc = () => {
        if (allCart.length === 0) {
            prodState.map((res) => {
                console.log(res);
                getOnebyId(dispatch, res)
                    .then(unwrapResult)
                    .then((res) => {
                        console.log(res.message[0]);
                        allCart.push(res.message[0]);
                    });
            });
            console.log(allCart);
        }
    };

    console.log(allCart);

    const colors = ['blue', 'green', 'rose', 'red', 'slate'];
    const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XS'];
    return (
        <div className="flex md:flex-row flex-col md:w-full px-2 sm:px-6 md:px-2 z-40 relative lg:w-11/12">
            <div className=" w-full md:w-3/5 h-[50vh] md:h-[70vh] mt-20 md:mt-0">
                <div className=" w-full h-full border-slate-300 overflow-hidden shadow rounded-2xl bg-slate-200 border flex items-center justify-center">
                    <img
                        src={image}
                        className="w-72 h-68 max-h-fit"
                        alt="my images"
                    />
                </div>
                <div className="w-full flex justify-center items-center py-3">
                    <PreviewImg setImage={setImage} image={fakeImg1} />
                    <PreviewImg setImage={setImage} image={fakeImg2} />
                    <PreviewImg setImage={setImage} image={fakeImg3} />
                </div>
            </div>
            <div className="w-full md:w-2/5 lg:m-3 md:pl-4 lg:pl-10 px-3 h-full mt-20 md:mt-0">
                <h5 className="text-2xl md:text-2xl font-[1000] text-slate-500">
                    {productInfo[0] && productInfo[0].prodName}
                </h5>
                <div className="flex items-center text-slate-500 my-2 text-[16px]">
                    <h5 className="font-thin text-slate-500">By:</h5>
                    <h5 className="font-black ml-4 ">
                        {productInfo[0] && productInfo[0].shopName}
                    </h5>
                </div>
                <div className="my-6 flex items-center">
                    <h5 className="bg-slate-600 tracking-widest w-18 font-bold text-gray-100 text-md max-w-fit p-1 px-2 rounded-md shadow-md border border-gray-400 ">
                        &#x20A6;{productInfo[0] && productInfo[0].prodPrice}
                    </h5>
                    <div className="flex flex-col ml-4">
                        <h5 className="text-sm font-bold text-blue-300">
                            Save 12%
                        </h5>
                        <h5 className="text-sm text-slate-400">
                            Inclusive of all Taxes
                        </h5>
                    </div>
                </div>
                <p className="text-md my-6 text-slate-600 w-full md:w-4/5">
                    Most Recent List Of Customers Most Recent List Of Customers
                    Most Recent List Of Customers Most Recent List Of Customers
                </p>
                <h4>Sizes available</h4>
                <div className="flex">
                    {sizes.map((res, index) => {
                        if (chosenSize.includes(res)) {
                            return (
                                <SizeBtn
                                    key={index}
                                    disable={false}
                                    size={res}
                                />
                            );
                        } else {
                            return (
                                <SizeBtn
                                    key={index}
                                    disable={true}
                                    size={res}
                                />
                            );
                        }
                    })}
                </div>
                <h4 className="mt-4">Colors available</h4>
                <div className="flex">
                    {colors.map((res, index) => {
                        return <ColorBtn key={index} color={res} />;
                    })}
                </div>
                <div className="flex items-center mt-10">
                    <div className=" flex items-center bg-slate-600 tracking-widest w-18 font-bold text-gray-100 text-lg max-w-fit px-2 rounded-md shadow-md border border-gray-400">
                        <h5 className="w-8 min-w-6">{qty}</h5>
                        <div className="flex flex-col items-center ml-3">
                            <h5
                                onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
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
                    <div className="relative">
                        <div
                            onClick={() => {
                                if (payload.body.userId !== 'noId') {
                                    cartHandler(payload, dispatch, setHideCart);
                                    getMyCartFunc();
                                } else {
                                    setOpenAdd(!openAdd);
                                }
                            }}
                            className="px-2 border cursor-pointer flex justify-center border-slate-200 ml-3 rounded-md shadow-md w-52 h-12 flex items-center"
                        >
                            {status !== 'PENDING' ? (
                                <>
                                    <h5 className="text-lg text-slate-500">
                                        {!prodState.includes(productInfo[0]._id)
                                            ? 'Add to cart'
                                            : 'Remove from cart'}
                                    </h5>
                                    {!prodState.includes(productInfo[0]._id) ? (
                                        <FaCartPlus className="w-xl text-xl ml-2" />
                                    ) : (
                                        <FaCartArrowDown className="w-xl text-xl ml-2" />
                                    )}
                                </>
                            ) : (
                                <div className="h-12 w-full flex items-center justify-center">
                                    <Loader
                                        speed="fast"
                                        content={
                                            !prodState.includes(
                                                productInfo[0]._id
                                            )
                                                ? 'Adding...'
                                                : 'Removing'
                                        }
                                    />
                                </div>
                            )}
                        </div>
                        <div
                            className={`w-60 md:w-76 absolute ${hideCart} -top-56 -left-4 border-blue-100 border rounded-t-md shadow-md bg-white`}
                        >
                            <i
                                onClick={() => setHideCart('hidden')}
                                className="absolute top-1 right-1 cursor-pointer"
                            >
                                <FaTimes />
                            </i>
                            <h5 className="text-slate-900 text-[13px] font-medium flex mx-3 my-2 items-center">
                                Your cart{' '}
                                <span className="w-5 h-5 rounded-full ml-2 font-bold flex items-center justify-center bg-slate-200">
                                    {prodState.length}
                                </span>
                            </h5>
                            <div className="h-44 pb-10 myScroll overflow-auto">
                                {prodState.length > 0 ? (
                                    prodState.map((res) => {
                                        console.log(res);
                                        return getOnebyId(dispatch, res)
                                            .then(unwrapResult)
                                            .then((res) => {
                                                console.log(res);
                                                <MyCartPreView
                                                    name={res.message.prodName}
                                                    image={fakeImg2}
                                                    qty={12}
                                                    price={
                                                        res.message.prodPrice
                                                    }
                                                />;
                                            });
                                    })
                                ) : (
                                    <div className="text-xs text-slate-500">
                                        Your cart is empyt
                                    </div>
                                )}
                            </div>
                            <div className="flex absolute bg-white py-3 shadow bottom-0 w-full items-center justify-between px-4">
                                <Link to="/cart">
                                    <button className="w-24 h-7 border-slate-400 border rounded text-sm font-semi">
                                        View Cart
                                    </button>
                                </Link>
                                <Link to="/checkout">
                                    <button className="w-24 h-7 bg-slate-700 text-white  rounded text-sm font-semi">
                                        Checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
