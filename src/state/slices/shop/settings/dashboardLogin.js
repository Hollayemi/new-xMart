import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';
import martApi from '../../api/baseApi';
import { getOTPhandler } from '../setOtp';

export const dashBoardLogin = createAsyncThunk(
    'post/dashboardLogin',
    async (payload) => {
        const { data } = await martApi
            .post('/dashboardLogin', payload.body, {})
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err.response;
            });
        return data;
    }
);

export const dasboardLoginHandler = (payload, dispatch) => {
    dispatch(dashBoardLogin(payload))
        .then(unwrapResult)
        .then((res) => {
            let payload2 = {
                info: {
                    login: res.type,
                    otp: '08908',
                },
                myId: payload.body.shopID,
            };
            if (res.type === 'success') {
                dispatch(getOTPhandler(dispatch, payload2));
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
            console.log(e.response);
        });
};
