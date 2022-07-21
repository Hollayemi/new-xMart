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
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-scroll';
import { loadChildren } from '../../../state/slices/shop/brands/brands';
// import Footer from '../../../components/websiteCompoents/Footer';

const BeandSearch = () => {
    const param = useParams();
    console.log(param);
    const { cartData } = useSelector((state) => state.reducer.cartedProduct);
    let prodState = ['0'];
    if (cartData.message && cartData.message.length > 0) {
        cartData.message.map((x) => {
            return prodState.push(x.productId);
        });
    }
    let Products = (
        <Loader backdrop speed="fast" content="In few seconds..." vertical />
    );
    Products = myProducts2.message.map((each, index) => {
        return (
            <div key={index} className="w-full flex justify-center w-full mt-1">
                <Product
                    img={each.images[0].image}
                    sellingPrice={each.prodPrice}
                    originalPrice={each.prodPrice}
                    name={each.prodName}
                    styles={'w-full flex justify-center'}
                    myCarts={prodState}
                />
            </div>
        );
    });
    let allSubCategory = loadChildren(param.category);

    let subPage = allSubCategory.map((res, index) => {
        return (
            <section
                key={index}
                className="shadow my-3"
                id={res.label.split(' ').join('-')}
            >
                <div className="flex items-center px-4 md:px-6 h-16 font-[600] bg-white border-b-2 border-slate-800 text-slate-700">
                    {res.label}
                </div>
                <div className="h-[550px] bg-slate-50">
                    <div className="w-full flex justify-center">
                        <div className="w-full mt-3 sm:w-10/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {Products}
                        </div>
                    </div>
                </div>
            </section>
        );
    });

    return (
        <SearchWrapper>
            <div className="flex items-center fixed overflow-auto myScroll-x top-40 md:top-24 z-50 bg-slate-50 ">
                {allSubCategory.map((res, index) => {
                    return (
                        <div
                            key={index}
                            className="border px-2 cursor-pointer py-1 min-w-fit mt-3"
                        >
                            <Link
                                spy="true"
                                smooth="true"
                                to={res.label.split(' ').join('-')}
                            >
                                {res.label}
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="p-1 mt-1 md:mt-4 w-full md:h-[300px] overflow-hidden relative">
                <Slider {...settings}>
                    <MySlickSlide image={websiteImages.slider1} />
                    <MySlickSlide image={websiteImages.slider2} />
                    <MySlickSlide image={websiteImages.slider3} />
                    <MySlickSlide image={websiteImages.slider4} />
                </Slider>
            </div>
            <section className="px-2 md:px-6">{subPage}</section>
        </SearchWrapper>
    );
};

export default BeandSearch;
