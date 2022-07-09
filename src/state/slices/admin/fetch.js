import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import martApi from '../api/baseApi';

export const getAllBusinesses = createAsyncThunk(
    'post/allBuzz',
    async (payload) => {
        const { data } = await martApi
            .post(`/allBusinesses/`, payload.body, {
                headers: { token: payload.auth.token },
            })
            .then((res) => {
                return res;
            })
            .catch((e) => {
                return e.response;
            });
        return data;
    }
);

export const getAllAgents = createAsyncThunk(
    'post/allBuzz',
    async (payload) => {
        const { data } = await martApi
            .post(`/allAgents/`, payload.body, {
                headers: { token: payload.auth.token },
            })
            .then((res) => {
                return res;
            })
            .catch((e) => {
                return e.response;
            });
        return data;
    }
);

export const adminFetch = (dispatch, setTargetInfo, token, Viewing) => {
    const payload = {
        body: {
            shopQuary: Viewing,
        },
        auth: {
            token: 'Holla ' + token,
        },
    };
    let Fetcher = 'rr';
    if (Viewing.from === 'business') {
        Fetcher = getAllBusinesses;
    } else if (Viewing.from === 'agent') {
        Fetcher = getAllAgents;
    }
    dispatch(Fetcher(payload))
        .then(unwrapResult)
        .then((res) => {
            setTargetInfo(res);
        })
        .catch((err) => {
            console.log(err.response);
        });
};
