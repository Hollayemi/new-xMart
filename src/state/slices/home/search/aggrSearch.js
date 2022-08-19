import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import martApi from '../../api/baseApi';

const homeSearch = createAsyncThunk('post/aggrSearch', async (payload) => {
    const { data } = await martApi
        .post(`/HomeSegment`, payload, {})
        .then((res) => {
            return res;
        })
        .catch((e) => {
            return e.response;
        });
    return data;
});

export const fetcher = (dispatch, payload, setData) => {
    dispatch(homeSearch(payload))
        .then(unwrapResult)
        .then((res) => {
            if (res.type === 'success') {
                setData(res.message);
            }
        })
        .catch((err) => {
            return err.response;
        });
};
