import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'rsuite';
import InputAddon from '../../../../components/elements/Input/InputAddon';
import InputGroup from '../../../../components/elements/Input/InputGroup';
import { editOtpHandler } from '../../../../state/slices/shop/settings/editShop';

const EntryMode = ({ neededInfo }) => {
    const [mode, setMode] = useState('otp');
    const [formData, setFormData] = useState({ entryPass: '', entryUname: '' });
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    let newValue = {};
    const updateValue = (newVal, variable) => {
        variable === 'username' && (newValue = { entryUname: newVal });
        variable === 'password' && (newValue = { entryPass: newVal });

        setFormData({
            ...formData,
            ...newValue,
        });
    };
    const dispatch = useDispatch();
    const editModeHandler = (getMode) => {
        let payload = {
            body: {
                data: {
                    ...formData,
                    entryMode: getMode,
                },
                shopID: neededInfo.shopData.id,
                message: 'switched to ' + getMode + ' entry mode',
            },
        };

        setMode(getMode);
        editOtpHandler(payload, dispatch);
    };
    return (
        <section className="bg-white px-5 lg:w-[calc(100%-280px)] h-[70vh] w-full min-w-[80px] overflow-auto">
            <div className="mt-5 w-full min-w-[250px] font-bold flex justify-between text-md">
                Mode of entry <span>( {mode.toUpperCase()} )</span>
            </div>
            <div className="mt-10 w-full min-w-[140px]">
                <div className="flex items-center -mt-4">
                    <input
                        type="checkbox"
                        name="setOtp"
                        id="setOtp"
                        checked={mode === 'otp'}
                        onChange={() => editModeHandler('otp')}
                    />
                    <label htmlFor="setOtp" className="px-2">
                        Use OTP <span className="ml-3">(default)</span>
                    </label>
                </div>
            </div>

            <div className="mt-10 w-full min-w-[240px]">
                <div className="flex items-center -mt-4">
                    <input
                        type="checkbox"
                        name="setPassword"
                        id="setPassword"
                        checked={mode === 'password'}
                        onChange={() => setMode('password')}
                    />
                    <label htmlFor="setPassword" className="px-2">
                        Use Password
                    </label>
                </div>
            </div>
            {mode === 'password' && (
                <div className="w-[280px] md:w-[320px]">
                    <div className="my-4 flex flex-col items-stretch pt-4">
                        <Row>
                            <InputGroup
                                label="new username"
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
                                icon={showPassword ? 'hide' : 'show'}
                                label="new password"
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
                                onClick={(e) => editModeHandler('password')}
                            >
                                Save
                            </button>
                        </Row>
                    </div>
                </div>
            )}
        </section>
    );
};

export default EntryMode;
