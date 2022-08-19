import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';
import martApi from '../../../api/baseApi';

export const myPaymentRef = createAsyncThunk(
    'post/paymentRef',
    async (payload) => {
        const { data } = await martApi
            .post('/saveShopPayment', payload, {})
            .then((e) => {
                return e;
            })
            .catch((e) => {
                return e.response;
            });
        return data;
    }
);

export const handlePaymentSuccess = (dispatch, payload) => {
    dispatch(myPaymentRef(payload))
        .then(unwrapResult)
        .then((res) => {
            if (res.type === 'Transaction was successful') {
                toaster.push(
                    <Message showIcon type={res.type}>
                        {res.message}
                    </Message>,
                    {
                        placement: 'topEnd',
                    }
                );
            }
        })
        .catch((e) => {
            console.log(e);
        });
};
/*





*/
export const getRefApi = createAsyncThunk(
    'post/paymentRef',
    async (payload) => {
        const { data } = await martApi
            .post('/getMyReference', payload, {})
            .then((e) => {
                return e;
            })
            .catch((e) => {
                return e.response;
            });
        console.log(data);
        return data;
    }
);

export const getReference = (dispatch, payload, setData) => {
    dispatch(getRefApi(payload))
        .then(unwrapResult)
        .then((res) => {
            if (res.type === 'success') {
                console.log(res);
                setData(res.message);
            }
        })
        .catch((e) => {});
};
