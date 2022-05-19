import React, { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import Store from '../../../../assets/images/png/my store.png';
import InputGroup from '../../../../components/elements/Input/InputGroup';
const Setting = () => {
    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState({
        AccountName: '',
        Account_Number: '',
        Bank: '',
        Phone_number: '',
    });
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
    return (
        <section className="bg-white overflow-x-auto lg:w-[calc(100%-280px)]">
            <div className="flex flex-col min-w-[270px] items-center mx-1 md:mx-5 my-6 rounded-md">
                <div className="flex justify-center w-full mb-6 md:mb-2 md:w-2/5">
                    <img src={Store} alt={'nairaImage'} />
                </div>
                <div className="w-full md:w-4/5">
                    <h3 className="border-b w-full leading-10 text-md px-3 flex justify-between items-center px-5 text-sm">
                        <p>Business Information</p>
                        <i
                            onClick={() => setEdit(!edit)}
                            className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-200"
                        >
                            <FaUserEdit />
                        </i>
                    </h3>
                    <div className="mt-10">
                        <div className="flex items-center mt-4">
                            <div className="w-full md:w-2/3 px-2">
                                <InputGroup
                                    label="Business Name"
                                    name="acc_name"
                                    placeholder=" "
                                    disabled={!edit}
                                    required={edit}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'name')
                                    }
                                />
                            </div>

                            <div className="w-full md:w-2/3 px-2">
                                <InputGroup
                                    label="Business Email"
                                    name="buzz_email"
                                    placeholder=" "
                                    disabled={!edit}
                                    required={edit}
                                    onChange={(e) =>
                                        updateValue(
                                            e.target.value,
                                            'buzz_email'
                                        )
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex items-center mt-4">
                            <div className="w-full md:w-2/3 px-2">
                                <InputGroup
                                    label="Business Line"
                                    name="buzz_line"
                                    placeholder=" "
                                    disabled={!edit}
                                    required={edit}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'buzz_line')
                                    }
                                />
                            </div>

                            <div className="w-full md:w-2/3 px-2">
                                <InputGroup
                                    label="State"
                                    name="State"
                                    placeholder=" "
                                    disabled={!edit}
                                    required={edit}
                                    onChange={(e) =>
                                        updateValue(
                                            e.target.value,
                                            'buzz_state'
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-full md:w-2/3 px-2">
                                <InputGroup
                                    label="City"
                                    name="buzz_city"
                                    placeholder=" "
                                    disabled={!edit}
                                    required={edit}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'buzz_city')
                                    }
                                />
                            </div>

                            <div className="w-full md:w-2/3 px-2">
                                <InputGroup
                                    label="Postal Code"
                                    name="Postal"
                                    placeholder=" "
                                    disabled={!edit}
                                    required={edit}
                                    onChange={(e) =>
                                        updateValue(
                                            e.target.value,
                                            'buzz_postal'
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-full md:w-2/3 px-2">
                                <InputGroup
                                    label="Landmark"
                                    name="Landmark"
                                    placeholder=" "
                                    disabled={!edit}
                                    required={edit}
                                    onChange={(e) =>
                                        updateValue(
                                            e.target.value,
                                            'buzz_landmark'
                                        )
                                    }
                                />
                            </div>

                            <div className="w-full md:w-2/3 px-2">
                                <InputGroup
                                    label="Location in full"
                                    name="Location"
                                    placeholder=" "
                                    disabled={!edit}
                                    required={edit}
                                    onChange={(e) =>
                                        updateValue(
                                            e.target.value,
                                            'buzz_location'
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className="px-4">
                            <button
                                disabled={!edit}
                                className="w-full h-10 rounded-md shadow text-white text-lg bg-blue-500"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Setting;
