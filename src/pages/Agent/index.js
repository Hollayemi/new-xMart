import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchWrapper from '../../components/websiteCompoents/ReuseableFlex';
import Main1 from '../../assets/images/png/Landing/main3.png';
import Main2 from '../../assets/images/png/features-1.svg';
import Main3 from '../../assets/images/png/features-2.svg';
import { FaLongArrowAltRight } from 'react-icons/fa';
import TwoColFlexImgRight from '../../components/SellerComponents/FlexDisplay';

const Agent = () => {
    const navigate = useNavigate();
    const CreateWithBusinessName = () => {
        navigate('/agent/new-agent');
    };
    return (
        <SearchWrapper>
            <section>
                <div className="intro-bg min-h-screen mt-20 md:-mt-20 relative overflow-hidden">
                    <div className="bg-slate-900 bg-opacity-75 absolute  flex flex-col md:flex-row justify-between md:justify-evenly items-center h-full w-full px-4">
                        <div className="w-full mx-3 sm:mx-0 sm:w-4/5 md:w-2/5 text-white mt-16">
                            <h1 className="text-5xl font-bold text-white mb-7">
                                Earn As You Go
                            </h1>
                            <h5 className="leading-9">
                                You can earn up to ₦ 9500 in Kemon-Market for
                                the businesses you reffered in a week to
                                register. it's our way of appreciation for
                                spreading the good words and increasing the
                                businesses registered on Kemon.
                            </h5>
                            <h5 className="leading-9 mt-6">
                                Kemon-market provides quick access to common
                                features and commands. It is well organised,
                                making it easy to locate different tools and
                                options
                            </h5>
                            <div className="flex relative mt-8">
                                <button
                                    onClick={CreateWithBusinessName}
                                    className="w-40 rounded-md h-12 bg-white shadow-lg hover:bg-slate-50 text-slate-900 flex items-center justify-center"
                                >
                                    Get Started{' '}
                                    <i className="px-3">
                                        <FaLongArrowAltRight />
                                    </i>
                                </button>
                            </div>
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
                                Get Started For Free
                            </h5>

                            <h5 className="flex items-center justify-center absolute -right-20 top-40 h-8 w-48 shadow-lg shadow-slate-900 rounded bg-slate-700 text-white">
                                Register Business
                            </h5>

                            <h5 className="flex items-center justify-center absolute -right-4 bottom-6 h-8 w-48 shadow-lg shadow-slate-900 rounded bg-slate-700 text-white">
                                Get Your Fund
                            </h5>

                            <h5 className="flex items-center justify-center absolute -left-10 bottom-20 h-12 w-48 shadow-lg shadow-slate-900 rounded bg-slate-700 text-white">
                                Register More Businesses
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col  md:flex-row justify-center">
                    <div className="w-full md:w-4/5 mx-2 mt-10">
                        <TwoColFlexImgRight
                            image={Main3}
                            more="You can earn up to ₦ 9500 in Kemon-Market for the businesses you reffered in a week to register. it's our way of appreciation for spreading the good words and increasing the businesses registered on Kemon.

                                    Once we confirm your referral, we are going to sum it up with the number of referral you have for that week then We will pay you at the end of every week if we find any referral for that week. You check your balance at the top right corner of your phone"
                            title="Agent"
                            checkNote={[
                                'confirm your referral',
                                'confirm your referral',
                            ]}
                            reverse={true}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col  md:flex-row justify-center">
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

export default Agent;
