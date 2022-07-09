import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit';
import axios from 'axios';
import martApi from '../../api/baseApi';
import { REQUEST_STATUS } from '../../constants';
let one = '/allBrands/';
let two = '/allCategory/';
let three = '/allProducts/';

export const myBusinessFiles = createAsyncThunk(
    'post/myBusinessFiles',
    async (payload) => {
        const allBrand = martApi.post(one + payload);
        const allCategory = martApi.post(two + payload);
        const allProduct = martApi.post(three + payload);
        const data = await axios
            .all([allBrand, allCategory, allProduct])
            .then(
                axios.spread((...responses) => {
                    const allBrands = responses[0].data;
                    const allCategories = responses[1].data;
                    const allProducts = responses[2].data;
                    const myLoad = {
                        myBrand: allBrands,
                        myCategories: allCategories,
                        allProducts: allProducts,
                    };
                    return myLoad;
                })
            )
            .catch((errors) => {
                console.error(errors.response);
            });
        return data;
    }
);

//
const initialState = {
    status: 'idle',
    data: {},
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
            return { ...initialState, status: REQUEST_STATUS.PENDING };
        },
        [myBusinessFiles.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                data: payload,
                status: REQUEST_STATUS.FULFILLED,
            };
        },
        [myBusinessFiles.rejected]: () => {
            return { ...initialState, status: REQUEST_STATUS.REJECTED };
        },
    },
});

export const { getTheInfo } = myBusinessFile.actions;
export default myBusinessFile.reducer;
//

export const storeFiles = (idFetch, dispatch, setFiles) => {
    dispatch(myBusinessFiles(idFetch))
        .then(unwrapResult)
        .then((res) => {
            if (res) {
                setFiles(res);
                return res;
            }
        })
        .catch((e) => {
            console.log(e.response);
        });
};
