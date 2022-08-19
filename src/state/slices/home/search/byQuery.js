import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import martApi from '../../api/baseApi';

const homeSearch = createAsyncThunk('post/aggrSearch', async (payload) => {
    const { data } = await martApi
        .post(`/searchByQuery`, payload, {})
        .then((res) => {
            return res;
        })
        .catch((e) => {
            return e.response;
        });
    return data;
});

export const fetchByQuery = (dispatch, query, state, groupBy, setData) => {
    let payload = {
        query: query,
        state: state,
        groupBy: groupBy,
    };
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
