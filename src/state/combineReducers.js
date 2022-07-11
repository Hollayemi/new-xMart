import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './slices/auth/Login';
import agentReducer from './slices/agents/agentInfo';
import adminReducer from './slices/admin/login';
import setOtpReducer from './slices/shop/setOtp';
import setShopReducer from './slices/shop/addShop';
import myBusinessFile from './slices/shop/display/displayAll';
import myNewProduct from './slices/shop/products/productSlice';
import cartedProduct from './slices/home/cart';
import fetchProduct from './slices/home/cart/fetchCart';
import addressSlice from './slices/home/checkout/fetch';

export const myReducers = combineReducers({
    loginReducer: loginReducer,
    setShopReducer: setShopReducer,
    setOtpReducer: setOtpReducer,
    myBusinessFile: myBusinessFile,
    myNewProduct: myNewProduct,
    agentReducer: agentReducer,
    adminReducer: adminReducer,
    cartedProduct: cartedProduct,
    fetchProduct: fetchProduct,
    addressSlice: addressSlice,
});
