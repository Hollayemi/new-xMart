import React, { useEffect, useState } from 'react';
import { Badge, Loader } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';
import {
    FaAngleLeft,
    FaCartArrowDown,
    FaCartPlus,
    FaShoppingCart,
    FaTimes,
} from 'react-icons/fa';
import fakeImg6 from '../../../assets/images/png/_supreme5.png';
import fakeImg1 from '../../../assets/images/png/_supreme4.png';
import fakeImg2 from '../../../assets/images/png/_supreme.png';
import fakeImg3 from '../../../assets/images/png/_supreme3.png';
import { cartHandler } from '../../../state/slices/home/cart';
import { FetchSingle } from '../../../state/slices/home/cart/fetchCart';
import { Link } from 'react-router-dom';

const ProductsContainer = () => {
    const [qty, setQty] = useState(10);
    const [image, setImage] = useState(fakeImg6);
    const [prodState, SetProdState] = useState([]);
    const [hideCart, setHideCart] = useState('hidden');

    const dispatch = useDispatch();
    const payload = {
        body: {
            productId: 'ksjdsjldsdljljsljld',
            userId: 'msdns;lkd;kd;skdm',
        },
    };
    useEffect(() => {
        FetchSingle(payload, dispatch, SetProdState);
    }, []);
    const myCartProduct = useSelector((state) => state.reducer.cartedProduct);
    const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XS'];
    const chosenSize = ['S', 'L', 'XL', 'XS'];
    const colors = ['blue', 'green', 'rose', 'red', 'slate'];
    return (
        <section className="min-h-[100vh] bg-slate-90 pb-16 md:pb-0 w-full flex items-center justify-center">
            <div className="fixed z-50 border-b bg-slate-900 border-slate-800 flex items-center justify-between px-5 md:px-10 py-2 top-0 left-0 w-full h-14">
                <i className="w-10 text-xl h-10 cursor-pointer hover:text-slate-500 md:hover:bg-slate-700  rounded-full flex items-center justify-center md:border md:border-slate-600 bg-slate-800">
                    <FaAngleLeft />
                </i>
                <div className="h-10 flex items-center">
                    <h5 className="mr-12 flex items-center">
                        <Badge content={3}>
                            <i className="text-2xl text-slate-100">
                                <FaShoppingCart />
                            </i>
                        </Badge>
                    </h5>
                    <img
                        src={fakeImg1}
                        alt="profile"
                        className="h-10 w-10 rounded-full"
                    />
                </div>
            </div>
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
                    <h5 className="text-2xl md:text-4xl font-[1000] text-slate-500">
                        iPhone 13 pro max
                    </h5>
                    <div className="flex items-center text-slate-500 my-2 text-[16px]">
                        <h5 className="font-thin text-slate-500">By:</h5>
                        <h5 className="font-black ml-4 ">Kemon-market</h5>
                    </div>
                    <div className="my-6 flex items-center">
                        <h5 className="bg-slate-600 tracking-widest w-18 font-bold text-gray-100 text-lg max-w-fit p-1 px-2 rounded-md shadow-md border border-gray-400 ">
                            &#x20A6;2000
                        </h5>
                        <div className="flex flex-col ml-4">
                            <h5 className="text-lg font-bold text-blue-300">
                                Save 12%
                            </h5>
                            <h5 className="text-sm text-slate-400">
                                Inclusive of all Taxes
                            </h5>
                        </div>
                    </div>
                    <p className="text-md my-6 text-slate-600 w-full md:w-4/5">
                        Most Recent List Of Customers Most Recent List Of
                        Customers Most Recent List Of Customers Most Recent List
                        Of Customers
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
                        <div className="relative">
                            <div
                                onClick={() =>
                                    cartHandler(
                                        payload,
                                        dispatch,
                                        SetProdState,
                                        setHideCart
                                    )
                                }
                                className="px-2 border cursor-pointer flex justify-center border-slate-200 ml-3 rounded-md shadow-md w-52 h-12 flex items-center"
                            >
                                {myCartProduct.status !== 'PENDING' ? (
                                    <>
                                        <h5 className="text-lg text-slate-500">
                                            {!prodState.includes(
                                                payload.body.productId
                                            )
                                                ? 'Add to cart'
                                                : 'Remove from cart'}
                                        </h5>
                                        {!prodState.includes(
                                            payload.body.productId
                                        ) ? (
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
                                                    payload.body.productId
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
                                        3
                                    </span>
                                </h5>
                                <div className="h-44 pb-10 myScroll overflow-auto">
                                    <MyCartPreView
                                        name="iPhone 13 pro max"
                                        image={fakeImg3}
                                        qty={5}
                                        price={4000}
                                    />
                                    <MyCartPreView
                                        name="iPhone Charger"
                                        image={fakeImg2}
                                        qty={12}
                                        price={1000}
                                    />
                                    <MyCartPreView
                                        name="Oraimo mp3"
                                        image={fakeImg1}
                                        qty={3}
                                        price={20000}
                                    />
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
        </section>
    );
};

export default ProductsContainer;

export const MyCartPreView = ({ image, name, qty, price }) => {
    return (
        <div className="w-full my-6 text-slate-900">
            <div className="flex items-center px-2">
                <div className="w-12 h-12 flex justify-center items-center hover:border-green-600 cursor-pointer border-slate-700 mx-2 rounded-md bg-slate-800 border">
                    <img
                        src={image}
                        className="w-10 h-10 max-h-fit"
                        alt="my images"
                    />
                </div>
                <div className="flex w-full justify-between items-center">
                    <div>
                        <h5 className="font-semibold">{name}</h5>
                        <div>
                            <div className="flex w-12 tracking-wide text-xs items-center bg-slate-200 rounded-sm px-1 shadow-md">
                                <h5>Qty:</h5>
                                <span className="pl-1 pr-2">{qty}</span>
                            </div>
                        </div>
                    </div>
                    <p>&#x20A6;{price}</p>
                </div>
            </div>
        </div>
    );
};

const SizeBtn = ({ size, disable }) => {
    return (
        <div className="p-1">
            {disable ? (
                <button
                    disabled
                    className="w-12 h-10 rounded bg-slate-200 text-slate-500 border"
                >
                    {size}
                </button>
            ) : (
                <button className="w-12 hover:-mt-4 h-10 rounded bg-slate-500 text-slate-100 border">
                    {size}
                </button>
            )}
        </div>
    );
};

const ColorBtn = ({ color }) => {
    return (
        <div className="p-1">
            <div
                className={`w-8 h-8 rounded bg-${color}-600 text-slate-100 border`}
            ></div>
        </div>
    );
};

const PreviewImg = ({ setImage, image }) => {
    return (
        <div className="w-12 h-12 flex justify-center items-center hover:border-green-600 cursor-pointer border-slate-200 mx-2 rounded-md bg-slate-200 border">
            <img
                src={image}
                className="w-10 h-10 max-h-fit"
                alt="my images"
                onClick={() => setImage(image)}
            />
        </div>
    );
};
