import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getProduct } from '../../state/slices/home';
import { Loader } from 'rsuite';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { fakeImages } from './Images';
import { cartHandler } from '../../state/slices/home/cart';
import SigninPop from '../../pages/auth/signin/Pop up';

var settings = {
    infinite: true,
    centerMode: true,
    variableWidth: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
};

const HorizontalDisplay = (props) => {
    const { userId, image, about, tag, slider, reverse, myCarts, products } =
        props;
    let Products = (
        <div className=" w-full h-44 flex justify-center items-center">
            <Loader
                backdrop
                speed="fast"
                content="In few seconds..."
                vertical
            />
        </div>
    );
    if (products.length > 0) {
        Products = products.map((each, index) => {
            return (
                <Product
                    key={index}
                    id={each._id}
                    userId={userId}
                    img={fakeImages['fakeImg' + (index + 1)]}
                    sellingPrice={each.prodPrice}
                    originalPrice={each.prodPrice}
                    name={each.prodName}
                    styles="w-48"
                    nick={each.shopNick}
                    myCarts={myCarts}
                />
            );
        });
    }
    return (
        <div className="bg-white py-4 md:p-4 mt-6 shadow-lg shadow-slate-200 border-t-4 border-slate-800">
            <h2 className="h-16 pl-5 md:pl-20 border-b font-bold text-lg text-black flex items-center justify-between">
                {tag}
                <Link to={`/s/${tag}`}>
                    <button className="h-8 px-3 py-1 text-[15px] border mr-2">
                        EXPLORE
                    </button>
                </Link>
            </h2>
            {slider}
            <div
                className={`flex h-[550px] md:h-[300px] flex-col md:flex-row ${
                    reverse && 'md:flex-row-reverse'
                }`}
            >
                <div className="w-full md:w-80 md:min-w-[320px] h-80 md:h-full relative">
                    <img
                        src={image}
                        alt="imageHere"
                        className="w-full h-full "
                    />
                    <div className="absolute bg-gradient-to-t from-slate-900 to-transparent top-0 left-0 h-full w-full">
                        <div className="flex flex-col items-center absolute w-2/3 pr-2 right-0 md:w-full bottom-6 md:bottom-2 px-2">
                            <h5 className="text-white text-lg font-bold">
                                {about}
                            </h5>
                            <Link to={`/s/${tag}`}>
                                <h5 className="flex items-center justify-center w-28 h-8 mt-3 rounded bg-white text-blue-500 shadow-xl">
                                    Expore
                                </h5>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly mt-1 pl-2 w-full md:w-[calc(100%-320px)]">
                    <div className="w-full relative">
                        <Slider {...settings}>{Products}</Slider>
                    </div>
                    {/* <div className="w-full relative">
                        <Slider {...settings}>{Products}</Slider>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
export default HorizontalDisplay;

export const Product = (prop) => {
    const [openAdd, setOpenAdd] = useState(false);
    const [hideCart, noFunc] = useState();
    const { id, userId, originalPrice, img, name, styles, nick, myCarts } =
        prop;
    const dispatch = useDispatch();
    let payload = {
        body: {
            productId: id,
            userId: userId,
            quantity: 1,
            color: ['As displayed'],
            size: ['As displayed'],
        },
    };
    return (
        <div
            className={`flex flex-col justify-center items-center ${styles} h-56 pb-2 border rounded mx-2 my-1 hover:shadow-lg `}
        >
            <div className="w-40 h-40 min-h-[105px] flex justify-center">
                <img
                    src={img}
                    alt="img_here"
                    className="w-28 h-28 pt-2 rounded-xl"
                />
            </div>
            <div className="w-full px-2">
                <p className="text-[12px] p-0 text-red-400">Ship to Nigeria</p>
                <Link to={`/b/${nick}/${name.split(' ').join('-')}`}>
                    <h5 className="text-md text-slate-800 font-[400] leading-5">
                        {name}
                    </h5>
                </Link>
                <div className="flex items-center">
                    <i className="flex items-center">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                    </i>
                    <h5 className="ml-4 text-[12px]">321 Reviews</h5>
                </div>
                <div className="flex items-center justify-between px-3">
                    <h5 className="font-black text-sm">{originalPrice}</h5>
                    <FaShoppingCart
                        className={`${
                            myCarts.includes(id)
                                ? 'text-yellow-500'
                                : 'text-slate-800'
                        } cursor-pointer`}
                        onClick={() => {
                            if (userId !== 'noId') {
                                cartHandler(payload, dispatch, noFunc);
                            } else {
                                setOpenAdd(!openAdd);
                            }
                        }}
                    />
                </div>
            </div>
            <SigninPop setOpenAdd={setOpenAdd} openAdd={openAdd} />
        </div>
    );
};
