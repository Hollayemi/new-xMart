import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';
import martApi from '../api/baseApi';
import { REQUEST_STATUS } from '../constants';
import { otpHandler } from './setOtp';

export const editShop = createAsyncThunk('post/addNewShop', async (payload) => {
    const { data } = await martApi
        .post('/editShop', { payload }, {})
        .then((e) => {
            console.log(e, 'Then');
            return e;
        })
        .catch((e) => {
            console.log(e, 'catch');
            return e.response;
        });
    return data;
});

export const getShopInfo = createAsyncThunk(
    'post/getShopInfo',
    async (payload) => {
        const { data } = await martApi
            .post(
                '/getShopInfo/' + payload.id,
                {},
                {
                    headers: {
                        token: payload.auth.token,
                    },
                }
            )
            .then((e) => {
                return e;
            })
            .catch((e) => {
                return e.response;
            });
        return data;
    }
);

const initialState = {
    shopData: {},
    status: 'idle',
    error: '',
};

const addNewShop = createSlice({
    name: 'editShop',
    initialState,
    reducers: {},
    extraReducers: {
        [editShop.pending]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.PENDING };
        },
        [editShop.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                shopData: payload,
                status: REQUEST_STATUS.FULFILLED,
            };
        },
        [editShop.rejected]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.REJECTED };
        },
    },
});

export const { setShop } = addNewShop.actions;
export default addNewShop.reducer;

/*


*/

export const editHandler = (payload, dispatch) => {
    dispatch(editShop(payload))
        .then(unwrapResult)
        .then((shop_res) => {
            console.log(shop_res);
            if (shop_res.type === 'success') {
                toaster.push(
                    <Message showIcon type={shop_res.type}>
                        {shop_res.message.replace('buzz_', 'business ')}
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
