import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import martApi from '../../api/baseApi';
import { REQUEST_STATUS } from '../constants';

export const addShop = createAsyncThunk('post/addNewShop', async (payload) => {
    const { data } = await martApi
        .post('/newBusiness', { payload }, {})
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
    name: 'newShop',
    initialState,
    reducers: {},
    extraReducers: {
        [addShop.pending]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.PENDING };
        },
        [addShop.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                shopData: payload,
                status: REQUEST_STATUS.FULFILLED,
            };
        },
        [addShop.rejected]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.REJECTED };
        },

        //
        //
        [getShopInfo.pending]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.PENDING };
        },
        [getShopInfo.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                shopData: payload,
                status: REQUEST_STATUS.FULFILLED,
            };
        },
        [getShopInfo.rejected]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.REJECTED };
        },
    },
});

export const { setShop } = addNewShop.actions;
export default addNewShop.reducer;
