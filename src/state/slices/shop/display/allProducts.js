import { unwrapResult, createAsyncThunk } from '@reduxjs/toolkit';
import martApi from '../../api/baseApi';

const fetchProdList = createAsyncThunk(
    'post/fetchProdList',
    async (payload) => {
        const { data } = await martApi
            .post('/shopProductsList', payload, {})
            .then((e) => {
                return e;
            })
            .catch((e) => {
                return e.response;
            });
        return data;
    }
);

export const productsList = (payload, dispatch, setState) => {
    console.log(payload);
    dispatch(fetchProdList(payload))
        .then(unwrapResult)
        .then((res) => {
            if (res.type === 'success') {
                setState(res.message);
                console.log(res);
            }
        })
        .catch((e) => {});
};
