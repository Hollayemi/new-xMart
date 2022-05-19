import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchWrapper from '../../components/websiteCompoents/ReuseableFlex';
import Main1 from '../../assets/images/png/Landing/main-noBg.png';
import Main2 from '../../assets/images/png/features-1.svg';
import { FaDumpster } from 'react-icons/fa';
import TwoColFlexImgRight, {
    IconNoteFlex,
} from '../../components/SellerComponents/FlexDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { otpHandler } from '../../state/slices/shop/setOtp';
import { getShopInfo } from '../../state/slices/shop/addShop';
import { unwrapResult } from '@reduxjs/toolkit';

const NewPage = () => {
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
            <section>
                <div className="intro-bg min-h-screen mt-20 md:-mt-20 relative overflow-hidden">
                    <div className="bg-slate-900 bg-opacity-75 absolute  flex flex-col md:flex-row justify-between md:justify-evenly items-center h-full w-full px-4">
                        <div className="w-full mx-3 sm:mx-0 sm:w-4/5 md:w-2/5 text-white mt-16">
                            <h1 className="text-5xl font-bold text-white mb-5">
                                Lets Create Your own style
                            </h1>
                            <h5>
                                Kemon-market is a showcasing website, we present
                                the products and services offered by a company
                                or small business to the customer, reinforcing
                                the perception of the brand.
                            </h5>
                            <h5 className="mt-4">
                                Kemon-market provides quick access to common
                                features and commands. It is well organised,
                                making it easy to locate different tools and
                                options
                            </h5>
                            {!userData.isSeller && (
                                <div className="flex shadow-lg relative mt-8">
                                    <i className="text-xl text-slate-600 absolute left-2 top-2 mt-1">
                                        <FaDumpster />
                                    </i>
                                    <input
                                        type="text"
                                        placeholder="Enter your business name"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        className="h-11 w-full px-2 text-sm font-semibold pl-10 outline-none text-slate-900 focus:shadow-md"
                                    />
                                    <button
                                        onClick={CreateWithBusinessName}
                                        className="w-24 -ml-2 bg-slate-600 hover:bg-slate-700 text-white"
                                    >
                                        Create
                                    </button>
                                </div>
                            )}
                            {userData.isSeller && (
                                <button
                                    onClick={toDashboard}
                                    className="-ml-2 bg-white hover:bg-slate-50 text-slate-800 h-10 w-40 mt-5 rounded"
                                >
                                    Dashboard
                                </button>
                            )}
                        </div>
                        <div className="relative">
                            <div className="w-[300px] h-[400px] mt-16 md:mt-2 md:w-[350px] md:h-[450px] rounded-t-full overflow-hidden">
                                <img
                                    src={Main1}
                                    alt="imgHere"
                                    className="w-full h-full bg-slate-50"
                                />
                            </div>
                            <h5 className="flex items-center justify-center absolute -left-10 md:-left-20 top-14 md:top-20 font-semibold h-12 w-48 shadow-lg shadow-slate-900 rounded bg-slate-700 text-white">
                                Grow Your Business Faster
                            </h5>

                            <h5 className="flex items-center justify-center absolute -right-20 top-40 h-8 w-48 shadow-lg shadow-slate-900 rounded bg-slate-700 text-white">
                                Grow Your Business Faster
                            </h5>

                            <h5 className="flex items-center justify-center absolute -right-4 bottom-0 h-8 w-48 shadow-lg shadow-slate-900 rounded bg-slate-700 text-white">
                                Grow Your Business Faster
                            </h5>

                            <h5 className="flex items-center justify-center absolute -left-10 bottom-14 h-12 w-48 shadow-lg shadow-slate-900 rounded bg-slate-700 text-white">
                                Grow Your Business Faster
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-5/6 flex items-center justify-center">
                        <IconNoteFlex
                            note="We make it easy for you to purchase any product from any location in Nigeria, you desire to buy from."
                            icon={<FaDumpster />}
                        />
                        <IconNoteFlex
                            note="We make it easy for you to purchase any product from any location in Nigeria, you desire to buy from."
                            icon={<FaDumpster />}
                        />
                        <IconNoteFlex
                            note="We make it easy for you to purchase any product from any location in Nigeria, you desire to buy from."
                            icon={<FaDumpster />}
                        />
                    </div>
                </div>
                <div className="w-full flex md:flex-col justify-center items-center">
                    <div className="w-full md:w-4/5 mx-2 mt-10">
                        <TwoColFlexImgRight
                            image={Main2}
                            more="You can earn up to ₦ 9500 in Kemon-Market for the businesses you reffered in a week to register. it's our way of appreciation for spreading the good words and increasing the businesses registered on Kemon.

                                    Once we confirm your referral, we are going to sum it up with the number of referral you have for that week then We will pay you at the end of every week if we find any referral for that week. You check your balance at the top right corner of your phone"
                            title="Agent"
                            checkNote={[
                                'confirm your referral',
                                'confirm your referral',
                            ]}
                            reverse={false}
                        />
                    </div>
                </div>
                <div className="w-full flex md:flex-col justify-center items-center">
                    <div className="w-full md:w-4/5 mx-2 mt-10">
                        <TwoColFlexImgRight
                            image={Main2}
                            more="A Referral Links is simply a unique combination of numbers, letters, or both attached to a link which are used as an identifier to identify the referral.


                            Referral codes, in this type of application, are used to track the origin of a referral. The reason a business uses a referral code is so they can connect the referrals to the people who sent them in."
                            title="What Is A Referral Link And How Does It Work?"
                            checkNote={[
                                'confirm your referral',
                                'confirm your referral',
                            ]}
                        />
                    </div>
                </div>
            </section>
        </SearchWrapper>
    );
};

export default NewPage;
