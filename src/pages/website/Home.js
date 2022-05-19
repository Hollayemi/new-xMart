import React from 'react';
import Carousel from 'rsuite/Carousel';
import { websiteImages } from '../../components/websiteCompoents/Images';
import Categories from '../../components/websiteCompoents/Categories';
import SearchWrapper from '../../components/websiteCompoents/ReuseableFlex';
import HorizontalDisplay from '../../components/websiteCompoents/HorizontalDisplay';
import { ShopsBlock } from '../../components/websiteCompoents/HorizontalShops';

const Home = () => {
    //
    // const handleScroll = () => {
    //     const position = window.pageYOffset;
    //     // setRaise(position);
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, { passive: true });

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <SearchWrapper>
            <div className="flex justify-center mt-5">
                <div className="flex w-full mx-0.5 lg:w-11/12 md:mx-4 bg-white max-h-[400px]">
                    <div className=" hidden md:block w-80 min-w-[240px] mx-2 rounded-md">
                        <div className="shadow-md shadow-slate-200 h-full">
                            <Categories />
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden w-full md:w-auto h-[400px] md:h-full relative">
                        <Carousel
                            shape="bar"
                            autoplay
                            className="custom-slider h-full"
                        >
                            <img
                                src={websiteImages.Image1}
                                height="250"
                                alt="img_hwew"
                            />
                            <img
                                src={websiteImages.Image2}
                                height="250"
                                alt="imageHere"
                            />
                            <img
                                src={websiteImages.Image3}
                                height="250"
                                alt="imageHere"
                            />
                        </Carousel>
                        <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center">
                            <div className=" w-full mx-2 md:w-5/6 md:py-0 flex flex-col items-center">
                                <h4 className="text-white text-lg w-5/6 text-center md:text-2xl font-bold mb-5">
                                    Search for products & find verified sellers
                                    near you
                                </h4>
                                <div className="flex w-full justify-center">
                                    <input
                                        type="text"
                                        placeholder="Search products, brand and categories"
                                        className="border text-[14px] border-gray-400 h-10 pl-4 w-4/5 min-w-[200px] max-w-[470px] rounded-l outline-none font-medium "
                                    />
                                    <select
                                        name="cars"
                                        className="border border-gray-400 font-semibold rounded-r-lg md:w-32 text-sm -ml-2 lg:px-3 focus:outline-none"
                                    >
                                        <option value="worship">Brand</option>
                                        <option value="Praise">
                                            Praise Jam
                                        </option>
                                        <option value="Chant">Chant</option>
                                        <option value="Instrumental">
                                            Instrumental
                                        </option>
                                        <option value="Message">Message</option>
                                    </select>
                                </div>
                                <button className="mt-3 bg-blue-800 w-48 h-10 px-5 text-white rounded shadow-xl">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <div className="w-full px-1 md:w-11/12">
                    <div className="bg-white py-4 md:p-4 shadow-lg border-t-4 border-slate-800">
                        <h2 className="h-16 pl-5 md:pl-20 border-b font-bold text-lg">
                            Verified Shops
                        </h2>
                        <ShopsBlock />
                    </div>

                    <HorizontalDisplay image={websiteImages.Image2} />

                    <HorizontalDisplay image={websiteImages.Image3} />
                    <HorizontalDisplay image={websiteImages.Image1} />
                </div>
            </div>
        </SearchWrapper>
    );
};

export default Home;
