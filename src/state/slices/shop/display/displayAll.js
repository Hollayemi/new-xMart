import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import martApi from '../../../api/baseApi';
import { REQUEST_STATUS } from '../../constants';

// export const getInfo = createAsyncThunk('post/getInfo', async (id) => {
//     const { data } = await martApi
//         .post(`/allCategory/` + id, {}, {})
//         .then((res) => {
//             console.log(res);
//             return res;
//         })
//         .catch((e) => {
//             console.log(e);
//             return e;
//         });
//     return data;
// });

// export const getMyBrand = createAsyncThunk('post/getMyBrand', async (id) => {
//     const { data } = await martApi
//         .post(`/allBrands/` + id, {}, {})
//         .then((res) => {
//             console.log(res);
//             return res;
//         })
//         .catch((e) => {
//             console.log(e);
//             return e;
//         });
//     return data;
// });

let one = '/allBrands/';
let two = 'allCategory/';

export const myBusinessFiles = createAsyncThunk(
    'post/myBusinessFiles',
    async (payload) => {
        const allBrand = martApi.post(one + payload);
        const allCategory = martApi.post(two + payload);
        const data = await axios
            .all([allBrand, allCategory])
            .then(
                axios.spread((...responses) => {
                    const allBrands = responses[0].data;
                    const allCategories = responses[1].data;
                    const myLoad = {
                        myBrand: allBrands,
                        myCategories: allCategories,
                    };
                    return myLoad;
                })
            )
            .catch((errors) => {
                console.error(errors);
            });
        return data;
    }
);

//
const initialState = {
    status: 'idle',
};

//
//
//
const myBusinessFile = createSlice({
    name: 'getBrands_Categories',
    initialState,
    reducers: {},
    extraReducers: {
        [myBusinessFiles.pending]: () => {
            return { ...initialState, status: REQUEST_STATUS.pending };
        },
        [myBusinessFiles.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                data: payload,
                status: REQUEST_STATUS.fulfilled,
            };
        },
        [myBusinessFiles.rejected]: () => {
            return { ...initialState, status: REQUEST_STATUS.rejected };
        },
    },
});

export const { getTheInfo } = myBusinessFile.actions;
export default myBusinessFile.reducer;
