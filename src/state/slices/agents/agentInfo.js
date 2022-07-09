import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';
import martApi from '../api/baseApi';
import { REQUEST_STATUS } from '../constants';

const agent_info = createAsyncThunk('post/agentInfo', async (payload) => {
    const { data } = await martApi
        .post('/agentInfo', payload.body, {})
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err.response);
            return err.response;
        });
    return data;
});

const initialState = {
    status: 'idle',
    data: {},
};

const agentInfo = createSlice({
    name: 'myAgentInfo',
    initialState,
    extraReducers: {
        [agent_info.pending]: (state, payload) => {
            return { ...initialState, status: REQUEST_STATUS.PENDING };
        },
        [agent_info.fulfilled]: (state, payload) => {
            return {
                ...initialState,
                status: REQUEST_STATUS.FULFILLED,
                data: payload.payload,
            };
        },
        [agent_info.pending]: (state, payload) => {
            return { ...initialState, status: REQUEST_STATUS.REJECTED };
        },
    },
});

export const { agentInformation } = agentInfo.actions;
export default agentInfo.reducer;
/*




*/

export const getAgentInfo = (dispatch, userID, setInfo) => {
    const payload = {
        body: {
            userID: userID,
        },
    };

    dispatch(agent_info(payload))
        .then(unwrapResult)
        .then((res) => {
            setInfo(res);
        })
        .catch((err) => {
            console.log(err);
        });
};
