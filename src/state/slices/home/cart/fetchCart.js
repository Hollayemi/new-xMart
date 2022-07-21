import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { myCart } from '.';
import martApi from '../../api/baseApi';

export const singleCart = createAsyncThunk(
    'post/singleCart',
    async (payload) => {
        const { data } = await martApi
            .post('/singleCart', payload.body, {})
            .then((res) => {
                return res;
            })
            .catch((e) => {
                return e.response;
            });
        return data;
    }
);

/*


*/

export const FetchCartHandler = (payload, dispatch) => {
    dispatch(myCart(payload))
        .then(unwrapResult)
        .then((res) => {})
        .catch((e) => {});
};

export const FetchUserCarts = (payload, dispatch) => {
    dispatch(singleCart(payload))
        .then(unwrapResult)
        .then((res) => {})
        .catch((e) => {});
};
