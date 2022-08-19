import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit';
import martApi from '../../api/baseApi';
import { REQUEST_STATUS } from '../../constants';

export const allAddress = createAsyncThunk(
    'post/allAddress',
    async (payload) => {
        const { data } = await martApi
            .post('/allAddress', payload.body, {})
            .then((e) => {
                return e;
            })
            .catch((e) => {
                return e.response;
            });
        return data;
    }
);
const initialState = {
    data: {},
    status: 'idle',
    error: '',
};

const addressSlice = createSlice({
    name: 'address2',
    initialState,
    reducers: {},
    extraReducers: {
        [allAddress.pending]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.PENDING };
        },
        [allAddress.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                data: payload,
                status: REQUEST_STATUS.FULFILLED,
            };
        },
        [allAddress.rejected]: (state) => {
            return { ...initialState, status: REQUEST_STATUS.REJECTED };
        },
    },
});

export const { setShop } = addressSlice.actions;
export default addressSlice.reducer;

/*


*/

export const getAllAddress = (payload, dispatch, setState) => {
    dispatch(allAddress(payload))
        .then(unwrapResult)
        .then((res) => {
            if (res.type === 'success') {
                setState(res.message);
            }
        })
        .catch((e) => {});
};
