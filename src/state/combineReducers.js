import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './slices/auth/Login';
import signUpReducer from './slices/auth/Signup';
import setOtpReducer from './slices/shop/setOtp';
import setShopReducer from './slices/shop/addShop';
import newCollection from './slices/shop/collections/createCollection';
import myBusinessFile from './slices/shop/display/displayAll';

export const myReducers = combineReducers({
    loginReducer: loginReducer,
    signUpReducer: signUpReducer,
    setShopReducer: setShopReducer,
    setOtpReducer: setOtpReducer,
    newCollection: newCollection,
    myBusinessFile: myBusinessFile,
});
