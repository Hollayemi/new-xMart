import React, { useState } from 'react';
import { Steps, Panel, Loader, Message, toaster } from 'rsuite';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import InputGroup from '../../../components/elements/Input/InputGroup';
import Button from '../../../components/elements/Button/index';
import { InputRadio } from '../../../components/elements/Input/InputFile';
import { Link } from 'react-router-dom';
import UploadProfilePic from '../../../components/websiteCompoents/UploadFile/uploadProfilePic';
import { useDispatch, useSelector } from 'react-redux';
import { RegNewUser } from '../../../state/slices/auth/Signup';
import { REQUEST_STATUS } from '../../../state/slices/constants';
import { unwrapResult } from '@reduxjs/toolkit';

const KemSignUp = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
        phoneNumber: '',
        location: '',
        password: '',
        conf_pass: '',
        avatar: 'no image',
        why_here: '',
    });
    let newValue = {};
    const updateValue = (newVal, variable) => {
        variable === 'fullname' && (newValue = { fullname: newVal });
        variable === 'username' && (newValue = { username: newVal });
        variable === 'email' && (newValue = { email: newVal });
        variable === 'phone' && (newValue = { phoneNumber: newVal });
        variable === 'location' && (newValue = { location: newVal });
        variable === 'password' && (newValue = { password: newVal });
        variable === 'conf_pass' && (newValue = { conf_pass: newVal });
        variable === 'avatar' && (newValue = { avatar: newVal });
        variable === 'why_here' && (newValue = { why_here: newVal });

        setFormData({
            ...formData,
            ...newValue,
        });
    };
    const updateImg = (newVal, variable) => {
        variable === 'avatar' && (newValue = { avatar: newVal });
    };

    const [step, setStep] = useState(0);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    // functions
    const onChange = (nextStep) => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);
    //
    //
    //
    const { status } = useSelector((state) => state.reducer.signUpReducer);
    const dispatch = useDispatch();
    const submitButton = () => {
        if (formData.password === formData.conf_pass) {
            const { conf_pass, ...others } = formData;
            dispatch(RegNewUser({ ...others, isSeller: false }))
                .then(unwrapResult)
                .then((res) => {
                    res.type &&
                        toaster.push(
                            <Message showIcon type={res.type}>
                                {res.message}
                            </Message>,
                            {
                                placement: 'topEnd',
                            }
                        );
                });
        }
    };
    return (
        <section className="h-80 min-h-screen overflow-x-hidden">
            <div className="w-full h-full flex">
                <div className="fixed left-0 top-0 hidden md:block sm-w-40 md:w-2/5 bg-slate-800 h-full"></div>
                <div className="hidden md:block sm-w-40 md:w-2/5 bg-slate-800 h-full"></div>
                <div className="flex justify-center w-full md:w-3/5">
                    <div className="w-full sm:max-w-[600px] px-1 md:px-4 flex flex-col items-center">
                        <div className="flex justify-between items-center w-full p-3 ">
                            <div className="flex h-10 mt-10 items-center">
                                <Button
                                    btnClass="h-8 rounded-l"
                                    onClick={onPrevious}
                                    disabled={step === 0}
                                    title={<FaAngleLeft />}
                                />
                            </div>
                            <div className="flex">
                                <h5 className="text-sm h-10 leading-6 flex items-center px-3 text-bold m-1">
                                    Have an account?
                                </h5>
                                <Link to="/signin">
                                    <h5 className="text-sm h-10 w-20 leading-6 flex items-center px-3 font-medium bg-gray-50 text-slate-700 hover:bg-gray-100 rounded m-1 shadow hover:decoration-none">
                                        Sign in
                                    </h5>
                                </Link>
                            </div>
                        </div>
                        <div className="w-5/6 md:w-5/6 my-5">
                            <h1 className="font-black text-black text-4xl ">
                                Register
                            </h1>
                            <p className="text-gray-500 leading-7 mx-1 mt-3 w-full md:min-w-[350px]">
                                Let's get you set up so you can verify your
                                account and start your journey with kemon market
                            </p>
                        </div>
                        <div className="w-full md:w-4/5 my-3 h-80 sm:min-w-[450px] lg:min-w-[550px] min-h-[450px] md:min-h-[430px] relative">
                            <Steps current={step}>
                                <Steps.Item title={''} />
                                <Steps.Item title="" />
                                <Steps.Item title={''} />
                                <Steps.Item title={''} />
                            </Steps>
                            <Panel header={`Step: ${step + 1}`}>
                                {step === 0 && (
                                    <>
                                        <div className="flex w-full">
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Name"
                                                    name="fullName"
                                                    placeholder=" "
                                                    value={formData.fullname}
                                                    required={true}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'fullname'
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Username"
                                                    placeholder=" "
                                                    required={true}
                                                    value={formData.username}
                                                    tooltip={
                                                        <ul className="p-1">
                                                            <li>
                                                                Minimum of 6
                                                                characters
                                                            </li>
                                                        </ul>
                                                    }
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'username'
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="flex w-full">
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Email"
                                                    placeholder=" "
                                                    required={true}
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'email'
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Phone number"
                                                    placeholder=" "
                                                    required={true}
                                                    type="number"
                                                    max={11}
                                                    value={formData.phoneNumber}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'phone'
                                                        )
                                                    }
                                                    tooltip={
                                                        <ul className="p-1">
                                                            <li>
                                                                Maximum of 11
                                                                characters
                                                            </li>
                                                        </ul>
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <InputGroup
                                            label="Location"
                                            placeholder=" "
                                            value={formData.location}
                                            onChange={(e) =>
                                                updateValue(
                                                    e.target.value,
                                                    'location'
                                                )
                                            }
                                        />
                                    </>
                                )}
                                {step === 1 && (
                                    <div>
                                        <InputGroup
                                            label="Password"
                                            type="password"
                                            placeholder=" "
                                            required={true}
                                            value={formData.password}
                                            onChange={(e) =>
                                                updateValue(
                                                    e.target.value,
                                                    'password'
                                                )
                                            }
                                            tooltip={
                                                <ul className="p-1">
                                                    <li>
                                                        Minimum of 6 characters
                                                    </li>
                                                </ul>
                                            }
                                        />
                                        <InputGroup
                                            label="Confirm Password"
                                            type="password"
                                            placeholder=" "
                                            value={formData.conf_pass}
                                            required={true}
                                            onChange={(e) =>
                                                updateValue(
                                                    e.target.value,
                                                    'conf_pass'
                                                )
                                            }
                                            tooltip={
                                                <ul className="p-1">
                                                    <li>
                                                        Minimum of 6 characters
                                                    </li>
                                                </ul>
                                            }
                                        />
                                    </div>
                                )}
                                {step === 2 && (
                                    <div>
                                        <UploadProfilePic
                                            updateValue={updateValue}
                                            formData={formData}
                                        />
                                    </div>
                                )}
                                {step === 3 && (
                                    <>
                                        <div
                                            onChange={(e) =>
                                                updateValue(
                                                    e.target.value,
                                                    'why_here'
                                                )
                                            }
                                            className="flex-col md:flex items"
                                        >
                                            <InputRadio
                                                name="Reason"
                                                value="To become an agent"
                                                label="To be an agent"
                                            />
                                            <InputRadio
                                                name="Reason"
                                                value="To Create online store"
                                                label="To create online store"
                                            />
                                            <InputRadio
                                                name="Reason"
                                                value="To buy"
                                                label="To buy"
                                            />
                                        </div>
                                        <div className="flex items-center mt-8">
                                            <input
                                                type="checkbox"
                                                name="agreeToPrivacy"
                                                id="agreeToPrivacy"
                                                checked={agreedToTerms}
                                                onChange={() =>
                                                    setAgreedToTerms(
                                                        !agreedToTerms
                                                    )
                                                }
                                            />
                                            <label
                                                htmlFor="agreeToPrivacy"
                                                className="px-2"
                                            >
                                                I agree to the Terms both
                                                Privacy Policy
                                            </label>
                                        </div>
                                        <Button
                                            btnClass="h-10 rounded mt-4 w-full justify-center"
                                            onClick={submitButton}
                                            disabled={!agreedToTerms}
                                        />
                                    </>
                                )}
                            </Panel>
                            <div className="absolute bottom-0 left-3 w-full">
                                <div className="w-full px-4 flex justify-end items-center">
                                    <Button
                                        onClick={onNext}
                                        disabled={step === 3}
                                        title={<FaAngleRight />}
                                        btnClass="h-8 mr-5 rounded-r"
                                    />
                                </div>
                            </div>
                        </div>
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
            ;
        </section>
    );
};

export default KemSignUp;
