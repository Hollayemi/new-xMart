import React, { useState } from 'react';
import HomeWrapper from '../../../components/SellerComponents/website/HomeWrapper';
import Image1 from '../../../assets/images/png/Landing/main-noBg.png';
import Image2 from '../../../assets/images/png/features-1.svg';
import Image3 from '../../../assets/images/png/features-2.svg';
import Image4 from '../../../assets/images/png/intro-img.svg';
import Person1 from '../../../assets/images/png/Landing/main2.png';
import Person2 from '../../../assets/images/png/Landing/main2.png';
import Person3 from '../../../assets/images/png/Landing/main2.png';
import {
    ImageNote,
    Testimonials,
} from '../../../components/SellerComponents/website/Components';
import Footer from '../../../components/websiteCompoents/Footer';
import { getShopInfo } from '../../../state/slices/shop/addShop';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { otpHandler } from '../../../state/slices/shop/setOtp';
import { FaDumpster } from 'react-icons/fa';

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
        <HomeWrapper>
            <div className="h-[calc(100vh-100px)] overflow-hidden flex items-center justify-center">
                <div className="w-5/6 flex flex-col flex-col-reverse md:flex-row items-center justify-evenly">
                    <div className="w-full md:w-1/2">
                        <h5 className="mt-16 md:mt-0">
                            <strong className="strongHeader text-2xl sm:text-3xl mt-20 md:text-4xl font-black text-black">
                                It Takes Few Minutes <br /> To Set Up Your Store
                                <br />
                            </strong>
                            <br />
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
                                    className="-ml-2 bg-slate-900 hover:bg-slate-800 text-white  font-semibold h-10 w-40 mt-5 rounded"
                                >
                                    Dashboard
                                </button>
                            )}
                            <p className="text-sm text-gray-500 mt-5 w-68 max-w-[400px]">
                                xMart is a company that present the products and
                                services offered by a company to their target
                                customers.
                            </p>
                        </h5>
                    </div>
                    <div className="w-full mt-4 md:mt-0 md:w-1/2 h-68 relative flex justify-center">
                        {/* <div className="absolute w-full h-full rounded-full bg-slate-200 left-0 top-0"></div> */}
                        <img
                            src={Image4}
                            className="w-[470px] z-40"
                            alt="img-here"
                        />
                    </div>
                </div>
            </div>
            <ImageNote
                image={Image2}
                heading="My"
                backdrop={true}
                note="A Referral Links is simply a unique combination of numbers, letters, or both attached to a link which are used as an identifier to identify the referral.


                Referral codes, in this type of application, are used to track the origin of a referral. The reason a business uses a referral code is so they can connect the referrals to the people who sent them in."
            />
            <div className="flex items-center justify-center pt-5 flex-wrap">
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person3}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person1}
                        name="Joseph Ike"
                        location="ikeja"
                        type="customer"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person3}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person2}
                        name="Joseph Ike"
                        location="ikeja"
                        type="customer"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person1}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person2}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
            </div>
            <ImageNote
                image={Image2}
                heading="Tolu & Joy’s Experience"
                second={true}
                note="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
            />
            <div className="flex items-center justify-center pt-5 flex-wrap">
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person3}
                        name="Joseph Ike"
                        location="ikeja"
                        type="customer"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person1}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person3}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person2}
                        name="Joseph Ike"
                        location="ikeja"
                        type="customer"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person1}
                        name="Joseph Ike"
                        location="ikeja"
                        type="vendor"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
                <div className="w-[250px] mx-6 my-4">
                    <Testimonials
                        image={Person2}
                        name="Joseph Ike"
                        location="ikeja"
                        type="customer"
                        note="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                    />
                </div>
            </div>

            <Footer />
        </HomeWrapper>
    );
};

export default Home;
