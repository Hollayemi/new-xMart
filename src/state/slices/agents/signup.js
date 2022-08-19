import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';
import martApi from '../api/baseApi';
import { REQUEST_STATUS } from '../constants';

const agent_signup = createAsyncThunk('post/agentSignup', async (payload) => {
    const { data } = await martApi
        .post('/newAgent', payload.body, {})
        .then((res) => {
            console.log(res);
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

const new_agent = createSlice({
    name: 'agentSignup',
    initialState,
    extraReducers: {
        [agent_signup.pending]: (state, payload) => {
            return { ...initialState, status: REQUEST_STATUS.PENDING };
        },
        [agent_signup.fulfilled]: (state, payload) => {
            return {
                ...initialState,
                status: REQUEST_STATUS.FULFILLED,
                data: payload,
            };
        },
        [agent_signup.pending]: (state, payload) => {
            return { ...initialState, status: REQUEST_STATUS.REJECTED };
        },
    },
});

export const { addNewAdmin } = new_agent.actions;
export default new_agent.reducer;
/*




*/

export const completeAgentReg = (formData, dispatch, userID, navigate) => {
    const payload = {
        body: {
            ...formData,
            userID: userID,
        },
    };

    dispatch(agent_signup(payload))
        .then(unwrapResult)
        .then((res) => {
            toaster.push(
                <Message showIcon type={res.type}>
                    {res.message}
                </Message>,
                {
                    placement: 'topEnd',
                }
            );
            if (res.type === 'success') {
                navigate('/agent');
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
