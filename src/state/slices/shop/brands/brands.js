import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';
import { martCategories } from '../../../../components/SellerComponents/Info/Categories';
import martApi from '../../../api/baseApi';
import { REQUEST_STATUS } from '../../constants';

export const createBrandApi = createAsyncThunk(
    'post/createBrand',
    async (payload) => {
        console.log(payload);
        const { data } = await martApi
            .post(`/newBrand/` + payload.id, payload.body, {
                headers: { token: payload.auth.token },
            })
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch((e) => {
                console.log(e.response);
                return e.response;
            });
        console.log(data);
        return data;
    }
);

export const updateInstance = createAsyncThunk(
    'post/collectionInstance',
    async (payload) => {
        console.log(payload);
        const { data } = await martApi
            .post(`/use`, payload, {})
            .then((res) => {
                console.log(res);
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
//
//
//

export const createBrand = (formData, neededInfo, dispatch) => {
    console.log(neededInfo);
    if (neededInfo.otpStatus === REQUEST_STATUS.VERIFIED) {
        console.log(formData);
        const payload = {
            id: neededInfo.shopData.id,
            body: {
                ...formData,
            },
            auth: {
                token: 'Holla ' + neededInfo.otpData.accessToken,
            },
        };
        const subPayload = {
            id: neededInfo.shopData.id,
            useCase: 'brands',
            number: 1,
            operator: '-',
        };
        dispatch(createBrandApi(payload))
            .then(unwrapResult)
            .then((res) => {
                console.log(res);
                toaster.push(
                    <Message showIcon type={res.type}>
                        {res.message.replace('buzz_', 'business ')}
                    </Message>,
                    {
                        placement: 'topEnd',
                    }
                );
                if (res.type) {
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
//

export const deleteBrand = (
    shopData,
    otpData,
    splited,
    dispatch,
    deleteHandler,
    getInfo,
    eventFunc
) => {
    const payload = {
        shopID: shopData.id,
        body: {
            delCase: 'brand',
            id: splited[2],
        },
        auth: {
            token: 'Holla ' + otpData.accessToken,
        },
    };
    const subPayload = {
        id: shopData.id,
        number: 1,
        useCase: 'brands',
        operator: '+',
    };
    console.log(payload);
    dispatch(deleteHandler(payload))
        .then(unwrapResult)
        .then((resr) => {
            dispatch(getInfo(shopData.id))
                .then(unwrapResult)
                .then((res) => {
                    // refresh(res);
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
                });
            eventFunc('');
        })
        .catch((e) => {
            console.log(e);
        });
};

export const loadChildren = (cate) => {
    let theArray = [];
    const forArr = (array) => {
        for (let i = 0; i < array.length; i++) {
            const holl = {
                label: array[i].value,
                value: array[i].value,
            };
            theArray.push(holl);
            const element = array[i].children;
            if (element.length > 0) {
                forArr(element);
            }
        }
    };
    martCategories[0].children.map((res, index) => {
        if (res.label === cate) {
            forArr(res.children);
        }
    });

    return theArray;
};
const resolved = loadChildren('Wears');
