import React, { useEffect, useState } from 'react';
import { FaFolderOpen, FaPlus, FaEllipsisH } from 'react-icons/fa';
import { CheckPicker, SelectPicker } from 'rsuite';
import InputGroup from '../../../components/elements/Input/InputGroup';
import IconDropdown from '../../../components/elements/IconDropDown';
import TextAreaGroup from '../../../components/elements/Input/TextAreaGroup';
import Folder2 from '../../../assets/images/main/folder2.png';
import {
    createBrand,
    deleteBrand,
    loadCategories,
} from '../../../state/slices/shop/brands/brands';
import ModalPanel from '../../../components/elements/ModalPanel';
import { deleteHandler } from '../../../state/slices/shop/delete';
import { myBusinessFiles } from '../../../state/slices/shop/display/displayAll';
import { REQUEST_STATUS } from '../../../state/slices/constants';
import { useDispatch } from 'react-redux';

////////////////////////
////////////////////////
////////////////////////

const Brand = ({ neededInfo, loadedCateg, myBrands, setShowing }) => {
    const { shopData, otpStatus, reFetchData } = neededInfo;
    const dispatch = useDispatch();
    useEffect(() => {
        reFetchData();
    }, []);
    const [formData, setFormData] = useState({
        brandName: '',
        collection: '',
        sub_category: '',
        about: '',
        refKey: '',
    });
    const [selectedChildren, setChildren] = useState([]);

    let newValue = {};
    function updateValue(newVal, variable) {
        variable === 'name' && (newValue = { brandName: newVal });
        variable === 'category' && (newValue = { collection: newVal });
        variable === 'sub' && (newValue = { sub_category: newVal });
        variable === 'refKey' && (newValue = { refKey: newVal });
        variable === 'about' && (newValue = { about: newVal });

        setFormData({
            ...formData,
            ...newValue,
        });
    }
    let folders = null;
    if (myBrands && myBrands.type === 'success') {
        folders = myBrands.message.map((each, index) => {
            return (
                <Folders
                    name={each.brandName}
                    num={each.brandCollection}
                    key={index}
                    id={each._id}
                    neededInfo={neededInfo}
                    dispatch={dispatch}
                    setShowing={setShowing}
                />
            );
        });
    }

    const myAvailableCate = [];
    if (
        otpStatus === REQUEST_STATUS.VERIFIED &&
        loadedCateg &&
        loadedCateg.type !== 'not ready'
    ) {
        loadedCateg.message.map((res, index) => {
            myAvailableCate.push({
                label: res.collectionName,
                value: res.category,
            });
        });
    }
    const selectCateFunc = (e) => {
        updateValue(e, 'category');
        setChildren(loadCategories(e));
    };
    //
    //
    //
    //
    const createBrandHandler = (shop) => {
        if (shopData.id) {
            createBrand(formData, neededInfo, dispatch, reFetchData);
        }
    };

    return (
        <section className="relative mx-3">
            <div className="lg:w-[calc(100%-280px)]">
                <div className="flex items-center h-40 relative overflow-x-auto w-full myScroll-x bg-slate-50 px-4 w-full border-4 border-slate-50">
                    <div className="flex justify-between items-center px-4 m-2 w-48 h-20 border min-w-[200px] rounded-lg bg-slate-50 shadow-sm">
                        <h5 className="text-gray-200 relative">
                            <FaFolderOpen className="text-6xl" />
                            <i className="text-sm w-6 h-6 bg-white rounded-full flex items-center justify-center absolute top-5 left-4">
                                <FaPlus />
                            </i>
                        </h5>
                        <div className="flex flex-col justify-evenly h-full">
                            <h5 className="font-bold text-gray-200">New</h5>
                        </div>
                    </div>
                    {folders}
                </div>
                <div className=" px-2 md:px-5 flex justify-center md:items-center flex-col pt-5 w-full overflow-auto">
                    <div className="w-full md:px-0 md:w-4/5 min-w-[200px]">
                        <div className="w-full flex flex-col md:flex-row items-center">
                            <div className="w-full sm:w-1/2 sm:m-1">
                                <InputGroup
                                    label="Brand name"
                                    name="name"
                                    placeholder=" "
                                    required={true}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'name')
                                    }
                                />
                            </div>
                            <div className="w-full sm:w-1/2 m-1">
                                <SelectPicker
                                    data={myAvailableCate}
                                    className="w-full bg-slate-100"
                                    size="lg"
                                    placeholder="Select Collection"
                                    onChange={(e) => selectCateFunc(e)}
                                />
                            </div>
                        </div>
                        <div className="w-full flex mt-3 flex-col md:flex-row items-center">
                            <div className="w-full sm:w-1/2 m-1">
                                <CheckPicker
                                    data={selectedChildren}
                                    className="w-full bg-slate-100"
                                    size="lg"
                                    placeholder="Sub-category"
                                    onChange={(e) => updateValue(e, 'sub')}
                                />
                            </div>
                            <div className="w-full sm:w-1/2 m-1">
                                <InputGroup
                                    label="Reference key (optional)"
                                    name="refKey"
                                    placeholder=" "
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'refKey')
                                    }
                                />
                            </div>
                        </div>
                        <div className="w-full m-1">
                            <TextAreaGroup
                                label="Give a short note"
                                placeholder=" "
                                required={true}
                                onChange={(e) =>
                                    updateValue(e.target.value, 'about')
                                }
                            />
                        </div>
                    </div>

                    <div className="mt-4 w-4/5"></div>
                </div>
                <div className="flex justify-center mt-10 pb-20">
                    <button
                        onClick={createBrandHandler}
                        className="text-center w-[300px] h-10 rounded bg-slate-600 text-white font-bold text-md"
                    >
                        Create Brand
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Brand;

const Folders = ({ name, num, id, neededInfo, dispatch, setShowing }) => {
    const [eventFunc, setEventFunc] = useState('');
    const splited = eventFunc.split('-');
    const [open, setOpen] = useState(true);

    const deleteBrandHandler = () => {
        deleteBrand(
            splited,
            neededInfo,
            deleteHandler,
            myBusinessFiles,
            eventFunc,
            dispatch
        );
    };

    return (
        <div className="flex justify-between items-center min-w-[220px] relative px-4 m-2  h-24 border rounded-xl bg-blue-100 shadow-md">
            <i className="text-6xl text-blue-500">
                <img src={Folder2} alt="Brand" className="w-14" />
            </i>
            <i className="absolute top-2 right-2 w-6 h-3 bg-white  rounded-full flex items-center justify-center text-xs text-slate-300 cursor-pointer">
                <IconDropdown
                    Icon={<FaEllipsisH />}
                    Content={[
                        { value: name + '-delete-' + id, name: 'Delete' },
                        { value: name + '-edit-' + id, name: 'Edit' },
                        { value: name + '-view-' + id, name: 'View' },
                    ]}
                    onSelect={setEventFunc}
                    className="w-20"
                    val={splited}
                />
            </i>
            <div className="flex flex-col justify-evenly mt-3 h-full">
                <h5 className="font-bold text-sm cursor-pointer" title={name}>
                    {name.length < 15 ? name : name.substring(0, 14) + '...'}
                </h5>
                <p className="text-xs">{num} brand(s)</p>
            </div>
            {splited[1] === 'delete' && (
                <ModalPanel
                    title="Deletion"
                    children={
                        <>
                            <h1 className="leading-7">
                                You are about to drop a brand{' '}
                                <b>({splited[0]})</b>, click below button to
                                complete your action
                            </h1>
                            <div className="w-full flex justify-center pt-10">
                                <button
                                    onClick={deleteBrandHandler}
                                    className="w-28 h-8 bg-slate-800 text-white text-md border-none rounded shadow "
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    }
                    hasBackdrop={true}
                    keyboard={true}
                    open={open}
                    closeButton
                    buttonName="Varify Code"
                    handleClose={() => setOpen(!open)}
                />
            )}
            {splited[1] === 'view' &&
                setShowing(`Edit Product_My store_brand-${num}-${name}`)}
        </div>
    );
};
