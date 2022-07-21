import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { websiteImages } from '../../components/websiteCompoents/Images';
import Categories from '../../components/websiteCompoents/Categories';
import SearchWrapper from '../../components/websiteCompoents/ReuseableFlex';
import HorizontalDisplay from '../../components/websiteCompoents/HorizontalDisplay';
import { ShopsBlock } from '../../components/websiteCompoents/HorizontalShops';
import { FaTimes } from 'react-icons/fa';
import { loadChildren } from '../../state/slices/shop/brands/brands';
import { Link } from 'react-router-dom';
import { catIcons } from '../../components/SellerComponents/Info/categoriesIcon';
import { HomeDisplay } from '../../components/SellerComponents/Info/Categories';
import { useSelector } from 'react-redux';

export const MySlickSlide = ({ image, h }) => {
    return (
        <div className="w-full">
            <img src={image} alt="img_hwew" className={`w-full h-${h}`} />
        </div>
    );
};
export var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
};
export var settings2 = {
    infinite: true,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1100,
    pauseOnHover: true,
};

const Home = () => {
    const [expandCate, setCategory] = useState('');
    const getFromCate = loadChildren(expandCate);
    const { userData } = useSelector((state) => state.reducer.loginReducer);
    const { cartData } = useSelector((state) => state.reducer.cartedProduct);
    let prodState = ['0'];
    if (cartData.message && cartData.message.length > 0) {
        cartData.message.map((x) => {
            return prodState.push(x.productId);
        });
    }
    const HomePreview = HomeDisplay.map((res, index) => {
        return (
            <HorizontalDisplay
                myCarts={prodState}
                tag={res.name}
                key={index}
                about={res.about}
                image={res.image}
                slider={res.slider}
                userId={(userData && userData._id) || 'noId'}
            />
        );
    });

    return (
        <SearchWrapper>
            <div className="flex justify-center md:mt-6">
                <div className="flex w-full lg:w-11/12 md:mx-4 bg-white max-h-[400px]">
                    <div className=" hidden md:block w-80 min-w-[240px] mx-2 rounded-md">
                        <div className="shadow-md shadow-slate-200 h-full">
                            <Categories
                                setCategory={setCategory}
                                expandCate={expandCate}
                            />
                        </div>
                    </div>
                    <div className="p-1 w-full md:w-[calc(100%-280px)] relative">
                        <Slider {...settings}>
                            <MySlickSlide
                                h="auto"
                                image={websiteImages.slider1}
                            />
                            <MySlickSlide
                                h="auto"
                                image={websiteImages.slider2}
                            />
                            <MySlickSlide
                                h="auto"
                                image={websiteImages.slider3}
                            />
                            <MySlickSlide
                                h="auto"
                                image={websiteImages.slider4}
                            />
                            <MySlickSlide
                                h="auto"
                                image={websiteImages.slider5}
                            />
                            <MySlickSlide
                                h="auto"
                                image={websiteImages.slider6}
                            />
                        </Slider>
                        <Slider {...settings2}>
                            {catIcons.map((res, index) => {
                                return (
                                    <div
                                        className="w-40 p-1 px-4 text-black 
                                        hover:text-blue-600 text-center flex flex-col 
                                        justify-center items-center bg-gray-100"
                                        key={index}
                                    >
                                        <img
                                            src={res[0]}
                                            alt="icon"
                                            width={70}
                                        />
                                        <p>{res[1]}</p>
                                    </div>
                                );
                            })}
                        </Slider>
                        {expandCate.length > 0 && (
                            <div className="absolute top-0 left-0 w-full h-full opacity-95 bg-slate-200">
                                <div className="w-full h-8 bg-slate-800 text-white font-bold text-md px-8 leading-8 flex justify-between items-center">
                                    <h5>{expandCate}</h5>
                                    <i
                                        className="cursor-pointer hover:text-red-500"
                                        onClick={() => setCategory('')}
                                    >
                                        <FaTimes />
                                    </i>
                                </div>
                                <div className="h-full flex flex-col pb-10 flex-wrap items-start">
                                    {getFromCate.map((res, index) => {
                                        return (
                                            <Link to="/">
                                                <div
                                                    className="w-40 p-1 px-4 max-w-40 text-black hover:text-blue-600"
                                                    key={index}
                                                >
                                                    <h5>{res.value}</h5>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                    <div>
                                        <img
                                            src={websiteImages.Image2}
                                            alt="imag"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-9">
                <div className="w-full px-1 md:w-11/12">
                    <div className="bg-white py-4 md:p-4 shadow-lg border-t-4 border-slate-800">
                        <h2 className="h-16 pl-5 md:pl-20 border-b font-bold text-lg">
                            Verified Shops
                        </h2>
                        <ShopsBlock />
                    </div>
                    {HomePreview}
                </div>
            </div>
        </SearchWrapper>
    );
};

export default Home;
