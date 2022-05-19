import { createAsyncThunk } from '@reduxjs/toolkit';
import martApi from '../../api/baseApi';

export const deleteHandler = createAsyncThunk(
    'post/deleteHandler',
    async (payload) => {
        const { data } = await martApi
            .post(`/delete/` + payload.shopID, payload.body, {
                headers: { token: payload.auth.token },
            })
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch((e) => {
                console.log(e.response);
                return e;
            });
        console.log(data);
        return data;
    }
);

// //
// const initialState = {
//     status: 'idle',
// };

// //
// //
// //
// const getBrands_Categories = createSlice({
//     name: 'getBrands_Categories',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [getInfo.pending]: () => {
//             return { ...initialState, status: REQUEST_STATUS.pending };
//         },
//         [getInfo.fulfilled]: (state, { payload }) => {
//             console.log(payload);
//             return {
//                 ...initialState,
//                 data: payload,
//                 status: REQUEST_STATUS.fulfilled,
//             };
//         },
//         [getInfo.rejected]: () => {
//             return { ...initialState, status: REQUEST_STATUS.rejected };
//         },
//     },
// });

// export const { getTheInfo } = getBrands_Categories.actions;
// export default getBrands_Categories.reducer;
