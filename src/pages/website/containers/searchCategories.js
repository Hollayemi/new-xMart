import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchWrapper from '../../../components/websiteCompoents/ReuseableFlex';
import { MySlickSlide, settings } from '../Home';
import { websiteImages } from '../../../components/websiteCompoents/Images';
import { Loader } from 'rsuite';
import { Product } from '../../../components/websiteCompoents/HorizontalDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import SigninPop from '../../auth/signin/Pop up';
import { fetchByQuery } from '../../../state/slices/home/search/byQuery';

const BeandSearch = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const [Category, setCategories] = useState([]);
    const [openAdd, setOpenAdd] = useState(false);
    //
    const { userData } = useSelector((state) => state.reducer.loginReducer);
    const { cartData } = useSelector((state) => state.reducer.cartedProduct);
    let prodState = ['0'];
    if (cartData && cartData.message && cartData.message.length > 0) {
        cartData.message.map((x) => {
            return prodState.push(x.productId);
        });
    }
    useEffect(() => {
        let query = {
            prodCategory: param.category,
        };
        fetchByQuery(
            dispatch,
            query,
            'Lagos State',
            'prodSub_Category',
            setCategories
        );
    }, []);
    let Products = (
        <div className="relative h-60">
            <Loader
                backdrop
                speed="fast"
                content="In few seconds..."
                vertical
            />
        </div>
    );
    //

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
            <section className="px-2 md:px-6">
                {Category.length === 0 && Products}
                {Category &&
                    Category.map((res, index) => {
                        return (
                            <section
                                key={index}
                                className="shadow my-3"
                                // id={res.label.split(' ').join('-')}
                            >
                                <div className="flex justify-between w-full items-center px-4 md:px-6 h-16 font-[600] bg-white border-b-2 border-slate-800 text-slate-700">
                                    {res._id.name}
                                    <Link
                                        to={`/s/${param.category}/${res._id.name}`}
                                    >
                                        <button className="h-8 px-3 py-1 text-[15px] border mr-2">
                                            EXPAND
                                        </button>
                                    </Link>
                                </div>
                                <div className="h-[550px] bg-slate-50">
                                    <div className="w-full flex justify-center">
                                        <div className="w-full mt-3 sm:w-10/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                            {res.detail.map((each, index2) => {
                                                return (
                                                    <div
                                                        key={index2}
                                                        className="w-full flex justify-center w-full mt-1"
                                                    >
                                                        <Product
                                                            img={
                                                                websiteImages.Image1
                                                            }
                                                            sellingPrice={
                                                                each.prodPrice
                                                            }
                                                            nick={each.shopNick}
                                                            myCarts={prodState}
                                                            id={each._id}
                                                            userId={
                                                                (userData &&
                                                                    userData._id) ||
                                                                'noId'
                                                            }
                                                            originalPrice={
                                                                each.prodPrice
                                                            }
                                                            name={each.prodName}
                                                            styles={
                                                                'w-full flex justify-center'
                                                            }
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                <SigninPop setOpenAdd={setOpenAdd} openAdd={openAdd} />
            </section>
        </SearchWrapper>
    );
};

export default BeandSearch;
