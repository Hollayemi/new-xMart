import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';
import martApi from '../api/baseApi';
import { REQUEST_STATUS } from '../constants';
import { otpHandler } from './setOtp';

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

export const shopConfig = createAsyncThunk(
    'post/shopInstance',
    async (payload) => {
        console.log(payload);
        const { data } = await martApi
            .post('/default', { payload }, {})
            .then((e) => {
                console.log(e, 'Then');
                return e;
            })
            .catch((e) => {
                console.log(e.response, 'catch');
                return e.response;
            });
        return data;
    }
);

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

/*


*/

export const createHandler = (payload, dispatch, navigate) => {
    dispatch(addShop(payload))
        .then(unwrapResult)
        .then((shop_res) => {
            console.log(shop_res);
            if (shop_res.type === 'success') {
                dispatch(otpHandler(shop_res.id))
                    .then(unwrapResult)
                    .then((res) => {
                        console.log(res);
                        toaster.push(
                            <Message showIcon type={res.type}>
                                {res.message.replace('buzz_', 'business ')}
                            </Message>,
                            {
                                placement: 'topEnd',
                            }
                        );
                        dispatch(shopConfig(shop_res.id))
                            .then(unwrapResult)
                            .then((config) => {
                                console.log(config);
                                if (config.type === 'success') {
                                    navigate('/seller/dashboard');
                                }
                            });
                    });
            } else {
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
