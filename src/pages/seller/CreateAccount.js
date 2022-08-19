import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Steps, Panel } from 'rsuite';
import Button from '../../components/elements/Button';
import InputGroup from '../../components/elements/Input/InputGroup';
import ProfiePreview, {
    KemonCategories,
} from '../../components/SellerComponents/ProfiePreview';
import { FaAngleLeft } from 'react-icons/fa';
import UploadProfilePic from '../../components/websiteCompoents/UploadFile/uploadProfilePic';
import ModalPanel from '../../components/elements/ModalPanel';
//stateManagement
import { createHandler } from '../../state/slices/shop/addShop';
import { useDispatch, useSelector } from 'react-redux';

//
//

//
//

export const FieldAdded = ({ title, value }) => {
    return (
        <h5 className="my-1">
            {title}:<p className="my-1 ml-2 text-orange-500">{value}</p>
        </h5>
    );
};

const NewPage = () => {
    let { level } = useParams();
    let levele = '';
    // eslint-disable-next-line no-lone-blocks
    {
        level === 'new' ? (levele = '') : (levele = level);
    }

    const [formData, setFormData] = useState({
        shopNick: '',
        shopName: levele,
        shopEmail: '',
        shopLine: '',
        street: '',
        city: '',
        postalCode: '',
        state: '',
        landmark: '',
        Category: '',
        accept_order: true,
    });
    const [Category, setCategory] = useState([]);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [allowRegister, setAllowRegister] = useState(false);
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);

    const setCloseModal = () => {
        setAgreedToTerms(!agreedToTerms);
        setAllowRegister(true);
    };

    let newValue = {};
    const updateValue = (newVal, variable) => {
        // eslint-disable-next-line no-lone-blocks
        {
            variable === 'shopNick' && (newValue = { shopNick: newVal });
            variable === 'shopName' && (newValue = { shopName: newVal });
            variable === 'shopEmail' && (newValue = { shopEmail: newVal });
            variable === 'shopLine' && (newValue = { shopLine: newVal });
            variable === 'buzz_loc' && (newValue = { street: newVal });
            variable === 'city' && (newValue = { city: newVal });
            variable === 'postalCode' && (newValue = { postalCode: newVal });
            variable === 'state' && (newValue = { state: newVal });
            variable === 'Category' && (newValue = { Category: newVal });
            variable === 'buzz_lndmk' && (newValue = { landmark: newVal });
            variable === 'do_order' && (newValue = { accept_order: newVal });
            variable === 'avatar' && (newValue = { avatar: newVal });
        }
        setFormData({
            ...formData,
            ...newValue,
        });
    };

    //
    //
    //
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.reducer.loginReducer.userData);
    // const getshopInfo = useSelector((state) => state.reducer.setShopReducer);
    //
    const submitButton = async () => {
        const payload = {
            ...formData,
            id: _id,
            isSelle: true,
            Category: Category,
        };
        createHandler(payload, dispatch, navigate);
    };
    //
    //
    //
    const [step, setStep] = useState(0);
    const onChange = (nextStep) => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };
    return (
        <section className="seller-bg-image min-h-screen">
            <div className="flex justify-evenly items-center w-full h-full bg-slate-900 bg-opacity-75  absolute top-0 left-0">
                <div className="flex md:w-full lg:w-5/6 justify-center">
                    <div className="block md:hidden">
                        <ModalPanel
                            title="Your Profile Preview"
                            children={
                                <ProfiePreview
                                    formData={formData}
                                    Category={Category}
                                />
                            }
                            hasBackdrop={true}
                            keyboard={true}
                            open={agreedToTerms}
                            closeButton={true}
                            buttonName="Nice!"
                            handleClose={setCloseModal}
                        />
                    </div>
                    <div className="bg-white shadow-xl rounded h-[560px] w-full min-w-[320px] md:w-1/2 p-2 md:p-4">
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
                                <Steps.Item />
                            </Steps>
                            <Panel header={`Step: ${step + 1}`}>
                                {step === 0 && (
                                    <>
                                        <div className="flex w-full">
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Store Name"
                                                    name="ownerName"
                                                    value={formData.shopNick}
                                                    placeholder="e.g xmart (a word)"
                                                    required={true}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'shopNick'
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Business Name"
                                                    value={formData.shopName}
                                                    placeholder=" "
                                                    required={true}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'shopName'
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="flex w-full">
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Business Email"
                                                    value={formData.shopEmail}
                                                    placeholder="e.g info@xmart.com "
                                                    required={true}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'shopEmail'
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Business Line"
                                                    placeholder="e.g 07010010000 "
                                                    value={formData.shopLine}
                                                    required={true}
                                                    type="number"
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'shopLine'
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                                {step === 1 && (
                                    <>
                                        <div className="flex w-full">
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="City"
                                                    name="ownerName"
                                                    value={formData.city}
                                                    placeholder=" "
                                                    required={true}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'city'
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="State"
                                                    value={formData.state}
                                                    placeholder=" "
                                                    required={true}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'state'
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="flex w-full">
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Postal Code"
                                                    value={formData.postalCode}
                                                    placeholder=" "
                                                    type="number"
                                                    required={true}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'postalCode'
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="w-2/4 m-1">
                                                <InputGroup
                                                    label="Landmark"
                                                    placeholder="e.g Opposite GTB bank "
                                                    value={formData.landmark}
                                                    required={true}
                                                    onChange={(e) =>
                                                        updateValue(
                                                            e.target.value,
                                                            'buzz_lndmk'
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <InputGroup
                                            label="Location"
                                            placeholder=" "
                                            value={formData.location}
                                            required={true}
                                            onChange={(e) =>
                                                updateValue(
                                                    e.target.value,
                                                    'buzz_loc'
                                                )
                                            }
                                        />
                                    </>
                                )}
                                {step === 2 && (
                                    <div className="h-[250px] w-[320px] md:w-[500px] md:h-[330px] relative myScroll">
                                        <KemonCategories
                                            setValue={setCategory}
                                            value={Category}
                                            max={2}
                                        />
                                    </div>
                                )}
                                {step === 3 && (
                                    <>
                                        <div>
                                            <UploadProfilePic
                                                updateValue={updateValue}
                                                formData={formData}
                                            />
                                        </div>
                                        <div className="flex items-center mt-8">
                                            <input
                                                type="checkbox"
                                                name="agreeToPrivacy"
                                                id="agreeToPrivacy"
                                                checked={allowRegister}
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
                                            disabled={
                                                agreedToTerms === allowRegister
                                            }
                                        />
                                    </>
                                )}
                            </Panel>
                            <div className="flex w-full justify-end py-2">
                                <Button
                                    onClick={onNext}
                                    disabled={step === 3}
                                    title="Continue"
                                    btnClass={`h-8 mr-5 rounded-r ${
                                        step === 3 ? 'hidden' : ''
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

export default NewPage;
