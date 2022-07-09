import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Button, Row } from 'rsuite';
import { myLogin } from '../../../state/slices/auth/Login';
import DividerPanel from '../DividerPanel';
import InputAddon from '../Input/InputAddon';
import InputGroup from '../Input/InputGroup';

const PasswordVerification = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [useOTP, setUseOTP] = useState(false);
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
    const dispatch = useDispatch();
    const loginHandler = () => {
        myLogin(formData, dispatch);
    };
    return (
        <section className="flex justify-center items-center">
            <div className="w-[320px]">
                <form className="my-4 h-4/6 flex flex-col items-stretch pt-4">
                    <Row>
                        <InputGroup
                            label="Username"
                            size="lg"
                            type="text"
                            name="username"
                            onChange={(e) =>
                                updateValue(e.target.value, 'username')
                            }
                            placeholder="username"
                        />
                    </Row>
                    <Row>
                        <InputAddon
                            suffix
                            icon={showPassword ? <FaEyeSlash /> : <FaEye />}
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
                    <Row className="">
                        <button
                            className="w-full h-10 rounded shadow bg-slate-700 font-[400] text-white mt-2 justify-center"
                            onClick={loginHandler}
                        >
                            Sign into dashboard
                        </button>
                    </Row>
                    <DividerPanel text="OR" />
                    <div className="flex items-center -mt-4">
                        <input
                            type="checkbox"
                            name="agreeToPrivacy"
                            id="agreeToPrivacy"
                            checked={useOTP}
                            onChange={() => setUseOTP(!useOTP)}
                        />
                        <label htmlFor="agreeToPrivacy" className="px-2">
                            Use OTP
                        </label>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PasswordVerification;
