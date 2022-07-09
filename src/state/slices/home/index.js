import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import martApi from '../api/baseApi';

export const fetchProduct = createAsyncThunk(
    'post/fetchProduct',
    async (payload) => {
        const { data } = await martApi
            .patch(`/fetchProducts`, payload.body, {})
            .then((res) => {
                return res;
            })
            .catch((e) => {
                return e.response;
            });
        return data;
    }
);

export const getProduct = (dispatch, Query, space, setState) => {
    const payload = {
        body: {
            Query: Query,
            from: space,
        },
    };
    dispatch(fetchProduct(payload))
        .then(unwrapResult)
        .then((res) => {
            setState(res);
        })
        .catch((err) => {
            console.log(err.response);
        });
};
