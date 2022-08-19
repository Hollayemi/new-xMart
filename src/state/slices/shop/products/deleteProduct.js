import { unwrapResult } from '@reduxjs/toolkit';
import { deleteHandler } from '../delete';
import { storeFiles } from '../display/displayAll';
import { updateInstance } from '../settings/genApi';

export const deleteProd = (body, neededInfo, eventFunc, dispatch) => {
    const payload = {
        shopID: neededInfo.shopData.id,
        body: body,
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
    dispatch(deleteHandler(payload))
        .then(unwrapResult)
        .then((resr) => {
            storeFiles(neededInfo.shopData.id, dispatch, neededInfo.setFiles);
            if (resr.type) {
                dispatch(updateInstance(subPayload));
            }
            // neededInfo.reFetchData();

            eventFunc('');
        })
        .catch((e) => {});
};
