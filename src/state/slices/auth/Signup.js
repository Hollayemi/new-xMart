import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../constants';
import martApi from '../../api/baseApi';

export const RegNewUser = createAsyncThunk(
    'post/RegNewUser',
    async (payload) => {
        const { data } = await martApi
            .post('/createAcc', { payload }, {})
            .then((e) => {
                return e;
            })
            .catch((err) => {
                return err.response;
            });
        return data;
    }
);

const initialState = {
    regAuth: [],
    status: 'idle',
    info: {},
    error: {},
};

const UserSlice = createSlice({
    name: 'xMartSignup',
    initialState,
    reducers: {},
    extraReducers: {
        [RegNewUser.pending]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.PENDING };
        },
        [RegNewUser.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                regAuth: payload,
                status: REQUEST_STATUS.FULFILLED,
            };
        },
        [RegNewUser.rejected]: (state, error) => {
            return { ...initialState, status: REQUEST_STATUS.REJECTED };
        },
    },
});

export const { setUsers } = UserSlice.actions;

// export states
export default UserSlice.reducer;
