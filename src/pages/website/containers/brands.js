import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchWrapper from '../../../components/websiteCompoents/ReuseableFlex';
import { MySlickSlide, settings } from '../Home';
import { websiteImages } from '../../../components/websiteCompoents/Images';
import { Loader } from 'rsuite';
import { myProducts2 } from '../../../components/SellerComponents/Info/Categories';
import { Product } from '../../../components/websiteCompoents/HorizontalDisplay';
import Footer from '../../../components/websiteCompoents/Footer';

const BeandSearch = () => {
    let Products = (
        <Loader backdrop speed="fast" content="In few seconds..." vertical />
    );
    Products = myProducts2.message.map((each, index) => {
        return (
            <div className="w-full flex justify-center w-full mt-1">
                <Product
                    key={index}
                    img={each.images[0].image}
                    sellingPrice={each.prodPrice}
                    originalPrice={each.prodPrice}
                    name={each.prodName}
                    styles={'w-full flex justify-center'}
                />
            </div>
        );
    });

    return (
        <SearchWrapper>
            <div className="p-1 mt-1 md:mt-4 w-full md:h-[300px] overflow-hidden relative">
                <Slider {...settings}>
                    <MySlickSlide image={websiteImages.slider1} />
                    <MySlickSlide image={websiteImages.slider2} />
                    <MySlickSlide image={websiteImages.slider3} />
                    <MySlickSlide image={websiteImages.slider4} />
                </Slider>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-full mt-3 sm:w-10/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {Products}
                </div>
            </div>
        </SearchWrapper>
    );
};

export default BeandSearch;
