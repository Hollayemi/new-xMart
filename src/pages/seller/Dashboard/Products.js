import React, { useState } from 'react';
import { FaFolder, FaPlus, FaEllipsisH } from 'react-icons/fa';
import { SelectPicker, CheckPicker } from 'rsuite';
import InputGroup from '../../../components/elements/Input/InputGroup';
import IconDropdown from '../../../components/elements/IconDropDown';
import { productInformation } from '../../../components/SellerComponents/Info/Categories';
import TextAreaGroup from '../../../components/elements/Input/TextAreaGroup';
import Folder2 from '../../../assets/images/main/folder2.png';
import ImagePreview from './imagePreview';

//folders
const Product = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        brand: '',
        weight: '',
        unit: '',
        size: '',
        color: '',
        gender: '',
        note: '',
    });
    const [fileList, setFileList] = useState([]);

    let newValue = {};
    function updateValue(newVal, variable) {
        // eslint-disable-next-line no-lone-blocks
        variable === 'name' && (newValue = { name: newVal });
        variable === 'price' && (newValue = { price: newVal });
        variable === 'brand' && (newValue = { brand: newVal });
        variable === 'weight' && (newValue = { weight: newVal });
        variable === 'unit' && (newValue = { unit: newVal });
        variable === 'size' && (newValue = { size: newVal });
        variable === 'color' && (newValue = { color: newVal });
        variable === 'gender' && (newValue = { gender: newVal });
        variable === 'note' && (newValue = { note: newVal });

        setFormData({
            ...formData,
            ...newValue,
        });
    }
    const getInfo = () => {
        //
    };
    return (
        <section className="relative mx-3">
            <div className="lg:w-[calc(100%-280px)]">
                <div className="flex items-center h-44 relative overflow-x-auto w-full myScroll-x bg-slate-50 px-4 w-full border-4 border-slate-50">
                    <div className="flex justify-between items-center px-4 m-2 w-48 h-20 border min-w-[200px] rounded-lg bg-slate-50 shadow-sm">
                        <h5 className="text-gray-200 relative">
                            <FaFolder className="text-6xl" />
                            <i className="text-sm w-6 h-6 bg-white rounded-full flex items-center justify-center absolute top-5 left-4">
                                <FaPlus />
                            </i>
                        </h5>
                        <div className="flex flex-col justify-evenly h-full">
                            <h5 className="font-bold text-gray-200">New</h5>
                            {/* <p className="text-xs">21 products</p> */}
                        </div>
                    </div>
                    <Folders name="iPhone 13pro max" num="1" />
                    <Folders name="Folder 2" num="3" />
                    <Folders name="Folder 3" num="5" />
                    <Folders name="Folder 4" num="2" />
                    <Folders name="Folder 5" num="4" />
                    <Folders name="Folder 6" num="1" />
                    <Folders name="Folder 7" num="2" />
                    <Folders name="Folder 8" num="3" />
                </div>
                <div className=" px-1 md:px-5 flex justify-center md:items-center flex-col pt-5 w-full overflow-auto">
                    <div className="w-full px-0 md:px-5 min-w-[270px]">
                        <div className="w-full flex-col sm:flex-row flex items-center">
                            <div className="w-full sm:w-1/2 sm:m-1">
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
                            <div className="w-full sm:w-1/2 sm:m-1">
                                <InputGroup
                                    label="Price"
                                    name="name"
                                    placeholder=" "
                                    required={true}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'price')
                                    }
                                />
                            </div>
                            <div className="w-full sm:w-1/2 sm:m-1">
                                <SelectPicker
                                    data={productInformation.weight}
                                    className="w-full bg-slate-100"
                                    size="lg"
                                    placeholder="Select Brand"
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'brand')
                                    }
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
                            <SelectPicker
                                data={productInformation.weight}
                                className=" w-full sm:w-1/5 min-w-[200px] m-1 md:m-2 bg-slate-100"
                                size="lg"
                                placeholder="Weight"
                                onChange={(value) =>
                                    updateValue(value, 'weight')
                                }
                            />
                            <SelectPicker
                                data={productInformation.unit}
                                className=" w-full sm:w-1/5 min-w-[200px] m-1 md:m-2 bg-slate-100"
                                size="lg"
                                placeholder="Unit"
                                onChange={(value) => updateValue(value, 'unit')}
                            />
                            <SelectPicker
                                data={productInformation.gender}
                                className=" w-full sm:w-1/5 min-w-[200px] m-1 md:m-2 bg-slate-100"
                                size="lg"
                                placeholder="Gender"
                                onChange={(value) =>
                                    updateValue(value, 'gender')
                                }
                            />
                            <CheckPicker
                                data={productInformation.color}
                                placeholder="Available colors"
                                className=" w-full sm:w-1/5 min-w-[200px] m-1 md:m-2 bg-slate-100"
                                size="lg"
                                onChange={(value) =>
                                    updateValue(value, 'color')
                                }
                            />
                            <SelectPicker
                                data={productInformation.size}
                                className=" w-full sm:w-1/5 min-w-[200px] m-1 md:m-2 bg-slate-100"
                                size="lg"
                                placeholder="Size"
                                onChange={(value) => updateValue(value, 'size')}
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
                            setFileList={setFileList}
                            fileList={fileList}
                        />
                    </div>

                    <div className="mt-4 w-4/5"></div>
                </div>
                <div className="flex justify-center mt-10 pb-20">
                    <button
                        onClick={getInfo}
                        className="text-center w-[300px] h-10 rounded bg-slate-600 text-white font-bold text-md"
                    >
                        Create Product
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Product;

const Folders = ({ name, num }) => {
    const [eventFunc, setEventFunc] = useState('');
    console.log(eventFunc);
    return (
        <div className="flex flex-col justify-btween min-w-[200px] relative px-4 m-2  h-32 border rounded-[50px] bg-blue-100 shadow-md">
            <i className="text-6xl text-blue-500 m-2">
                <img src={Folder2} alt="Brand" className="w-12" />
            </i>
            <i className="absolute top-5 right-7 w-6 h-3 bg-white rounded-full flex items-center justify-center text-xs text-slate-300 cursor-pointer">
                <IconDropdown
                    Icon={<FaEllipsisH />}
                    Content={[
                        { value: name + '-delete', name: 'Delete' },
                        { value: name + '-edit', name: 'Edit' },
                        { value: name + '-view', name: 'View' },
                    ]}
                    onSelect={(event) => setEventFunc(event)}
                    className="w-20"
                />
            </i>
            <div className="h-full">
                <h5 className="font-bold text-md">{name}</h5>
                <p
                    className="text-xs absolute px-3 h-10 text-white rounded-full flex items-center justify-center 
                            shadow-md shadow-slate-400 right-4 -bottom-3 bg-blue-500"
                >
                    ${num},450
                </p>
            </div>
        </div>
    );
};
