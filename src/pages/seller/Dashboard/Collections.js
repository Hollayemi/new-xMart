import React, { useEffect, useState } from 'react';
import { FaFolderOpen, FaFolder, FaPlus, FaEllipsisH } from 'react-icons/fa';
import { Stack } from 'rsuite';
import InputGroup from '../../../components/elements/Input/InputGroup';
import IconDropdown from '../../../components/elements/IconDropDown';
import { MartCategories } from '../../../components/SellerComponents/Info/Categories';
import TextAreaGroup from '../../../components/elements/Input/TextAreaGroup';
import { useDispatch, useSelector } from 'react-redux';
import {
    createHandler,
    deleteCol,
} from '../../../state/slices/shop/collections/createCollection';
import ModalPanel from '../../../components/elements/ModalPanel';
import { deleteHandler } from '../../../state/slices/shop/delete';
import {
    myBusinessFiles,
    storeFiles,
} from '../../../state/slices/shop/display/displayAll';
//

const Collections = ({ collections, neededInfo }) => {
    const { reFetchData, otpStatus, setFiles } = neededInfo;
    useEffect(() => {
        storeFiles(shopData.id, dispatch, reFetchData);
    }, []);

    const [formData, setFormData] = useState({
        collectionName: '',
        collectionInfo: '',
    });
    const [selectedCate, setCategory] = useState('');
    let newValue = {};
    function updateValue(newVal, variable) {
        variable === 'name' && (newValue = { collectionName: newVal });
        variable === 'about' && (newValue = { collectionInfo: newVal });
        setFormData({
            ...formData,
            ...newValue,
        });
    }
    const { shopData } = useSelector((state) => state.reducer.setShopReducer);
    const { otpData } = useSelector((state) => state.reducer.setOtpReducer);

    //
    //
    let folders = null;
    if (collections.type === 'success') {
        folders = collections.message.map((each, index) => {
            return (
                <Folders
                    name={each.collectionName}
                    num="1"
                    key={index}
                    id={each._id}
                    otpData={otpData}
                    shopData={shopData}
                    reFetchData={reFetchData}
                    category={each.category}
                />
            );
        });
    }
    //

    //
    const AllCate = MartCategories.map((res, index) => {
        return (
            <p
                key={index}
                className={`h-10 px-3 rounded-lg shadow ${
                    selectedCate === res
                        ? ' bg-slate-300 text-slate-900 shadow-lg'
                        : 'bg-slate-600 text-slate-100'
                } flex items-center cursor-pointer`}
                onClick={() => setCategory(res)}
            >
                {res}
            </p>
        );
    });
    //
    const dispatch = useDispatch();
    const createCateHandler = () => {
        createHandler(
            otpStatus,
            shopData,
            formData,
            otpData,
            selectedCate,
            dispatch,
            setFiles,
            reFetchData
        );
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
                            {/* <p className="text-xs">21 products</p> */}
                        </div>
                    </div>
                    {folders}
                </div>
                <div className=" md:px-5 flex justify-center md:items-center flex-col pt-5 w-full overflow-auto">
                    <div className="my-4 w-full min-w-[300px] md:w-4/5">
                        <label className="block text-sm font-bold text-slate-700 tracking-wider mb-1">
                            Collection category
                            <span className="text-red-600 dark:text-red-500">
                                *
                            </span>
                        </label>
                        <Stack wrap spacing={6}>
                            {AllCate}
                        </Stack>
                    </div>
                    <div className="w-full md:w-4/5 min-w-[300px]">
                        <div className="w-full flex flex-col md:flex-row items-center">
                            <div className="px-2 w-full mt-2">
                                <InputGroup
                                    label="Collection name"
                                    required={true}
                                    name="name"
                                    placeholder=" "
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'name')
                                    }
                                />
                            </div>
                        </div>
                        <div className="w-full m-1">
                            <TextAreaGroup
                                label="Give a short note (optional)"
                                placeholder=" "
                                required={true}
                                onChange={(e) =>
                                    updateValue(e.target.value, 'about')
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10 pb-20">
                    <button
                        onClick={createCateHandler}
                        className="text-center w-[300px] h-10 rounded bg-slate-600 text-white font-bold text-md"
                    >
                        Create Collection
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Collections;
//

//
//folders
const Folders = ({
    name,
    num,
    id,
    otpData,
    shopData,
    reFetchData,
    category,
}) => {
    const dispatch = useDispatch();
    const [eventFunc, setEventFunc] = useState('');
    const splited = eventFunc.split('-');
    const [open, setOpen] = useState(true);

    const deleteColHandler = () => {
        deleteCol(
            shopData,
            otpData,
            splited,
            dispatch,
            deleteHandler,
            myBusinessFiles,
            eventFunc,
            reFetchData
        );
    };

    return (
        <div className="flex justify-between items-center min-w-[220px] relative px-4 m-2  h-24 border rounded-xl bg-blue-100 shadow-md">
            <i className="text-6xl text-blue-500">
                <FaFolder />
            </i>
            <i className="absolute top-2 right-2 w-6 h-3 bg-white rounded-full flex items-center justify-center text-xs text-slate-300 cursor-pointer">
                <IconDropdown
                    Icon={<FaEllipsisH />}
                    Content={[
                        {
                            value: name + '-delete-' + id + '-' + category,
                            name: 'Delete',
                        },
                        {
                            value: name + '-edit-' + id + '-' + category,
                            name: 'Edit',
                        },
                        {
                            value: name + '-view-' + id + '-' + category,
                            name: 'View',
                        },
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
                                You are about to drop a collection{' '}
                                <b>({splited[0]})</b>, click below button to
                                complete your action
                            </h1>
                            <div className="w-full flex justify-center pt-10">
                                <button
                                    onClick={deleteColHandler}
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
        </div>
    );
};
