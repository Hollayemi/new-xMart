import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { resolveConfig } from 'prettier';
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
/*





*/

const getOneProduct = createAsyncThunk('post/fetchProduct', async (payload) => {
    const { data } = await martApi
        .post(`/getOneProduct`, payload.body, {})
        .then((res) => {
            return res;
        })
        .catch((e) => {
            return e.response;
        });
    return data;
});

export const getOneProductHandler = (
    dispatch,
    query,
    setInfo,
    isArray,
    myCarts
) => {
    const payload = {
        body: {
            query: query,
        },
    };
    dispatch(getOneProduct(payload))
        .then(unwrapResult)
        .then((res) => {
            if (isArray) {
                console.log(res.message);
                setInfo(myCarts.push(res.message));
            } else {
                console.log(res.message);
                setInfo(res.message);
            }
        })
        .catch((err) => {
            console.log(err.response);
        });
};

export const getOnebyId = (dispatch, id) => {
    const payload = {
        body: {
            query: { _id: id },
        },
    };
    return new Promise((resolve, reject) => {
        dispatch(getOneProduct(payload))
            .then((res) => {
                console.log(res);
                resolve(res);
            })
            .catch((err) => {
                reject(err.message);
                console.log(err.response);
            });
    });
};
