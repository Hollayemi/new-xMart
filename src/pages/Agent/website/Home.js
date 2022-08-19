import React, { useEffect, useState } from 'react';
import Image2 from '../../../assets/images/png/features-1.svg';
import Image3 from '../../../assets/images/png/features-2.svg';
import SearchWrapper from '../../../components/websiteCompoents/ReuseableFlex';
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
import { FaLongArrowAltRight, FaWpforms } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ModalPanel from '../../../components/elements/ModalPanel';
import Account from './account';

const Home = () => {
    const [info, setInfo] = useState({ message: '', type: '' });
    const [openAdd, setOpenAdd] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.reducer.loginReducer);
    useEffect(() => {
        getAgentInfo(dispatch, userData._id, setInfo);
    }, []);

    const Register = () => {
        if (info.message.username) {
            navigate('dashboard');
        } else {
            setOpenAdd(true);
        }
    };
    const Dashboard = () => {
        navigate('dashboard');
    };

    return (
        <SearchWrapper>
            <div className="h-[calc(100vh-100px)] overflow-hidden flex items-center justify-center">
                <div className="w-5/6 flex flex-col md:flex-row items-center justify-evenly">
                    <div className="w-full md:w-1/2">
                        <h5 className="mt-4 md:mt-0">
                            <strong className="strongHeader arial text-2xl sm:text-3xl md:mt-20 md:text-4xl font-black text-slate-800">
                                Earn As You Go
                            </strong>
                            <p className="text-sm Lucida text-gray-600 mt-5 w-68 max-w-[400px]">
                                You can earn up to ₦ 9500 on xMart for the
                                businesses you registered in a week or delivery
                                you make per day.
                            </p>
                            <div className="mt-10 flex items-center">
                                <button
                                    onClick={Dashboard}
                                    className="w-40 mx-1 px-2 bg-slate-600 rounded-md h-12 bg-white shadow-lg hover:bg-slate-700 text-slate-50 cursor-pointer flex items-center justify-center"
                                >
                                    Dashboard
                                    <FaLongArrowAltRight className="ml-2" />
                                </button>
                                <button
                                    onClick={Register}
                                    className="w-40 mx-1 px-2 bg-slate-600 rounded-md h-12 bg-white shadow-lg hover:bg-slate-700 text-slate-50 cursor-pointer flex items-center justify-center"
                                >
                                    Register Business
                                    <FaWpforms className="ml-2" />
                                </button>
                            </div>
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
            <ModalPanel
                closeButton={true}
                title=" "
                children={<Account userId={userData._id} />}
                hasBackdrop={true}
                keyboard={true}
                open={openAdd}
                buttonName="Varify Code"
                handleClose={() => setOpenAdd(!openAdd)}
            />
            {/* <div className="flex w-full p-1.5 md:p-4 justify-center">
                <ImageNote
                    image={Image2}
                    heading="Share your link across social media"
                    backdrop={true}
                    note="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
                />
            </div> */}
        </SearchWrapper>
    );
};

export default Home;
