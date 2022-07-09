import React from 'react';
import {
    FaAt,
    FaFacebook,
    FaLinkedin,
    FaLocationArrow,
    FaPhoneAlt,
    FaTwitter,
} from 'react-icons/fa';
import { Stack, InputGroup, Input, ButtonToolbar, IconButton } from 'rsuite';
import FooterLogo from '../../assets/images/png/onlinePayment.png';

const Footer = () => {
    return (
        <section className="bg-gray-900 mt-16 pb">
            <div className="mt-10 px-5 relative">
                <div className="w-full absolute -top-10 bottom-0 left-6 flex flex-col sm:flex-row justify-evenly mt-10 relative">
                    <div>
                        <img
                            src={FooterLogo}
                            className="w-60"
                            alt="footerBanner"
                        />
                    </div>
                    <div className="w-[300px]">
                        <h5 className="font-bold text-3xl mt-16 text-white">
                            Be a member of our community
                        </h5>
                        <p className="text-gray-300 mt-4 mb-2">
                            We’d make sure you’re always first to know what’s
                            happening on Vasiti—thus, the world.
                        </p>
                        <InputGroup>
                            <Input />
                            <InputGroup.Button>SUBSCRIBE</InputGroup.Button>
                        </InputGroup>
                    </div>
                </div>
                <div className="flex w-full flex-wrap lg:flex-nowrap justify-between md:justify-evenly">
                    <div className="w-40 md:min-w-[200px] mt-10">
                        <div className="w-full text-left font-  text-sm text-blue-300 mb-2">
                            Company
                        </div>
                        <div className="flex flex-col">
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                About us
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Term of use
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Privacy Policy
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Press and Media
                            </h4>
                        </div>
                    </div>
                    <div className="w-40 md:min-w-[200px] mt-10">
                        <div className="w-full text-left font-  text-sm text-blue-300 mb-2">
                            Products
                        </div>
                        <div className="flex flex-col">
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Marketplace
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Magazine
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Seller
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Wholesale
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Services
                            </h4>
                        </div>
                    </div>
                    <div className="w-40 md:min-w-[200px] mt-10">
                        <div className="w-full text-left font-  text-sm text-blue-300 mb-2">
                            Career
                        </div>
                        <div className="flex flex-col">
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Become a Campus Rep
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Become a Vasiti Influencer
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Become a Campus writer
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Become an Affiliate
                            </h4>
                        </div>
                    </div>
                    <div className="w-40 md:min-w-[200px] mt-10">
                        <div className="w-full text-left font-  text-sm text-blue-300 mb-2">
                            Get in touch
                        </div>
                        <div className="flex flex-col">
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Contact us
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Advertise with us
                            </h4>
                            <h4 className="leading-5 py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-full px-1">
                                Help/FAQs
                            </h4>
                        </div>
                    </div>
                    <div className="w-40 md:min-w-[200px] mt-10">
                        <div className="w-full text-left font-  text-sm text-blue-300 mb-2">
                            Join our community
                        </div>
                        <div className="flex flex-col">
                            <ButtonToolbar>
                                <IconButton
                                    icon={<FaAt />}
                                    color="green"
                                    appearance="primary"
                                    circle
                                />
                                <IconButton
                                    icon={<FaFacebook />}
                                    color="red"
                                    appearance="primary"
                                    circle
                                />
                                <IconButton
                                    icon={<FaTwitter />}
                                    color="cyan"
                                    appearance="primary"
                                    circle
                                />
                                <IconButton
                                    icon={<FaLinkedin />}
                                    color="blue"
                                    appearance="primary"
                                    circle
                                />
                            </ButtonToolbar>
                            <h4 className="leading-5 flex items-center py-1 cursor-pointer my-1 text-slate-100 hover:bg-slate-800 w-auto px-1">
                                Email in newsletter
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center h-10 justify-center text-slate-500 bg-slate-800 mt-10">
                We make it possible
            </div>
        </section>
    );
};

export default Footer;
