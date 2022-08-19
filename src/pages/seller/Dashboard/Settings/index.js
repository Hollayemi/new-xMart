import React, { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Store from '../../../../assets/images/png/my store.png';
import InputGroup from '../../../../components/elements/Input/InputGroup';
import { editShopHandler } from '../../../../state/slices/shop/settings/editShop';
const Setting = ({ neededInfo }) => {
    const { shopData } = useSelector((state) => state.reducer.setShopReducer);
    const [edit, setEdit] = useState(false);
    console.log(shopData);
    const [formData, setFormData] = useState({
        shopName: shopData.data.shopName,
        shopEmail: shopData.data.shopEmail,
        shopLine: shopData.data.shopLine,
        street: shopData.data.Location[0].street,
        city: shopData.data.Location[0].city,
        state: shopData.data.Location[0].state,
        postalCode: shopData.data.Location[0].postalCode,
        landmark: shopData.data.Location[0].landmark,
    });

    let newValue = {};
    function updateValue(newVal, variable) {
        variable === 'shop_name' && (newValue = { shopName: newVal });
        variable === 'buzz_email' && (newValue = { shopEmail: newVal });
        variable === 'buzz_line' && (newValue = { shopLine: newVal });
        variable === 'Location' && (newValue = { street: newVal });
        variable === 'buzz_city' && (newValue = { city: newVal });
        variable === 'buzz_state' && (newValue = { state: newVal });
        variable === 'buzz_postal' && (newValue = { postalCode: newVal });
        variable === 'buzz_landmark' && (newValue = { landmark: newVal });

        setFormData({
            ...formData,
            ...newValue,
        });
    }
    const dispatch = useDispatch();
    const payload = {
        data: {
            ...formData,
        },
        shopID: shopData.data._id,
    };

    const editShopInfo = () => {
        editShopHandler(dispatch, payload);
    };
    return (
        <section className="bg-white overflow-x-auto lg:w-[calc(100%-280px)]">
            <div className="flex flex-col min-w-[270px] items-center mx-1 md:mx-5 my-6 rounded-md">
                <div className="flex justify-center w-full mb-6 md:mb-2 md:w-2/5">
                    <img src={Store} alt={'nairaImage'} />
                </div>
                <div className="w-full md:w-4/5">
                    <h3 className="border-b w-full leading-10 text-md px-3 flex justify-between items-center px-5 text-sm">
                        <p>Store Information</p>
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
                                    name="buzz_name"
                                    value={formData.shopName}
                                    placeholder=" "
                                    disabled={!edit}
                                    required={edit}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'shop_name')
                                    }
                                />
                            </div>

                            <div className="w-full md:w-2/3 px-2">
                                <InputGroup
                                    label="Business Email"
                                    name="buzz_email"
                                    placeholder=" "
                                    value={formData.shopEmail}
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
                                    value={formData.shopLine}
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
                                    value={formData.state}
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
                                    value={formData.city}
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
                                    value={formData.postalCode}
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
                                    value={formData.landmark}
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
                                    value={formData.street}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'Location')
                                    }
                                />
                            </div>
                        </div>
                        <div className="px-4">
                            <button
                                disabled={!edit}
                                onClick={editShopInfo}
                                className="w-full h-10 rounded-md shadow text-white text-lg bg-slate-800"
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
