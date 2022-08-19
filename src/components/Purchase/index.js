import React from 'react';
import { PaystackButton } from 'react-paystack';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { Message, toaster } from 'rsuite';
import { updateInstance } from '../../state/slices/shop/settings/genApi';
import { handlePaymentSuccess } from '../../state/slices/shop/settings/payment';

const Purchase = ({ x_name, price, xtra, gift, memory, shopData }) => {
    const disPatch = useDispatch();
    const savePayment = (payload, item) => {
        console.log(item);
        handlePaymentSuccess(disPatch, {
            ...payload,
            shopID: shopData.data._id,
        });
        alert('Thanks for doing business with us! Come back soon!!');
        let sep = xtra.split(' ');
        if (sep[1].toLowerCase() === 'brand') {
            sep[1] = 'brands';
        }
        if (sep[1].toLowerCase() === 'category') {
            sep[1] = 'categories';
        }
        if (sep[1].toLowerCase() === 'product') {
            sep[1] = 'products';
        }
        const updatePayload = {
            id: shopData.id,
            number: parseInt(sep[0]),
            useCase: sep[1].toLowerCase(),
            operator: '+',
            option: 'xtra',
        };
        disPatch(updateInstance(updatePayload))
            .then(unwrapResult)
            .then((res) => {
                toaster.push(
                    <Message showIcon type={res.type}>
                        {res.message}
                    </Message>,
                    {
                        placement: 'topEnd',
                    }
                );
            });
    };
    const componentProps = {
        email: shopData.data.shopEmail,
        amount: 0,
        name: shopData.data.shopName,
        currency: 'NGN',
        firstname: shopData.data.shopName,
        phone: shopData.data.shopLine,
        metadata: {
            name: shopData.data.shopName,
            phone: shopData.data.shopLine,
        },
        item: 'dss',
        publicKey: 'pk_test_0b4537f09ca0e3bef10015f41440b242d75757e9',
        text: 'Purchase',
    };
    return (
        <div className="shadow-sm text-center h-80 py-8 bg-slate-800 rounded-lg my-6 mx-3 min-w-[270px] sm:w-48 md:w-68 hover:shadow-lg px-4">
            <h2 className="font-black text-xl text-white">{x_name}</h2>
            <br />
            <h3 className="text-slate-400">Only for &#x20A6; {price}</h3>

            <h4 className="text-slate-400">{xtra}</h4>

            {/* <button className="bg-slate-100 border rounded-lg h-8 w-36 mt-12">
                <PaystackButton
                    {...{
                        ...componentProps,
                        amount: price * 100,
                        item: xtra,
                        onSuccess: (payload) => savePayment(payload, xtra),
                        onClose: () => alert("Wait! Don't leave :("),
                    }}
                />
            </button> */}
            <br />

            <p className="text-xs mt-8 text-slate-400">
                This {x_name} choice offers {gift} {memory} of memory For free
            </p>
        </div>
    );
};

export default Purchase;
