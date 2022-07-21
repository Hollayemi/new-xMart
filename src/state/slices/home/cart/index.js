import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';
import martApi from '../../api/baseApi';
import { REQUEST_STATUS } from '../../constants';
import { FetchCartHandler, FetchSingle } from './fetchCart';

export const addCart = createAsyncThunk('post/myCart', async (payload) => {
    const { data } = await martApi
        .post('/cartProduct', payload.body, {})
        .then((e) => {
            return e;
        })
        .catch((e) => {
            return e.response;
        });
    return data;
});
export const myCart = createAsyncThunk('post/myCart', async (payload) => {
    const { data } = await martApi
        .post('/allMyCart', payload.body, {})
        .then((e) => {
            return e;
        })
        .catch((e) => {
            return e.response;
        });
    return data;
});
const initialState = {
    cartData: { message: [] },
    status: 'idle',
    error: '',
};

const addNewCart = createSlice({
    name: 'newShop',
    initialState,
    reducers: {},
    extraReducers: {
        [addCart.pending]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.PENDING };
        },
        [addCart.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                cartData: payload,
                status: REQUEST_STATUS.FULFILLED,
            };
        },
        [addCart.rejected]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.REJECTED };
        },

        /*


        */
        [myCart.pending]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.PENDING };
        },
        [myCart.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                cartData: payload,
                status: REQUEST_STATUS.FULFILLED,
            };
        },
        [myCart.rejected]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.REJECTED };
        },
    },
});

export const { setShop } = addNewCart.actions;
export default addNewCart.reducer;

/*


*/

export const cartHandler = (payload, dispatch, setHideCart) => {
    setHideCart('hidden');
    dispatch(addCart(payload))
        .then(unwrapResult)
        .then((res) => {
            if (res.type === 'success') {
                toaster.push(
                    <Message showIcon type={res.type}>
                        {res.text}
                    </Message>,
                    {
                        placement: 'topEnd',
                    }
                );
                FetchCartHandler(payload, dispatch);
                // FetchSingle(payload, dispatch);
                setHideCart('block');
            }
        })
        .catch((e) => {});
};
