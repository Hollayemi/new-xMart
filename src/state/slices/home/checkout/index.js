import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { Message, toaster } from 'rsuite';
import martApi from '../../api/baseApi';
import { getAllAddress } from './fetch';

const addNewAddress = createAsyncThunk(
    'post/addNewAddress',
    async (payload) => {
        const { data } = await martApi
            .post('/newAddress', payload.body, {})
            .then((e) => {
                console.log(e, 'Then');
                return e;
            })
            .catch((e) => {
                console.log(e, 'catch');
                return e.response;
            });
        return data;
    }
);

const deleteAddHandler = createAsyncThunk(
    'post/deleteAddress',
    async (payload) => {
        const { data } = await martApi
            .post('/deleteAddress', payload.body, {})
            .then((e) => {
                console.log(e, 'Then');
                return e;
            })
            .catch((e) => {
                console.log(e, 'catch');
                return e.response;
            });
        return data;
    }
);

export const newAddress = (payload, dispatch) => {
    dispatch(addNewAddress(payload))
        .then(unwrapResult)
        .then((res) => {
            console.log(res);
            toaster.push(
                <Message showIcon type={res.type}>
                    {res.message.replace('_', ' ')}
                </Message>,
                {
                    placement: 'topEnd',
                }
            );
            if (res.type === 'success') {
                getAllAddress(payload, dispatch);
            }
        })
        .catch((e) => {
            console.log(e);
        });
};

//
export const deleteAddress = (payload, dispatch, setState) => {
    console.log(payload);
    dispatch(deleteAddHandler(payload))
        .then(unwrapResult)
        .then((res) => {
            console.log(res);
            toaster.push(
                <Message showIcon type={res.type}>
                    {res.message.replace('_', ' ')}
                </Message>,
                {
                    placement: 'topEnd',
                }
            );
            if (res.type === 'success') {
                getAllAddress(payload, dispatch, setState);
            }
        })
        .catch((e) => {
            console.log(e);
        });
};
