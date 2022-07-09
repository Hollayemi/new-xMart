import React, { useState } from 'react';
import { FaPlus, FaEllipsisH, FaImage } from 'react-icons/fa';
import { SelectPicker, CheckPicker, AvatarGroup, Avatar, Loader } from 'rsuite';
import InputGroup from '../../../components/elements/Input/InputGroup';
import IconDropdown from '../../../components/elements/IconDropDown';
import { productInformation } from '../../../components/SellerComponents/Info/Categories';
import TextAreaGroup from '../../../components/elements/Input/TextAreaGroup';
import ImagePreview from './imagePreview';
import {
    createProductHandler,
    deleteProd,
} from '../../../state/slices/shop/products/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { REQUEST_STATUS } from '../../../state/slices/constants';
import ModalPanel from '../../../components/elements/ModalPanel';
import { myBusinessFiles } from '../../../state/slices/shop/display/displayAll';
// import * as fs from 'fs';

//folders
const Product = ({ myBrandData, dispatch, neededInfo, allProducts }) => {
    const [formData, setFormData] = useState({
        prodName: '',
        prodPrice: '',
        prodBrand: '',
        prodSub_Category: '',
        prodCategory: '',
        prodVari: {
            weight: '',
            unit: '',
            size: '',
            color: '',
            gender: '',
        },
        images: [],
        prodKey: '',
        prodInfo: '',
    });
    const newProd = useSelector((state) => state.reducer.myNewProduct);
    const [productCategory, setProductCategory] = useState(null);

    let newValue = {};
    function updateValue(newVal, variable) {
        // eslint-disable-next-line no-lone-blocks
        variable === 'name' && (newValue = { prodName: newVal });
        variable === 'price' && (newValue = { prodPrice: newVal });
        variable === 'reference' && (newValue = { prodKey: newVal });
        variable === 'note' && (newValue = { prodInfo: newVal });
        variable === 'brand' &&
            (newValue = {
                prodBrand: newVal.split('$$')[0],
                prodCategory: newVal.split('$$')[1],
                prodSub_Category: newVal.split('$$')[2],
            });

        variable === 'weight' &&
            (newValue.prodVari = { ...formData.prodVari, weight: newVal });
        variable === 'unit' &&
            (newValue.prodVari = { ...formData.prodVari, unit: newVal });
        variable === 'size' &&
            (newValue.prodVari = { ...formData.prodVari, size: newVal });
        variable === 'color' &&
            (newValue.prodVari = { ...formData.prodVari, color: newVal });
        variable === 'gender' &&
            (newValue.prodVari = { ...formData.prodVari, gender: newVal });

        variable === 'image' &&
            (newValue = { ...formData.images.push(newVal) });
        variable === 'removeImg' &&
            (newValue = { ...formData.images.filter(newVal) });

        setFormData({
            ...formData,
            ...newValue,
        });
    }

    const createProduct = () => {
        console.log(formData);
        createProductHandler(formData, dispatch, neededInfo);
    };

    let folders = null;
    folders =
        allProducts.type === 'success' &&
        (folders = allProducts.message.map((each, index) => {
            return (
                <Folders
                    key={index}
                    name={each.prodName}
                    id={each._id}
                    price={each.prodPrice}
                    prodImage={each.images}
                    neededInfo={neededInfo}
                />
            );
        }));

    return (
        <>
            <section className="relative mx-3">
                <div className="lg:w-[calc(100%-280px)]">
                    <div className="flex items-center h-44 relative overflow-x-auto w-full myScroll-x bg-slate-50 px-4 w-full border-4 border-slate-50">
                        <div className="flex justify-between items-center px-4 m-2 w-48 h-20 border min-w-[280px] rounded-lg bg-slate-50 shadow-sm">
                            <h5 className="text-gray-200 relative">
                                <FaImage className="text-6xl" />
                                <i className="text-sm shadow-md w-6 h-6 bg-white rounded-full flex items-center justify-center absolute top-5 left-4">
                                    <FaPlus />
                                </i>
                            </h5>
                            <div className="flex flex-col justify-evenly h-full">
                                <h5 className="font-bold text-gray-200">New</h5>
                            </div>
                        </div>
                        {folders}
                    </div>
                    <div className=" px-1 md:px-5 flex justify-center md:items-center flex-col pt-5 w-full overflow-auto">
                        <div className="w-full px-0 md:px-5">
                            <div className="w-full flex flex-col justify-center sm:flex-row flex-wrap items-center">
                                <div className="w-full sm:w-1/2 max-w-[280px] md:w-[250px] max- sm:m-1">
                                    <InputGroup
                                        label="Product Name"
                                        name="name"
                                        placeholder=" "
                                        required={true}
                                        onChange={(e) =>
                                            updateValue(e.target.value, 'name')
                                        }
                                    />
                                </div>
                                <div className="w-full sm:w-1/2 max-w-[280px] md:w-[250px] sm:m-1">
                                    <InputGroup
                                        label="Price"
                                        name="name"
                                        placeholder=" "
                                        required={true}
                                        type="number"
                                        onChange={(e) =>
                                            updateValue(e.target.value, 'price')
                                        }
                                    />
                                </div>
                                <div className="w-full sm:w-1/2 max-w-[280px] md:w-[250px] sm:m-1">
                                    <InputGroup
                                        label="ref key (optional)."
                                        name="name"
                                        placeholder=" "
                                        onChange={(e) =>
                                            updateValue(
                                                e.target.value,
                                                'reference'
                                            )
                                        }
                                    />
                                </div>
                                <div className="w-full sm:w-1/2 max-w-[280px] md:w-[250px] sm:m-1">
                                    <SelectPicker
                                        data={myBrandData}
                                        className="w-full bg-slate-100"
                                        size="lg"
                                        placeholder="Select Brand"
                                        onChange={(value) => {
                                            if (value) {
                                                updateValue(value, 'brand');
                                                setProductCategory(
                                                    value.split('$$')[1]
                                                );
                                            } else {
                                                setProductCategory(null);
                                            }
                                        }}
                                        onClean={() => updateValue('', 'brand')}
                                    />
                                </div>
                            </div>
                            <label className="block text-sm font-bold mt-7 text-slate-700 tracking-wider mb-1">
                                Product Specifications
                                <span className="text-red-600 dark:text-red-500">
                                    *
                                </span>
                            </label>
                            <div className="flex flex-wrap w-full justify-center">
                                {productCategory !== 'Wears' && (
                                    <SelectPicker
                                        data={productInformation.weight}
                                        className=" w-full sm:w-1/5 min-w-[280px] m-1 md:m-2 bg-slate-100"
                                        size="lg"
                                        placeholder="Weight"
                                        onChange={(value) =>
                                            updateValue(value, 'weight')
                                        }
                                    />
                                )}
                                {productCategory !== 'Wears' && (
                                    <SelectPicker
                                        data={productInformation.unit}
                                        className=" w-full sm:w-1/5 min-w-[280px] m-1 md:m-2 bg-slate-100"
                                        size="lg"
                                        placeholder="Unit"
                                        onChange={(value) =>
                                            updateValue(value, 'unit')
                                        }
                                    />
                                )}
                                <SelectPicker
                                    data={productInformation.gender}
                                    className=" w-full sm:w-1/5 min-w-[280px] m-1 md:m-2 bg-slate-100"
                                    size="lg"
                                    placeholder="Gender"
                                    onChange={(value) =>
                                        updateValue(value, 'gender')
                                    }
                                />
                                <CheckPicker
                                    data={productInformation.color}
                                    placeholder="Available colors"
                                    className=" w-full sm:w-1/5 min-w-[280px] m-1 md:m-2 bg-slate-100"
                                    size="lg"
                                    onChange={(value) =>
                                        updateValue(value, 'color')
                                    }
                                />
                                <SelectPicker
                                    data={productInformation.size}
                                    className=" w-full sm:w-1/5 min-w-[280px] m-1 md:m-2 bg-slate-100"
                                    size="lg"
                                    placeholder="Size"
                                    onChange={(value) =>
                                        updateValue(value, 'size')
                                    }
                                />
                            </div>
                            <div className="w-full m-1">
                                <TextAreaGroup
                                    label="Give a short description"
                                    placeholder=" "
                                    required={true}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'note')
                                    }
                                />
                            </div>
                            <label className="block text-sm font-bold text-slate-700 tracking-wider mb-1">
                                Add Images
                                <span className="text-red-600 dark:text-red-500">
                                    *
                                </span>
                            </label>
                            <ImagePreview
                                setFileList={updateValue}
                                fileList={formData.images}
                            />
                        </div>

                        <div className="mt-4 w-4/5"></div>
                    </div>
                    <div className="flex justify-center mt-10 pb-20">
                        <button
                            onClick={createProduct}
                            className="text-center w-[300px] h-10 rounded bg-slate-600 text-white font-bold text-md"
                        >
                            Create Product
                        </button>
                    </div>
                </div>
            </section>
            {newProd.status === REQUEST_STATUS.PENDING && (
                <div className="absolute z-50 top-0 left-0 w-full h-full">
                    <Loader
                        backdrop
                        speed="fast"
                        content="In few seconds..."
                        vertical
                    />
                </div>
            )}
        </>
    );
};
export default Product;

const Folders = ({ name, neededInfo, prodImage, price, id }) => {
    const [eventFunc, setEventFunc] = useState('');
    const splited = eventFunc.split('-');
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();
    let max = 1;
    if (prodImage.length > 1) {
        max = 2;
    }

    const deleteProdHandler = () => {
        deleteProd(splited, neededInfo, myBusinessFiles, eventFunc, dispatch);
    };
    return (
        <div className="flex cursor-pointer flex-col justify-btween min-w-[280px] relative px-4 m-2  h-32 border rounded-[50px] bg-blue-100 shadow-md">
            <i className="text-6xl text-blue-500 m-2">
                <AvatarGroup stack>
                    {prodImage
                        .filter((each, i) => i < max)
                        .map((each) => (
                            <Avatar
                                circle
                                key={each.name}
                                src={each.image}
                                alt={each.name}
                            />
                        ))}
                    {max > 2 && (
                        <Avatar circle style={{ background: '#111' }}>
                            <h5 className="text-xs">
                                +{prodImage.length - max}
                            </h5>
                        </Avatar>
                    )}
                </AvatarGroup>
                {/* <img
                    src={prodImage}
                    alt="Brand"
                    className="w-12 text-sm rounded-lg shadow-md h-12"
                /> */}
            </i>
            <i className="absolute top-5 right-7 w-6 h-3 bg-white rounded-full flex items-center justify-center text-xs text-slate-300 cursor-pointer">
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
            <div className="h-full">
                <h5 className="font-bold text-md">{name}</h5>
                <p
                    className="text-xs absolute px-3 h-10 text-white rounded-full flex items-center justify-center 
                            shadow-md shadow-slate-400 right-4 -bottom-3 bg-blue-500"
                >
                    &#x20A6;{price}
                </p>
            </div>
            {splited[1] === 'delete' && (
                <ModalPanel
                    title="Deletion"
                    children={
                        <>
                            <h1 className="leading-7">
                                You are about to drop a product{' '}
                                <b>({splited[0]})</b>, click below button to
                                complete your action
                            </h1>
                            <div className="w-full flex justify-center pt-10">
                                <button
                                    onClick={deleteProdHandler}
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
