import { Message, toaster } from 'rsuite';
import React, { useEffect, useState } from 'react';
import { FaAddressBook, FaPhoneAlt, FaTrash, FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import DividerPanel from '../../../components/elements/DividerPanel';
import FloatingLabelInput from '../../../components/elements/Input/FloatingLabelInput';
import TextAreaGroup from '../../../components/elements/Input/TextAreaGroup';
import { deleteAddress, newAddress } from '../../../state/slices/home/checkout';
import { getAllAddress } from '../../../state/slices/home/checkout/fetch';

const AddressBook = ({ userId, setAddress, openAdd, setOpenAdd }) => {
    const [leaveMessage, setLeaveMessage] = useState(false);
    const [allMessages, setMessages] = useState([]);
    const [selectedAdd, setSeletedAdd] = useState(null);
    useEffect(() => {
        let payload = {
            body: {
                userId: userId,
            },
        };
        getAllAddress(payload, dispatch, setMessages);
    }, []);

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        surname: '',
        address: '',
        city: '',
        postal_code: '',
        state: '',
        phone_number: '',
    });

    let newValue = {};
    function updateValue(newVal, variable) {
        variable === 'first_name' && (newValue = { first_name: newVal });
        variable === 'last_name' && (newValue = { last_name: newVal });
        variable === 'surname' && (newValue = { surname: newVal });
        variable === 'address' && (newValue = { address: newVal });
        variable === 'city' && (newValue = { city: newVal });
        variable === 'state' && (newValue = { state: newVal });
        variable === 'postal_code' && (newValue = { postal_code: newVal });
        variable === 'phone_number' && (newValue = { phone_number: newVal });

        setFormData({
            ...formData,
            ...newValue,
            userId: userId,
        });
    }
    const dispatch = useDispatch();
    const newAddressHandler = () => {
        let payload = {
            body: formData,
        };
        newAddress(payload, dispatch);
    };

    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {allMessages.length > 0 &&
                    allMessages.map((res, index) => {
                        return (
                            <Address
                                key={index}
                                selectedAdd={selectedAdd}
                                setSeletedAdd={setSeletedAdd}
                                name={
                                    res.surname +
                                    ' ' +
                                    res.first_name +
                                    ' ' +
                                    res.last_name
                                }
                                address={res.address}
                                phone={res.phone_number}
                                index={index}
                                id={res._id}
                                userId={userId}
                                setAddress={setAddress}
                                res={res}
                            />
                        );
                    })}
            </div>
            <DividerPanel text="New Address" />
            <div>
                <p className="text-sm font-[200] mb-3 text-slate-600 mt-4">
                    Personal Details
                </p>
                <div className="flex items-center">
                    <div className="w-1/2 px-2">
                        <FloatingLabelInput
                            required={true}
                            label="Surname"
                            onChange={(e) =>
                                updateValue(e.target.value, 'surname')
                            }
                        />
                    </div>
                    <div className="w-1/2 px-2">
                        <FloatingLabelInput
                            required={true}
                            label="First Name"
                            onChange={(e) =>
                                updateValue(e.target.value, 'first_name')
                            }
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-1/2 px-2">
                        <FloatingLabelInput
                            required={true}
                            label="Last Name"
                            onChange={(e) =>
                                updateValue(e.target.value, 'last_name')
                            }
                        />
                    </div>
                    <div className="w-1/2 px-2">
                        <FloatingLabelInput
                            required={true}
                            label="Phone Number"
                            type="number"
                            onChange={(e) =>
                                updateValue(e.target.value, 'phone_number')
                            }
                        />
                    </div>
                </div>
                <p className="text-sm font-[200] text-slate-600 mb-3 mt-4">
                    Shipping Details
                </p>
                <FloatingLabelInput
                    required={true}
                    label="Address"
                    onChange={(e) => updateValue(e.target.value, 'address')}
                />
                <div className="flex items-center">
                    <div className="w-1/2 px-2">
                        <FloatingLabelInput
                            required={true}
                            type="number"
                            label="Zip-code"
                            onChange={(e) =>
                                updateValue(e.target.value, 'postal_code')
                            }
                        />
                    </div>
                    <div className="w-1/2 px-2">
                        <FloatingLabelInput
                            required={true}
                            label="City"
                            onChange={(e) =>
                                updateValue(e.target.value, 'city')
                            }
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-1/2 px-2">
                        <FloatingLabelInput
                            required={true}
                            label="State"
                            onChange={(e) =>
                                updateValue(e.target.value, 'state')
                            }
                        />
                    </div>
                    <div className="w-1/2 -mt-7 px-2">
                        <div className="flex items-center mt-8">
                            <input
                                type="checkbox"
                                name="agreeToPrivacy"
                                id="agreeToPrivacy"
                                checked={leaveMessage}
                                onChange={() => setLeaveMessage(!leaveMessage)}
                            />
                            <label htmlFor="agreeToPrivacy" className="px-2">
                                Leave a message
                            </label>
                        </div>
                    </div>
                </div>
                <div className={`${leaveMessage ? 'block' : 'hidden'}`}>
                    <TextAreaGroup label=" " placeholder="Tell us something" />
                </div>
                <div className="flex justify-end px-4 mt-5">
                    <button
                        onClick={() => setOpenAdd(!openAdd)}
                        className="w-20 h-10 bg-slate-50 border rounded-md mr-4"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={newAddressHandler}
                        className="w-20 h-10 bg-green-600 text-white font-[400] border rounded-md"
                    >
                        Save
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AddressBook;

export const Address = ({
    selectedAdd,
    setSeletedAdd,
    name,
    phone,
    address,
    index,
    id,
    userId,
    setAddress,
    res,
}) => {
    const dispatch = useDispatch();
    const payload = {
        body: {
            _id: id,
            userId: userId,
        },
    };
    const setAll = () => {
        setSeletedAdd(index);
        setAddress(res);
        toaster.push(
            <Message showIcon type="success">
                Selected
            </Message>,
            {
                placement: 'topEnd',
            }
        );
    };
    return (
        <div
            onClick={setAll}
            className={`w-11/12 px-2 ${
                selectedAdd === index ? 'border-slate-400' : 'border-slate-200'
            } pb-2 border rounded-t-md m-3 cursor-pointer relative`}
        >
            <div
                className={`flex px-2 justify-between items-center h-10 py-2 border-b ${
                    selectedAdd === index
                        ? 'border-slate-400'
                        : 'border-slate-200'
                }`}
            >
                <h5>Address 1</h5>
                <div
                    className={`flex ${
                        selectedAdd === index && 'shadow-md'
                    } items-center bg-slate-100 rounded-sm px-3`}
                >
                    <div
                        className={`w-3 h-3 mr-2 rounded-full ${
                            selectedAdd === index
                                ? 'bg-slate-800'
                                : 'bg-slate-300'
                        } bg-gray-300 border`}
                    ></div>
                    <h5>Choose</h5>
                </div>
            </div>
            <div className="h-32">
                <div className="px-2">
                    <h5 className="flex my-2 items-center">
                        <FaUser /> <span className="ml-4">{name}</span>
                    </h5>
                    <h5 className="flex my-2 ">
                        <FaAddressBook className="mt-2" />{' '}
                        <span className="ml-4">{address}</span>
                    </h5>
                    <h5 className="flex my-2 items-center">
                        <FaPhoneAlt /> <span className="ml-4">{phone}</span>
                    </h5>
                </div>
            </div>
            <i
                onClick={() => deleteAddress(payload, dispatch, setSeletedAdd)}
                className="absolute right-2 bottom-3 w-8 h-8 rounded-full flex items-center justify-center border"
            >
                <FaTrash />
            </i>
        </div>
    );
};
