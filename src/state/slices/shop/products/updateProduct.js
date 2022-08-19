import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';

import { Message, toaster } from 'rsuite';
import martApi from '../../api/baseApi';
import { REQUEST_STATUS } from '../../constants';

export const editProduct = createAsyncThunk(
    'post/editProduct',
    async (payload) => {
        const { data } = await martApi
            .put('/editProduct', payload.body, {
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

export const editProductHandler = (formData, dispatch, neededInfo) => {
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
        dispatch(editProduct(payload))
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

                neededInfo.reFetchData();
            })
            .catch((e) => {
                console.log(e);
            });
    }
};
