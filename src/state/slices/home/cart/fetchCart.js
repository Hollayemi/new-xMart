import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';
import martApi from '../../api/baseApi';
import { REQUEST_STATUS } from '../../constants';

export const myCart = createAsyncThunk('post/myCart', async (payload) => {
    const { data } = await martApi
        .post('/allMyCart', payload.body, {})
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

export const singleCart = createAsyncThunk(
    'post/singleCart',
    async (payload) => {
        const { data } = await martApi
            .post('/singleCart', payload.body, {})
            .then((res) => {
                return res;
            })
            .catch((e) => {
                console.log(e, 'catch');
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

const allMyCart = createSlice({
    name: 'newShop',
    initialState,
    reducers: {},
    extraReducers: {
        [myCart.pending]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.PENDING };
        },
        [myCart.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                shopData: payload,
                status: REQUEST_STATUS.FULFILLED,
            };
        },
        [myCart.rejected]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.REJECTED };
        },
    },
});

export const { setShop } = allMyCart.actions;
export default allMyCart.reducer;

/*


*/

export const FetchCartHandler = (payload, dispatch) => {
    dispatch(myCart(payload))
        .then(unwrapResult)
        .then((res) => {
            console.log(res);
            if (res.type === 'success') {
                console.log(res);
                toaster.push(
                    <Message showIcon type={res.type}>
                        {res.message.replace('buzz_', 'business ')}
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

export const FetchSingle = (payload, dispatch, setState) => {
    dispatch(singleCart(payload))
        .then(unwrapResult)
        .then((res) => {
            console.log(res.message);
            setState(res.message);
        })
        .catch((e) => {
            console.log(e);
        });
};
