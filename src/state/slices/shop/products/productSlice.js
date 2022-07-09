import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit';
import axios from 'axios';
import { Message, toaster } from 'rsuite';
import martApi from '../../api/baseApi';
import { REQUEST_STATUS } from '../../constants';
import { deleteHandler } from '../delete';
import { removeBackgroundFromImageBase64 } from 'remove.bg';
//add product
export const createNewProduct = createAsyncThunk(
    'post/newProductkk',
    async (payload) => {
        const { data } = await martApi
            .post('/addProduct', payload.body, {
                headers: { token: payload.auth.token },
            })
            .then((res) => {
                return res;
            })
            .catch((e) => {
                return e.response;
            });
        return data;
    }
);

export const updateInstance = createAsyncThunk(
    'post/collectionInstance',
    async (payload) => {
        const { data } = await martApi
            .post(`/use`, payload, {})
            .then((res) => {
                return res;
            })
            .catch((e) => {
                console.log(e.response);
                return e.response;
            });
        return data;
    }
);
//
const initialState = {
    creatname: '',
};

//
//
//
const myNewProduct = createSlice({
    name: 'newCollection',
    initialState,
    reducers: {},
    extraReducers: {
        [createNewProduct.pending]: () => {
            return { ...initialState, status: REQUEST_STATUS.PENDING };
        },
        [createNewProduct.fulfilled]: (state, { payload }) => {
            return {
                ...initialState,
                status: REQUEST_STATUS.FULFILLED,
                colData: payload,
            };
        },
        [createNewProduct.rejected]: () => {
            return { ...initialState, status: REQUEST_STATUS.REJECTED };
        },
    },
});

export const { addNewCollection } = myNewProduct.actions;
export default myNewProduct.reducer;

//
//
//

export const createProductHandler = (formData, dispatch, neededInfo) => {
    if (neededInfo.otpStatus === REQUEST_STATUS.VERIFIED) {
        const payload = {
            id: neededInfo.shopData.id,
            body: {
                ...formData,
                shopID: neededInfo.shopData.id,
            },
            auth: {
                token: 'Holla ' + neededInfo.otpData.accessToken,
            },
        };
        const subPayload = {
            id: neededInfo.shopData.id,
            number: 1,
            operator: '-',
            useCase: 'products',
        };
        dispatch(createNewProduct(payload))
            .then(unwrapResult)
            .then((res) => {
                console.log(res);
                toaster.push(
                    <Message showIcon type={res.type}>
                        {res.message
                            .replace('prod', 'Product ')
                            .replace(
                                'Vari" must be an array',
                                ' specifications" must be selected '
                            )}
                    </Message>,
                    {
                        placement: 'topEnd',
                    }
                );
                if (res.type === 'success') {
                    dispatch(updateInstance(subPayload));
                }
                neededInfo.reFetchData();
            })
            .catch((e) => {
                console.log(e);
            });
    }
};

//
//
//

export const deleteProd = (
    splited,
    neededInfo,
    getInfo,
    eventFunc,
    dispatch
) => {
    console.log(splited);
    const payload = {
        shopID: neededInfo.shopData.id,
        body: {
            delCase: 'Product',
            _id: splited[2],
            name: splited[0],
        },
        auth: {
            token: 'Holla ' + neededInfo.otpData.accessToken,
        },
    };
    const subPayload = {
        id: neededInfo.shopData.id,
        operator: '+',
        useCase: 'products',
        number: 1,
    };
    // setOpen(true);
    dispatch(deleteHandler(payload))
        .then(unwrapResult)
        .then((resr) => {
            dispatch(getInfo(neededInfo.shopData.id))
                .then(unwrapResult)
                .then((res) => {
                    toaster.push(
                        <Message showIcon type={resr.type}>
                            {resr.message}
                        </Message>,
                        {
                            placement: 'topEnd',
                        }
                    );
                    if (resr.type) {
                        dispatch(updateInstance(subPayload));
                    }
                    neededInfo.reFetchData();
                });
            eventFunc('');
        })
        .catch((e) => {});
};

export const removeBg = (imgUrl, setImgData) => {
    axios({
        url: `https://api.remove.bg/v1.0/removebg`,
        method: 'post',
        data: {
            image_url: imgUrl,
            // 'http://res.cloudinary.com/xmart/image/upload/v1654572183/62796a8870e04f2804626fde/Bolato/pydh6xpnwzjhub2jlsxh.jpg',
            size: 'auto',
            format: 'auto',
            type: 'auto',
        },
        headers: {
            'X-Api-Key': 'sMy4sR7AsoQNHLSNCZQEGL7r',
        },
        responseType: 'blob',
        encoding: null,
    })
        .then((response) => {
            setImgData(URL.createObjectURL(response.data), 'image');
            // setIsLoading(false);
        })
        .catch((e) => console.log(e.response, 'something missing'));
};

// const localFile = '../../../../assets/images/main/banner1.jpg';
// const base64img = fs.readFileSync(localFile, { encoding: 'base64' });
// console.log(base64img);

export const removeBg2 = (name, setImgData) => {
    const outputFile = `${__dirname}/out/${name}.png`;
    removeBackgroundFromImageBase64({
        setImgData,
        apiKey: 'sMy4sR7AsoQNHLSNCZQEGL7r',
        size: 'regular',
        type: 'product',
        outputFile,
    })
        .then((result) => {
            console.log(`File saved to ${outputFile}`);
            const base64img = result.base64img;
            console.log(base64img);
        })
        .catch((errors) => {
            console.log(JSON.stringify(errors));
        });
};
