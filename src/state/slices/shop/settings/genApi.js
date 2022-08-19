import { createAsyncThunk } from '@reduxjs/toolkit';

import martApi from '../../api/baseApi';
export const updateInstance = createAsyncThunk(
    'post/collectionInstance',
    async (payload) => {
        const { data } = await martApi
            .post(`/use`, payload, {})
            .then((res) => {
                return res;
            })
            .catch((e) => {
                return e.response;
            });
        return data;
    }
);
