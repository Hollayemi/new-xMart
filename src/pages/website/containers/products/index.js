import React, { useEffect, useState } from 'react';
import { Badge, Loader } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';
import { FaAngleLeft, FaShoppingCart } from 'react-icons/fa';
import fakeImg1 from '../../../../assets/images/png/_supreme4.png';
// import { FetchCartHandler } from '../../../state/slices/home/cart/fetchCart';
import { useParams } from 'react-router-dom';
import { getOneProductHandler } from '../../../../state/slices/home';
import { ProductDisplay } from './productDisplay';
import GetLocation from './getLocation';

const ProductsContainer = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { cartData, status } = useSelector(
        (state) => state.reducer.cartedProduct
    );
    const { userData } = useSelector((state) => state.reducer.loginReducer);
    const [productInfo, setInfo] = useState({});

    useEffect(() => {
        getOneProductHandler(dispatch, fetchPayload, setInfo);
        // FetchCartHandler(payload, dispatch);
    }, []);
    const fetchPayload = {
        shopNick: params.shop.toLowerCase(),
        prodName: params.product.split('-').join(' '),
    };
    let payload = {
        body: {
            productId: (productInfo && productInfo._id) || 'noId',
            userId: (userData && userData._id) || 'noId',
        },
    };

    const prodState =
        cartData && cartData.message && cartData.message.length > 0
            ? cartData.message.map((x) => {
                  return x.productId;
              })
            : [];
    console.log(prodState);
    let chosenSize = ['0'];
    chosenSize =
        (productInfo && productInfo.prodVari && productInfo.prodVari[0].size) ||
        '0';
    return (
        <section className="min-h-[100vh] bg-slate-90 pb-16 md:pb-0 w-full flex items-center justify-center">
            <div className="fixed z-50 border-b bg-slate-900 border-slate-800 flex items-center justify-between px-5 md:px-10 py-2 top-0 left-0 w-full h-14 mb-10">
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
            {productInfo && productInfo._id ? (
                <ProductDisplay
                    payload={payload}
                    productInfo={productInfo}
                    prodState={prodState}
                    status={status}
                    chosenSize={chosenSize}
                />
            ) : (
                <Loader speed="fast" content="wait..." />
            )}
            <GetLocation />
        </section>
    );
};

export default ProductsContainer;
