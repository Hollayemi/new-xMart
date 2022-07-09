import React, { useState } from 'react';
import { FaUser, FaUserEdit } from 'react-icons/fa';
import {
    DatePicker,
    IconButton,
    Panel,
    Radio,
    RadioGroup,
    SelectPicker,
} from 'rsuite';
import PickupImage from '../../../assets/images/png/Pickup.png';
import InputGroup from '../../../components/elements/Input/InputGroup';
const Pickup = () => {
    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState({
        AccountName: '',
        Account_Number: '',
        Bank: '',
        Phone_number: '',
    });
    const styles = {
        radioGroupLabel: {
            padding: '8px 2px 8px 10px',
            display: 'inline-block',
            verticalAlign: 'middle',
        },
    };
    let newValue = {};
    function updateValue(newVal, variable) {
        variable === 'name' && (newValue = { AccountName: newVal });
        variable === 'acc_num' && (newValue = { Account_Number: newVal });
        variable === 'bank' && (newValue = { Bank: newVal });
        variable === 'phone' && (newValue = { Phone_number: newVal });

        setFormData({
            ...formData,
            ...newValue,
        });
    }
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);
    const [step, setStep] = useState(0);
    const onChange = (nextStep) => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };
    return (
        <section className="bg-white overflow-x-auto">
            <div className="flex flex-col min-w-[270px] md:justify-center md:justify-evenly md:flex-row mx-1 md:mx-5 my-6 rounded-md">
                <div className="flex justify-center w-full mb-6 md:mb-2 md:w-2/5">
                    <img src={PickupImage} alt={'nairaImage'} width="h-auto" />
                </div>
                <div className="w-full md:w-3/5 max-w-[450px] min-h-[500px]">
                    <h3 className="border-b w-full leading-10 text-md px-3 flex justify-between items-center px-5 text-sm">
                        <p>Account Information</p>
                        <i
                            onClick={() => setEdit(!edit)}
                            className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-200"
                        >
                            <FaUserEdit />
                        </i>
                    </h3>
                    <div className="mt-10">
                        <Panel header={`Step: ${step + 1}`}>
                            {step === 0 && (
                                <>
                                    <div className="flex flex-col sm:flex-row w-full">
                                        <div className=" w-full md:w-2/4 m-1">
                                            <DatePicker
                                                size="lg"
                                                placeholder="D.O.B"
                                                className="w-full bg-slate-100"
                                            />
                                        </div>
                                        <div className="w-full sm:w-2/4 m-1">
                                            <RadioGroup
                                                name="radioList"
                                                inline
                                                size="lg"
                                                appearance="picker"
                                                defaultValue="male"
                                                className="w-full bg-slate-100"
                                            >
                                                <span
                                                    style={
                                                        styles.radioGroupLabel
                                                    }
                                                >
                                                    Gender:{' '}
                                                </span>
                                                <Radio value="male">Male</Radio>
                                                <Radio value="C">Femele</Radio>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                    <div className="fle flex-col sm:flex-rowfull">
                                        <div className="w-full mt-4">
                                            <InputGroup
                                                label={'BVN'}
                                                value={formData.buzz_email}
                                                placeholder=" "
                                                required={true}
                                                onChange={(e) =>
                                                    updateValue(
                                                        e.target.value,
                                                        'buzz_email'
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                            {step === 1 && (
                                <>
                                    <div className="flex flex-col sm:flex-row w-full">
                                        <div className="w-full sm:w-2/4 m-1">
                                            <SelectPicker
                                                data={[]}
                                                className="w-full bg-slate-100"
                                                size="lg"
                                                placeholder="Please select your profession "
                                            />
                                        </div>
                                        <div className="w-full sm:w-2/4 m-1">
                                            <SelectPicker
                                                data={[]}
                                                className="w-full bg-slate-100"
                                                size="lg"
                                                placeholder="salary range "
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row full mt-4">
                                        <div className="w-full sm:w-2/4 m-1">
                                            <SelectPicker
                                                data={[]}
                                                className="w-full bg-slate-100"
                                                size="lg"
                                                placeholder="Your highest degree"
                                            />
                                        </div>
                                        <div className="w-full sm:w-2/4 m-1">
                                            <SelectPicker
                                                data={[]}
                                                className="w-full bg-slate-100"
                                                size="lg"
                                                placeholder="Job status"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row full mt-4">
                                        <div className="w-full sm:w-2/4 m-1">
                                            <SelectPicker
                                                data={[]}
                                                className="w-full bg-slate-100"
                                                size="lg"
                                                placeholder="Marital status"
                                            />
                                        </div>
                                        <div className="w-full sm:w-2/4 m-1">
                                            <SelectPicker
                                                data={[]}
                                                className="w-full bg-slate-100"
                                                size="lg"
                                                placeholder="Job status"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row full mt-4">
                                        <div className="w-full sm:w-2/4 m-1">
                                            <SelectPicker
                                                data={[]}
                                                className="w-full bg-slate-100"
                                                size="lg"
                                                placeholder="State"
                                            />
                                        </div>
                                        <div className="w-full sm:w-2/4 m-1">
                                            <SelectPicker
                                                data={[]}
                                                className="w-full bg-slate-100"
                                                size="lg"
                                                placeholder="L.G.A"
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <InputGroup
                                        label=" "
                                        placeholder="Address in full "
                                        value={formData.buzz_location}
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
                                <div className="flex flex-col sm:flex-row full mt-4">
                                    <IconButton
                                        appearance="primary"
                                        color="green"
                                        icon={<FaUser />}
                                    >
                                        Component
                                    </IconButton>
                                    <SelectPicker
                                        data={[]}
                                        className="w-full bg-slate-100"
                                        size="lg"
                                        placeholder=""
                                    />
                                    <div className="w-full sm:w-2/4 m-1">
                                        <SelectPicker
                                            data={[]}
                                            className="w-full bg-slate-100"
                                            size="lg"
                                            placeholder="L.G.A"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={onPrevious}
                                    disabled={step === 0}
                                >
                                    Previous
                                </button>
                                <button onClick={onNext} disabled={step === 3}>
                                    Next
                                </button>
                            </div>
                        </Panel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pickup;
