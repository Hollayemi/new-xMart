import React from 'react';
import { FaAngleRight, FaList } from 'react-icons/fa';

export const Category = ({ name }) => {
    return (
        <div className="flex text-md justify-between hover:bg-white my-1 items-center px-4 w-full ">
            <h5 className=" my-1 cursor-pointer">{name}</h5>
            <i>
                <FaAngleRight />
            </i>
        </div>
    );
};

const Categories = () => {
    return (
        <div className="w-full">
            <div className="font-medium text-sm text-white p-2 flex items-center w-full bg-slate-800">
                <FaList />
                <h5 className="mx-2">OUR CATEGORIES</h5>
            </div>
            <div className="font-medium w-full">
                <Category name="Kemon top features" />
                <Category name="Plant" />
                <Category name="Homeware" />
                <Category name="Sport" />
                <Category name="Game" />
                <Category name="Beauty" />
                <Category name="Health" />
                <Category name="Computer Electronics" />
                <Category name="Fashion" />
                <Category name="Other categories" />
            </div>
        </div>
    );
};

export default Categories;
