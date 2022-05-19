import React, { useState } from 'react';
import { Loader, Row } from 'rsuite';
import InputGroup from '../../../components/elements/Input/InputGroup';
import InputAddon from '../../../components/elements/Input/InputAddon';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';
import HelperText from '../../../components/elements/Input/HelperText';
import Button from '../../../components/elements/Button';
import { Link, useNavigate } from 'react-router-dom';
import DividerPanel from '../../../components/elements/DividerPanel';
import { useDispatch, useSelector } from 'react-redux';
import { kem_signin } from '../../../state/slices/auth/Login';
import { REQUEST_STATUS } from '../../../state/slices/constants';
import { defaultOTP } from '../../../state/slices/shop/setOtp';
import { unwrapResult } from '@reduxjs/toolkit';

//
const KemSignUp = () => {
    defaultOTP();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    let newValue = {};
    const updateValue = (newVal, variable) => {
        // eslint-disable-next-line no-lone-blocks
        {
            variable === 'email' && (newValue = { email: newVal });
            variable === 'password' && (newValue = { password: newVal });
        }
        setFormData({
            ...formData,
            ...newValue,
        });
    };

    //
    //
    //
    const { userData, status, wasGoing } = useSelector(
        (state) => state.reducer.loginReducer
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = () => {
        dispatch(kem_signin(formData))
            .then(unwrapResult)
            .then((res) => {
                if (status === REQUEST_STATUS.FULFILLED) {
                    if (wasGoing !== 'no-where') {
                        navigate(`/${wasGoing}`);
                    } else {
                        navigate('/');
                    }
                }
            });
    };
    return (
        <section className="h-80 min-h-screen overflow-x-hidden">
            <div className="w-full h-full flex">
                <div className="fixed left-0 top-0 hidden md:block sm-w-40 md:w-2/5 bg-slate-800 h-full"></div>
                <div className="hidden md:block sm-w-40 md:w-2/5 bg-slate-800 h-full"></div>
                <div className="w-full md:w-3/5  px-5 md:px-4 flex flex-col items-center justify-center">
                    <div className="flex justify-end  w-full p-3 absolute top-0 right-0">
                        <h5 className="text-sm h-10 leading-6 flex items-center px-3 text-bold m-1">
                            Don't have an account?
                        </h5>
                        <Link to="/signup">
                            <h5 className="text-sm h-10 leading-6 flex items-center px-3 font-medium bg-gray-50 text-slate-700 hover:bg-gray-100 rounded m-1 shadow hover:decoration-none">
                                Sign Up
                            </h5>
                        </Link>
                    </div>
                    <div className="w-full md:w-3/5 my-3">
                        <h1 className="font-black text-black text-4xl ">
                            Login
                        </h1>
                        <p className="text-gray-500 leading-7 mx-1 mt-3 w-full md:w-4/5 lg:w-3/5">
                            Let's get you set up so you can verify your account
                            and start your journey with kemon market
                        </p>
                    </div>
                    <div className="w-full md:w-3/5 my-3 h-80 relative">
                        <form className="my-4 h-4/6 flex flex-col items-stretch pt-4">
                            <Row>
                                <InputGroup
                                    label="Email"
                                    size="lg"
                                    type="email"
                                    name="email"
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'email')
                                    }
                                    placeholder="example@gmail.com"
                                />
                            </Row>
                            <Row>
                                <InputAddon
                                    suffix
                                    icon={
                                        showPassword ? (
                                            <FaEyeSlash />
                                        ) : (
                                            <FaEye />
                                        )
                                    }
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    onClick={toggleShowPassword}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'password')
                                    }
                                    name="password"
                                    placeholder="**********"
                                />
                            </Row>
                            <HelperText linkText="Forgot Password?" />
                            <Row className="relative bottom-0 mt-auto">
                                <Button
                                    onClick={loginHandler}
                                    btnClass="w-full h-10 rounded shadow mt-2 justify-center"
                                    title="Sign into dashboard"
                                />
                            </Row>
                            <DividerPanel text="OR" />
                            <div className="flex w-full justify-center">
                                <i className="w-8 h-8 rounded-sm text-white bg-slate-600 m-1 text-lg flex items-center justify-center hover:bg-slate-500 cursor-pointer">
                                    <FaGoogle />
                                </i>
                                <i className="w-8 h-8 rounded-sm text-white bg-slate-600 m-1 text-lg flex items-center justify-center hover:bg-slate-500 cursor-pointer">
                                    <FaFacebook />
                                </i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {status === REQUEST_STATUS.PENDING && (
                <Loader
                    backdrop
                    speed="fast"
                    content="In few seconds..."
                    vertical
                />
            )}
        </section>
    );
};

export default KemSignUp;
