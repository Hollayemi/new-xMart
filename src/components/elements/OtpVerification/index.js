import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getOTP } from '../../../state/slices/shop/setOtp';
import { unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';

const MyOtpModal = ({ title, note, otpPic, id }) => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [num4, setNum4] = useState('');

    const dispatch = useDispatch();
    const sendOtp = () => {
        const nums =
            num1.toString() +
            num2.toString() +
            num3.toString() +
            num4.toString();
        const info = { myId: id, code: nums };
        dispatch(getOTP(info))
            .then(unwrapResult)
            .then((res) => {
                toaster.push(
                    <Message showIcon type={res.type}>
                        {res.message.replace('buzz_', 'business ')}
                    </Message>,
                    {
                        placement: 'topStart',
                    }
                );
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <section>
            <div>
                <div>
                    <h4 className="font-bold text-lg text-slate-700">
                        {title}
                    </h4>
                    <p>{note}</p>
                    <div className="flex items-center justify-center mt-10 mb-5">
                        {/*  */}
                        <OtpInput
                            num={num1}
                            func={setNum1}
                            id="fir"
                            id2="sec"
                        />

                        <OtpInput
                            num={num2}
                            func={setNum2}
                            id="sec"
                            id2="thr"
                        />

                        <OtpInput
                            num={num3}
                            func={setNum3}
                            id="thr"
                            id2="las"
                        />

                        <OtpInput
                            num={num4}
                            func={setNum4}
                            id="las"
                            id2="fir"
                        />
                    </div>
                    <div className="flex justify-center mb-5">
                        <button
                            onClick={() => sendOtp()}
                            className="w-20 h-8 bg-blue-500 text-gray-100 shadow rounded"
                        >
                            Verify
                        </button>
                    </div>
                    <div>
                        <img src={otpPic} alt="otp" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const OtpInput = ({ func, num, id2, id }) => (
    <input
        type="number"
        className="w-10 hideArrow h-12 p-2 m-2 text-center text-2xl font-bold text-slate-600 border rounded-md focus:outline-none border-slate-600"
        placeholder={'*'}
        id={id}
        value={num}
        onChange={(e) => func(!num.length && e.target.value)}
        onKeyUp={() => num.length && document.getElementById(id2).focus()}
    />
);

export default MyOtpModal;
