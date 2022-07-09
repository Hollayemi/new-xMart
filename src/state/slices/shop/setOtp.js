import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import martApi from '../api/baseApi';
import { REQUEST_STATUS } from '../constants';

export const otpHandler = createAsyncThunk(
    'post/otpHandler',
    async (payload) => {
        const { data } = await martApi
            .post(`/setOTP/${payload}`, {}, {})
            .then((res) => {
                return res;
            })
            .catch((e) => {
                console.log(e);
                return e.response;
            });
        return data;
    }
);

export const getOTP = createAsyncThunk('post/getotp', async (info) => {
    const { data } = await martApi
        .post(`/getOTP/${info.myId}`, { otp: info.code })
        .then((res) => {
            return res;
        })
        .catch((e) => {
            return e.response;
        });
    return data;
});

const initialState = {
    otpStatus: REQUEST_STATUS.NOT_VERIFIED,
    error: '',
    otpData: { id: '', message: [] },
};

const setOtp = createSlice({
    name: 'newOtp',
    initialState,
    reducers: {
        defaultOTP: (state, { payload }) => {
            // state.wasGoing = payload;
            return { ...initialState, wasGoing: REQUEST_STATUS.NOT_VERIFIED };
        },
    },
    extraReducers: {
        [otpHandler.pending]: (state) => {
            return { ...initialState, otpStatus: REQUEST_STATUS.PENDING };
        },
        [otpHandler.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                SetOTP: payload,
                otpStatus: REQUEST_STATUS.NOT_VERIFIED,
            };
        },
        [otpHandler.rejected]: (state) => {
            return { ...initialState, otpStatus: REQUEST_STATUS.REJECTED };
        },

        //
        //
        [getOTP.pending]: () => {
            return { ...initialState, otpStatus: REQUEST_STATUS.PENDING };
        },
        [getOTP.fulfilled]: (state, { payload }) => {
            if (payload.message === 'matched') {
                return {
                    ...initialState,
                    otpData: payload,
                    otpStatus: REQUEST_STATUS.VERIFIED,
                };
            } else {
                return {
                    ...initialState,
                    error2: payload,
                    otpStatus: REQUEST_STATUS.FULFILLED,
                };
            }
        },
        [getOTP.rejected]: (state) => {
            return { ...initialState, otpStatus: REQUEST_STATUS.REJECTED };
        },
    },
});

export const { setOTP, defaultOTP } = setOtp.actions;
export default setOtp.reducer;
