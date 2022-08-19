import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';
import martApi from '../../api/baseApi';
import { otpHandler } from '../setOtp';

export const editShopAuth = createAsyncThunk(
    'post/editShopAuth',
    async (payload) => {
        const { data } = await martApi
            .put('/editShopAuth', payload.body, {})
            .then((e) => {
                console.log(e, 'Then');
                return e;
            })
            .catch((e) => {
                console.log(e, 'catch');
                return e.response;
            });
        return data;
    }
);

export const editOtpHandler = (payload, dispatch) => {
    dispatch(editShopAuth(payload))
        .then(unwrapResult)
        .then((shop_res) => {
            console.log(shop_res);
            if (shop_res.type === 'success') {
                dispatch(otpHandler(payload.body.shopID))
                    .then(unwrapResult)
                    .then((res) => {
                        console.log(res);
                    });
                toaster.push(
                    <Message showIcon type={shop_res.type}>
                        {shop_res.message}
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

//
//
//
//
//
//
//
//
export const editShopInfo = createAsyncThunk(
    'post/editShopInfo',
    async (payload) => {
        const { data } = await martApi
            .put('/editShopInfo', payload, {})
            .then((e) => {
                console.log(e, 'Then');
                return e;
            })
            .catch((e) => {
                console.log(e, 'catch');
                return e.response;
            });
        console.log(data);
        return data;
    }
);

//
export const editShopHandler = (dispatch, payload) => {
    console.log(payload);
    dispatch(editShopInfo(payload))
        .then(unwrapResult)
        .then((shop_res) => {
            console.log(shop_res);
            if (shop_res.type === 'success') {
                toaster.push(
                    <Message showIcon type={shop_res.type}>
                        {shop_res.message}
                    </Message>,
                    {
                        placement: 'topEnd',
                    }
                );
                // window.location.reload();
            }
        })
        .catch((e) => {
            console.log(e);
        });
};
