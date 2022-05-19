import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../constants';
import martApi from '../../api/baseApi';

const kem_signin = createAsyncThunk('post/kem_signin', async (payload) => {
    console.log(payload);
    const { data } = await martApi.post('/signin', {
        payload,
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

const UserSlice = createSlice({
    name: 'xMartLogin',
    initialState,
    keepUnusedDataFor: 2,
    reducers: {
        wasGoing: (state, { payload }) => {
            // state.wasGoing = payload;
            return { ...initialState, wasGoing: payload };
        },
    },
    extraReducers: {
        [kem_signin.pending]: (state) => {
            state.status = REQUEST_STATUS.PENDING;
            state.loading = true;
        },
        [kem_signin.fulfilled]: (state, { payload }) => {
            state.status = REQUEST_STATUS.FULFILLED;
            state.userData = payload;
            state.loading = false;
        },
        [kem_signin.rejected]: (state, error) => {
            state.status = REQUEST_STATUS.REJECTED;
            state.error = error;
        },
    },
});

export const { setUsers, wasGoing } = UserSlice.actions;

// export states
export default UserSlice.reducer;
export { kem_signin };
