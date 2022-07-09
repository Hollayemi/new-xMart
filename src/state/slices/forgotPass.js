import { createSlice, createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../constants';
import martApi from '../api/baseApi';
import { Message, toaster } from 'rsuite';

const forgotPass = createAsyncThunk('post/forgotPassword', async (payload) => {
    const { data } = await martApi
        .post('/forgot-pass/', payload, {})
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err.response;
        });

    return data;
});

export const forgotPassHandler = (formData, dispatch) => {
    dispatch(forgotPass(formData))
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
        })
        .catch((err) => {
            console.log(err.response);
        });
};
