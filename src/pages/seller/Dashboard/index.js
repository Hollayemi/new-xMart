import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DashboardWrapper from '../../../components/SellerComponents/Dashboard';
import Collections from './Collections';
import Brand from './Brands';
import Products from './Products';
import { myBusinessFiles } from '../../../state/slices/shop/display/displayAll';
import { unwrapResult } from '@reduxjs/toolkit';
import ModalPanel from '../../../components/elements/ModalPanel';
import MyOtpModal from '../../../components/elements/OtpVerification';
import { REQUEST_STATUS } from '../../../state/slices/constants';
import otpPic from '../../../assets/images/png/otp.png';
import PurchaseBrand from './xtar/X_brand';
import PurchaseCollection from './xtar/X_collection';
import PurchaseProduct from './xtar/X_product';
import PurchaseMemory from './xtar/X_memory';
import Unsupplied from './Status/Unsupplied';
import Carted from './Status/Carted';
import Supplied from './Status/Supplied';
import Setting from './Settings';
import Overview from '../Dashboard/Overview/Overview';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [agreedToTerms, setAgreedToTerms] = useState(true);
    const [showing, setShowing] = useState('Purchase Brand');
    const [files, setFiles] = useState({ type: 'not ready' });

    const splitedShowing = showing.split('_');
    let myBreadcrumb = [
        { name: 'Dashboard', link: '/' },
        { name: splitedShowing[1], link: '/' },
    ];
    console.log(splitedShowing[1]);
    if (splitedShowing.length > 1 && splitedShowing[0] !== '0') {
        myBreadcrumb = [
            { name: 'Dashboard', link: '/' },
            { name: splitedShowing[0], link: '/' },
            { name: splitedShowing[1], link: '/' },
        ];
    }

    const { otpStatus, otpData } = useSelector(
        (state) => state.reducer.setOtpReducer
    );
    const { shopData } = useSelector((state) => state.reducer.setShopReducer);

    console.log(shopData.id);
    useEffect(() => {
        reloadInfos();
    }, []);

    const reloadInfos = () => {
        const idFetch = shopData.id;
        dispatch(myBusinessFiles(idFetch))
            .then(unwrapResult)
            .then((res) => {
                console.log(res);
                setFiles(res);
                return res;
            })
            .catch((e) => {
                console.log(e.response);
            });
    };

    console.log(files.myBrand);
    const neededInfo = {
        otpStatus: otpStatus,
        otpData: otpData,
        shopData: shopData,
        reFetchData: reloadInfos,
    };

    return (
        <DashboardWrapper
            danger="mainly"
            BreadcrumbList={myBreadcrumb}
            setShowing={setShowing}
            showing={showing}
            shopName="Kemon-Mart"
        >
            {splitedShowing[1] === 'Analytics' && <Overview />}
            {splitedShowing[1] === 'Brands' && (
                <Brand
                    neededInfo={neededInfo}
                    dispatch={dispatch}
                    myBrands={files.myBrand}
                    loadedCateg={files.myCategories}
                />
            )}
            {splitedShowing[1] === 'Collections' && (
                <Collections
                    collections={files.myCategories}
                    neededInfo={neededInfo}
                />
            )}
            {splitedShowing[1] === 'Products' && <Products />}
            {splitedShowing[1] === 'Xtra Brand' && <PurchaseBrand />}
            {splitedShowing[1] === 'Xtra Product' && <PurchaseProduct />}
            {splitedShowing[1] === 'Xtra Collection' && <PurchaseCollection />}
            {splitedShowing[1] === 'Unsupplied Products' && <Unsupplied />}
            {splitedShowing[1] === 'Carted Products' && <Carted />}
            {splitedShowing[1] === 'Supplied Products' && <Supplied />}
            {splitedShowing[1] === 'Edit' && <Setting />}
            {/*  */}
            {/*  */}
            {/*  */}
            {otpStatus !== REQUEST_STATUS.VERIFIED && (
                <ModalPanel
                    title="Dashboard Authorization"
                    children={
                        <MyOtpModal
                            otpPic={otpPic}
                            id={shopData.id}
                            title="Enter verification code"
                            note={`we have just sent a verification code to
                        ${shopData.shopEmail} and it expires in 1hour`}
                        />
                    }
                    hasBackdrop={true}
                    keyboard={true}
                    open={agreedToTerms}
                    buttonName="Varify Code"
                    handleClose={() => setAgreedToTerms(!agreedToTerms)}
                />
            )}
        </DashboardWrapper>
    );
};

export default Dashboard;
