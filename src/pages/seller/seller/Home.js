import React, { useState } from 'react';
import savePayment from '../../../assets/images/main/seo_secure-compressor.png';
import Underline from '../../../assets/images/png/Landing/Vector 3.png';
import Growth from '../../../assets/images/main/Growth.png';
import applyForm from '../../../assets/images/main/application.png';
import approval from '../../../assets/images/main/approval.png';
import creation from '../../../assets/images/main/folder3.png';
import onlineEcommerce from '../../../assets/images/main/onlineEcommerce.jpg';
import {
    ImageNote,
    StoreStep,
} from '../../../components/SellerComponents/website/Components';
import { getShopInfo } from '../../../state/slices/shop/addShop';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { otpHandler } from '../../../state/slices/shop/setOtp';
import { FaDumpster, FaLongArrowAltRight } from 'react-icons/fa';
import SearchWrapper from '../../../components/websiteCompoents/ReuseableFlex';

const Home = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('new');
    const CreateWithBusinessName = () => {
        navigate('/seller/create-account/' + name);
    };

    //
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.reducer.loginReducer);
    const payload = {
        id: userData._id,
        auth: {
            token: 'Holla ' + userData.accessToken,
        },
    };
    const toDashboard = () => {
        dispatch(getShopInfo(payload))
            .then(unwrapResult)
            .then((res) => {
                console.log(res);
                dispatch(otpHandler(res.id))
                    .then(unwrapResult)
                    .then((res) => {
                        console.log(res);
                        navigate('dashboard');
                    });
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <SearchWrapper>
            <div className="p-2 mt-8 md:mt-16">
                <div className=" h-38 md:h-[380px]">
                    <img
                        className="h-full w-full"
                        src={onlineEcommerce}
                        alt="eco"
                    />
                </div>
            </div>

            <div className="w-full -mt-4 px-1 flex sm:-mt-40 md:-mt-80 opacity-[.98] md:justify-left md:ml-8">
                <div className="w-full sm:w-[480px] h-60 bg-white border shadow-xl md:rounded-lg flex flex-col items-cnter justify-center md:mx-4 my-8 py-5">
                    {!userData.isSeller && (
                        <div className="px-4">
                            <div>
                                <h5 className="font-black arial leading-9 text-[20px] md:text-[25px] mb-4 text-slate-900">
                                    Join The Best Online Marketplace Platform
                                </h5>
                            </div>
                            <div className="flex w-full px-2 md:w-[400px] relative">
                                <i className="text-xl text-slate-600 absolute left-4 top-2 mt-1">
                                    <FaDumpster />
                                </i>
                                <input
                                    type="text"
                                    placeholder="Enter your business name"
                                    onChange={(e) => setName(e.target.value)}
                                    className="h-11 border rounded-l-md border-slate-500 w-full px-2 text-sm font-semibold pl-10 outline-none text-slate-900 focus:shadow-md"
                                />
                                <button
                                    onClick={CreateWithBusinessName}
                                    className="w-24 bg-slate-600 hover:bg-slate-700 text-white tracking-wider"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    )}
                    {userData.isSeller && (
                        <div className="flex flex-col items-center justify-center">
                            <div>
                                <h5 className="font-bold arial leading-9 text-[20px] md:text-[24px] mb-3 mx-4 text-slate-900">
                                    Continue with your store
                                </h5>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    onClick={toDashboard}
                                    className="flex items-center tracking-widest justify-center bg-slate-900 hover:bg-slate-800 text-white  font-semibold h-12 w-40  rounded-lg"
                                >
                                    Dashboard
                                    <FaLongArrowAltRight className="ml-3" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-canter mt-6 mx-1.5 md:mx-3">
                <div className="bg-slate-900 w-full">
                    <h3 className="py-6 relative flex justify-center text-center text-slate-100 arial text-lg font-bold">
                        Steps in setting your store
                        <img
                            src={Underline}
                            alt="underline"
                            className="absolute top-14 b w-48"
                        />
                    </h3>
                    <div>
                        <div className="flex items-start justify-center pt-5 flex-wrap">
                            <div className="w-[250px] mx-6 my-4">
                                <StoreStep
                                    image={applyForm}
                                    name="Application"
                                    note="Fill the registration form and
                                    submit the required documents where needed"
                                />
                            </div>
                            <div className="w-[250px] mx-6 my-4">
                                <StoreStep
                                    image={approval}
                                    name="Approval"
                                    note="We'll review your application and get in touch within 5 business days."
                                />
                            </div>
                            <div className="w-[250px] mx-6 my-4">
                                <StoreStep
                                    image={creation}
                                    name="Creation"
                                    note="Give your store a good modeling by creating collections and brands for better profiling"
                                />
                            </div>
                            <div className="w-[250px] mx-6 my-4">
                                <StoreStep
                                    image={Growth}
                                    name="Growth"
                                    note="Grow your store via promotions, analyse your performance using reports and so much more."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full p-1.5 md:p-4 justify-center">
                <ImageNote
                    image={savePayment}
                    heading="Safe And Secure Payment Guarantee"
                    backdrop={true}
                    note="Here in xMart, we take your security and privacy very seriously and we carefully protect your information. 
                            When you submit sensitive information via our website, your information is protected both 
                            online and offline. To securely process your payment, we use industry leading payment 
                            processors including paystack. When you send sensitive payment information 
                            via our website, that information is encrypted using industry-standard encryption protocols 
                            including SSL Certification. Wherever we collect sensitive information (such as credit card data), 
                            that information is encrypted and transmitted to us securely. On our Pricing, Shopping Cart page or during 
                            the checkout process, you can verify this by looking for a closed lock icon at the bottom of your 
                            web browser, or looking for 'https' at the beginning of the address of the web page.
                             While we use encryption to protect sensitive information transmitted online, we also 
                             protect your information offline. Only employees who need the information to perform a 
                             specific job for example, billing or customer service) are granted access to personally 
                             identifiable information. The computers/servers in which we store personally identifiable 
                             information are kept in a secure environment."
                />
            </div>
        </SearchWrapper>
    );
};

export default Home;
