import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getAgentInfo } from '../../../state/slices/agents/agentInfo';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const [info, setInfo] = useState({ message: '', type: '' });
    //
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.reducer.loginReducer);
    useEffect(() => {
        getAgentInfo(dispatch, userData._id, setInfo);
    }, []);

    console.log(info);
    return (
        <HomeWrapper>
            <div className="h-[calc(100vh-100px)] overflow-hidden flex items-center justify-center">
                <div className="w-5/6 flex flex-col md:flex-row items-center justify-evenly">
                    <div className="w-full md:w-1/2">
                        <h5 className="md:mt-16 md:mt-0">
                            <strong className="strongHeader text-2xl sm:text-3xl md:mt-20 md:text-4xl font-black text-black">
                                Earn As You Go
                            </strong>
                            <p className="text-sm text-gray-500 mt-5 w-68 max-w-[400px]">
                                You can earn up to ₦ 9500 on xMart for the
                                businesses you registered in a week or delivery
                                you make per day.
                            </p>
                            {info.type !== 'success' ? (
                                <Link to="/new-agent">
                                    <p className="w-40 mt-10 bg-blue-400 rounded-md h-12 bg-white shadow-lg hover:bg-blue-600 text-slate-50 cursor-pointer flex items-center justify-center">
                                        Get Started{' '}
                                        <i className="px-3">
                                            <FaLongArrowAltRight />
                                        </i>
                                    </p>
                                </Link>
                            ) : (
                                <Link to="dashboard">
                                    <p className="w-40 mt-10 bg-blue-400 rounded-md h-12 bg-white shadow-lg hover:bg-blue-600 text-slate-50 cursor-pointer flex items-center justify-center">
                                        Go to Dashboard{' '}
                                        <i className="px-3">
                                            <FaLongArrowAltRight />
                                        </i>
                                    </p>
                                </Link>
                            )}
                        </h5>
                    </div>
                    <div className="w-full mt-4 md:mt-0 md:w-1/2 h-[50vh] md:h-68 relative flex justify-center">
                        <img
                            src={Image3}
                            className="w-[520px] z-40"
                            alt="img-here"
                        />
                    </div>
                </div>
            </div>
            <ImageNote
                image={Image2}
                heading="Share your link across social media"
                backdrop={true}
                note="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
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
