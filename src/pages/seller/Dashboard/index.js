import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardWrapper from '../../../components/SellerComponents/Dashboard';
import Collections from './Collections';
import Brand from './Brands';
import Products from './Products';
import { storeFiles } from '../../../state/slices/shop/display/displayAll';
import ModalPanel from '../../../components/elements/ModalPanel';
import MyOtpModal from '../../../components/elements/OtpVerification';
import PasswordVerification from '../../../components/elements/OtpVerification/passwordVerification';
import { REQUEST_STATUS } from '../../../state/slices/constants';
import otpPic from '../../../assets/images/png/otp.png';
import PurchaseBrand from './xtar/X_brand';
import PurchaseCollection from './xtar/X_collection';
import PurchaseProduct from './xtar/X_product';
// import PurchaseMemory from './xtar/X_memory';
import Unsupplied from './Status/Unsupplied';
import Carted from './Status/Carted';
import Supplied from './Status/Supplied';
import Setting from './Settings';
import Analytics from './Analytics';
import Overview from './Overview';
import EntryMode from './Settings/entryMode';
import ReferenceKey from './Settings/referenceKey';
import ActivitiesPage from './Settings/activities';
import EditProduct from './editProduct';

const Dashboard = () => {
    const dispatch = useDispatch();
    const [agreedToTerms, setAgreedToTerms] = useState(true);
    const [showing, setShowing] = useState('0_Analytics');
    const fakeData = { myCategories: { type: 'empty' } };
    const [files, setFiles] = useState(fakeData);

    const splitedShowing = showing.split('_');
    let myBreadcrumb = [
        { name: 'Dashboard', link: '/' },
        { name: splitedShowing[1], link: '/' },
    ];
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
    // const loadFiles = useSelector((state) => state.reducer.myBusinessFile);

    const reLoad = () => {
        storeFiles(shopData.id, dispatch, setFiles);
    };
    useEffect(() => {
        reLoad();
    }, []);

    const neededInfo = {
        otpStatus: otpStatus,
        otpData: otpData,
        shopData: shopData,
        setFiles: setFiles,
        reFetchData: reLoad,
    };
    const myBrandData = [];
    if (files.myBrand) {
        files.myBrand.message.map((res, index) => {
            let myBrand = {
                value:
                    res.brandName +
                    '$$' +
                    res.brandCollection +
                    '$$' +
                    res.sub_category,
                label: res.brandName,
            };
            myBrandData.push(myBrand);
        });
    }

    return (
        <div className="bg-slate-300">
            <DashboardWrapper
                danger="mainly"
                BreadcrumbList={myBreadcrumb}
                setShowing={setShowing}
                showing={showing}
                shopName="Kemon-Mart"
            >
                {showing === 'Dashboard' && (
                    <Overview neededInfo={neededInfo} />
                )}
                {splitedShowing[1] === 'Analytics' && (
                    <Analytics neededInfo={neededInfo} />
                )}
                {splitedShowing[1] === 'Brands' && (
                    <Brand
                        neededInfo={neededInfo}
                        myBrands={files.myBrand}
                        loadedCateg={files.myCategories}
                        setShowing={setShowing}
                        showing={showing}
                    />
                )}
                {splitedShowing[1] === 'Collections' && (
                    <Collections
                        collections={files.myCategories}
                        neededInfo={neededInfo}
                    />
                )}
                {splitedShowing[1] === 'Products' && (
                    <Products
                        myBrandData={myBrandData}
                        dispatch={dispatch}
                        allProducts={files.allProducts}
                        neededInfo={neededInfo}
                    />
                )}
                {splitedShowing[1] === 'My store' && (
                    <EditProduct
                        myBrandData={myBrandData}
                        loadedCateg={files.myCategories}
                        dispatch={dispatch}
                        allProducts={files.allProducts}
                        neededInfo={neededInfo}
                        pageInfo={splitedShowing[2]}
                    />
                )}
                {splitedShowing[1] === 'Xtra Brand' && (
                    <PurchaseBrand shopData={shopData} />
                )}
                {splitedShowing[1] === 'Xtra Product' && (
                    <PurchaseProduct shopData={shopData} />
                )}
                {splitedShowing[1] === 'Xtra Collection' && (
                    <PurchaseCollection shopData={shopData} />
                )}
                {splitedShowing[1] === 'Unsupplied Products' && <Unsupplied />}
                {splitedShowing[1] === 'Carted Products' && <Carted />}
                {splitedShowing[1] === 'Supplied Products' && <Supplied />}
                {splitedShowing[1] === 'Edit Store Info' && (
                    <Setting neededInfo={neededInfo} />
                )}
                {splitedShowing[1] === 'Entry Mode' && (
                    <EntryMode neededInfo={neededInfo} />
                )}
                {splitedShowing[1] === 'Reference Keys' && <ReferenceKey />}
                {splitedShowing[1] === 'Activities' && (
                    <ActivitiesPage neededInfo={neededInfo} />
                )}

                {/*  */}
                {/*  */}
                {/*  */}
                {otpStatus !== REQUEST_STATUS.VERIFIED && (
                    <ModalPanel
                        title="Dashboard Authorization"
                        children={
                            shopData.data.entryMode === 'otp' ? (
                                <MyOtpModal
                                    otpPic={otpPic}
                                    id={shopData.id}
                                    title="Enter verification code"
                                    note={`we have just sent a verification code to
                            ${shopData.data.shopEmail} and it expires in 1hour`}
                                />
                            ) : (
                                <PasswordVerification id={shopData.id} />
                            )
                        }
                        hasBackdrop={true}
                        keyboard={true}
                        open={agreedToTerms}
                        buttonName="Varify Code"
                        handleClose={() => setAgreedToTerms(!agreedToTerms)}
                    />
                )}
            </DashboardWrapper>
        </div>
    );
};

export default Dashboard;
