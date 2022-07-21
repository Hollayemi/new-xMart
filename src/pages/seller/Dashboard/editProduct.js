import React, { useEffect, useState } from 'react';
import { SelectPicker, Stack } from 'rsuite';
import InputGroup from '../../../components/elements/Input/InputGroup';
import { MartCategories } from '../../../components/SellerComponents/Info/Categories';

const EditProduct = ({ pageInfo, loadedCateg, neededInfo }) => {
    const [selectedCate, setCategory] = useState('');
    console.log(loadedCateg);

    const [formData, setFormData] = useState({});
    const [avaiCate, setCate] = useState([]);
    console.log(avaiCate);
    let newValue = {};
    useEffect(() => {
        loadedCateg.message.map((data) => {
            updateValue(data);
        });
    }, []);

    function updateValue(data) {
        let cate = data.category;
        setCate(avaiCate.push(cate));
        console.log(avaiCate);
        newValue = { ...(formData[cate] = []) };
        newValue = { ...formData[cate].push([data.collectionName, data._id]) };
        setFormData({
            ...formData,
            ...newValue,
        });
    }

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
    // avaiCate.map((res) => {
    // console.log(avaiCate);
    // });
    return (
        <section className="lg:w-[calc(100%-280px)]">
            <div>
                {/* <InputGroup label="S" /> */}
                <SelectPicker
                    data={MartCategories}
                    className=" w-full sm:w-1/5 min-w-[280px] m-1 md:m-2 bg-slate-100"
                    size="lg"
                    placeholder="Select Category"
                    // onChange={(value) => updateValue(value, 'gender')}
                />
            </div>
            <div className="my-4 w-full min-w-[300px] md:w-4/5">
                <label className="block text-sm font-bold text-slate-700 tracking-wider mb-1">
                    Select Collections
                    <span className="text-red-600 dark:text-red-500">*</span>
                </label>
                <Stack wrap spacing={6}>
                    {AllCate}
                </Stack>
            </div>
        </section>
    );
};

export default EditProduct;
