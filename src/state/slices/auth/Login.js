import { createSlice, createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../constants';
import martApi from '../api/baseApi';
import { Message, toaster } from 'rsuite';

const kem_signin = createAsyncThunk('post/kem_signin', async (payload) => {
    const { data } = await martApi
        .post('/signin', {
            payload,
        })
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

const UserSlice = createSlice({
    name: 'xMartLogin',
    initialState,
    // keepUnusedDataFor: 2,
    reducers: {
        wasGoing: (state, { payload }) => {
            return { ...initialState, wasGoing: payload };
        },
    },
    extraReducers: {
        [kem_signin.pending]: (state) => {
            return {
                ...initialState,
                status: REQUEST_STATUS.PENDING,
                loading: true,
            };
        },
        [kem_signin.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                userData: payload,
                status: REQUEST_STATUS.FULFILLED,
                loading: false,
            };
        },
        [kem_signin.rejected]: (state, error) => {
            return {
                ...initialState,
                status: REQUEST_STATUS.REJECTED,
                error: error,
            };
        },
    },
});

export const { setUsers, wasGoing } = UserSlice.actions;

// export states
export default UserSlice.reducer;
export { kem_signin };

/*





*/

export const myLogin = (formData, navigate, dispatch, wasGoing) => {
    dispatch(kem_signin(formData))
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
                if (wasGoing !== 'no-where') {
                    navigate(`/${wasGoing}`);
                } else {
                    navigate('/');
                }
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
