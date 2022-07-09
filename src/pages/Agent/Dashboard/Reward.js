import React, { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import onlinePayment from '../../../assets/images/png/onlinePayment.png';
import InputGroup from '../../../components/elements/Input/InputGroup';
import Footer from '../../../components/websiteCompoents/Footer';
const Reward = ({ data }) => {
    console.log(data);
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
        <section className="bg-white overflow-x-auto">
            <div className="flex flex-col min-w-[270px] md:flex-row mx-1 md:mx-5 my-6 rounded-md">
                <div className="flex justify-center w-full mb-6 md:mb-2 md:w-2/5">
                    <img src={onlinePayment} alt={'nairaImage'} />
                </div>
                <div className="w-full md:w-3/5 max-w-[450px]">
                    <h3 className="border-b w-full leading-10 text-md px-3 flex justify-between items-center px-5 text-sm">
                        <p>Account Information</p>
                        <i
                            onClick={() => setEdit(!edit)}
                            className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300"
                        >
                            <FaUserEdit />
                        </i>
                    </h3>
                    <div className="mt-10">
                        <div className="flex items-center mt-4">
                            <div className="w-full md:w-1/2 px-2">
                                <InputGroup
                                    label="Account name"
                                    name="acc_name"
                                    placeholder=" "
                                    disabled={!edit}
                                    required={edit}
                                    value={data.message.account_name}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'name')
                                    }
                                />
                            </div>

                            <div className="w-full md:w-1/2 px-2">
                                <InputGroup
                                    label="Account Number"
                                    name="acc_num"
                                    placeholder=" "
                                    disabled={!edit}
                                    required={edit}
                                    value={data.message.account_number}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'acc_num')
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex items-center mt-4">
                            <div className="w-full md:w-1/2 px-2">
                                <InputGroup
                                    label="Bank"
                                    name="bank"
                                    placeholder=" "
                                    disabled={!edit}
                                    required={edit}
                                    value={data.message.bank_name}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'bank')
                                    }
                                />
                            </div>

                            <div className="w-full md:w-1/2 px-2">
                                <InputGroup
                                    label="Phone Number"
                                    name="phone"
                                    placeholder=" "
                                    disabled={!edit}
                                    required={edit}
                                    value={data.message.phone}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'phone')
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
            <Footer />
        </section>
    );
};

export default Reward;
