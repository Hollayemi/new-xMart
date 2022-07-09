import { createSlice, createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../constants';
import martApi from '../api/baseApi';
import { Message, toaster } from 'rsuite';

const admin_signup = createAsyncThunk('post/admin_signup', async (payload) => {
    const { data } = await martApi
        .post('/addAdmin/', payload, {})
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err.response;
        });

    return data;
});

const initialState = {
    userData: {},
    loading: false,
    status: 'idle',
    wasGoing: 'no-where',
    error: {},
};

const adminSlice = createSlice({
    name: 'xMartAdminsignup',
    initialState,
    reducers: {
        wasGoing: (state, { payload }) => {
            return { ...initialState, wasGoing: payload };
        },
    },
    extraReducers: {
        [admin_signup.pending]: (state) => {
            state.status = REQUEST_STATUS.PENDING;
            state.loading = true;
        },
        [admin_signup.fulfilled]: (state, { payload }) => {
            state.status = REQUEST_STATUS.FULFILLED;
            state.userData = payload;
            state.loading = false;
        },
        [admin_signup.rejected]: (state, error) => {
            state.status = REQUEST_STATUS.REJECTED;
            state.error = error;
        },
    },
});

export const { setUsers, wasGoing } = adminSlice.actions;

// export states
export default adminSlice.reducer;

/*





*/

export const adminSignup = (formData, dispatch) => {
    dispatch(admin_signup(formData))
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
        })
        .catch((err) => {
            console.log(err.response);
        });
};
