import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import martApi from '../../api/baseApi';

export const myActivities = createAsyncThunk(
    'post/myActivities',
    async (payload) => {
        const { data } = await martApi
            .patch(`/myActivities/` + payload.id, payload.body, {
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

export const myTools = createAsyncThunk('post/myTools', async (payload) => {
    const { data } = await martApi
        .patch(`/myTools/` + payload.id, payload.body, {
            headers: { token: payload.auth.token },
        })
        .then((res) => {
            return res;
        })
        .catch((e) => {
            return e.response;
        });
    return data;
});

export const getActivities = (dispatch, shopId, token, setState) => {
    const payload = {
        id: shopId,
        body: {
            shopId: shopId,
        },
        auth: {
            token: 'Holla ' + token,
        },
    };
    dispatch(myActivities(payload))
        .then(unwrapResult)
        .then((res) => {
            setState(res);
        })
        .catch((err) => {
            console.log(err.response);
        });
};

export const getMyTools = (dispatch, shopId, token, setState) => {
    const payload = {
        id: shopId,
        body: {
            shopId: shopId,
        },
        auth: {
            token: 'Holla ' + token,
        },
    };
    dispatch(myTools(payload))
        .then(unwrapResult)
        .then((res) => {
            setState(res);
        })
        .catch((err) => {
            console.log(err.response);
        });
};
