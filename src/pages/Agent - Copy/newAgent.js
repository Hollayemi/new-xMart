import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Steps, Panel } from 'rsuite';
import Button from '../../components/elements/Button';
import InputGroup from '../../components/elements/Input/InputGroup';
import { FaAngleLeft } from 'react-icons/fa';
import UploadProfilePic from '../../components/websiteCompoents/UploadFile/uploadProfilePic';
import { registerAgentHandler } from '../../state/slices/agents/signup';
import { useDispatch, useSelector } from 'react-redux';

export const FieldAdded = ({ title, value }) => {
    return (
        <h5 className="my-1">
            {title}:<p className="my-1 ml-2 text-orange-500">{value}</p>
        </h5>
    );
};
const NewAgent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userData } = useSelector((state) => state.reducer.loginReducer);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        username: '',
        account_number: '',
        bank_name: '',
        account_name: '',
        avatar: '',
    });
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);

    let newValue = {};
    const updateValue = (newVal, variable) => {
        // eslint-disable-next-line no-lone-blocks
        {
            variable === 'name' && (newValue = { name: newVal });
            variable === 'email' && (newValue = { email: newVal });
            variable === 'phone' && (newValue = { phone: newVal });
            variable === 'username' && (newValue = { username: newVal });
            variable === 'acc_no' && (newValue = { account_number: newVal });
            variable === 'acc_bnk' && (newValue = { bank_name: newVal });
            variable === 'acc_name' && (newValue = { account_name: newVal });
            variable === 'avatar' && (newValue = { avatar: newVal });
        }
        setFormData({
            ...formData,
            ...newValue,
        });
    };

    const submitButton = () => {
        registerAgentHandler(formData, dispatch, userData._id, navigate);
    };
    const [step, setStep] = useState(0);
    const onChange = (nextStep) => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };

    return (
        <section className="seller-bg-image min-h-screen">
            <div className="flex justify-evenly items-center w-full h-full bg-slate-900 bg-opacity-75  absolute top-0 left-0">
                <div className="flex md:w-full lg:w-5/6 justify-center">
                    <div className="bg-white shadow-xl rounded h-[580px] sm:h-[560px] w-full min-w-[320px] md:w-1/2 mx-1 p-2 md:p-4">
                        <div className="flex justify-between items-center w-full px-3  ">
                            <div className="flex h-10 items-center">
                                <Button
                                    btnClass={`h-8 rounded-l bg-red-400 ${
                                        step === 0 ? 'hidden' : ''
                                    }`}
                                    onClick={onPrevious}
                                    disabled={step === 0}
                                    title={<FaAngleLeft />}
                                />
                            </div>
                            <div className="flex">
                                <h5 className="text-sm h-10 leading-6 flex items-center px-3 text-bold m-1">
                                    Have an account?
                                </h5>
                            </div>
                        </div>
                        <div className="w-full">
                            <Steps current={step}>
                                <Steps.Item />
                                <Steps.Item />
                                <Steps.Item />
                            </Steps>
                            <Panel header={`Step: ${step + 1}`}>
                                {step === 0 && (
                                    <>
                                        <div className="flex w-full">
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Your Name"
                                                    name="name"
                                                    value={formData.name}
                                                    placeholder=" "
                                                    required={true}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'name'
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Your Email"
                                                    value={formData.email}
                                                    placeholder=" "
                                                    required={true}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'email'
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="flex w-full">
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Username"
                                                    placeholder=" "
                                                    value={formData.username}
                                                    required={true}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'username'
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Phone Number"
                                                    value={formData.phone}
                                                    placeholder=" "
                                                    required={true}
                                                    type="number"
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'phone'
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                                {step === 1 && (
                                    <>
                                        <div className="w-full">
                                            <InputGroup
                                                label="Account Name"
                                                value={formData.acc_name}
                                                placeholder=" "
                                                required={true}
                                                onChange={(e) =>
                                                    updateValue(
                                                        e.target.value,
                                                        'acc_name'
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="flex w-full">
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Account Number"
                                                    name="acc_no"
                                                    value={formData.acc_no}
                                                    placeholder=" "
                                                    required={true}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'acc_no'
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Bank"
                                                    value={formData.acc_bnk}
                                                    placeholder=" "
                                                    required={true}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'acc_bnk'
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                                {step === 2 && (
                                    <div>
                                        <UploadProfilePic
                                            updateValue={updateValue}
                                            formData={formData}
                                        />
                                        <div className="flex items-center mt-8">
                                            <input
                                                type="checkbox"
                                                name="agreeToPrivacy"
                                                id="agreeToPrivacy"
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
                                    </div>
                                )}
                            </Panel>
                            <div className="flex w-full justify-end py-2">
                                <Button
                                    onClick={onNext}
                                    disabled={step === 3}
                                    title="Continue"
                                    btnClass={`h-8 mr-5 rounded-r ${
                                        step === 2 ? 'hidden' : ''
                                    }`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewAgent;
