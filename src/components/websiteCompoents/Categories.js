import React from 'react';
import { FaAngleRight, FaList } from 'react-icons/fa';

export const Category = ({ name, setCategory, expandCate }) => {
    return (
        <div
            className={`flex ${
                expandCate === name ? 'text-blue-500 bg-blue-200' : null
            } text-md justify-between cursor-pointer my-1 items-center px-4 w-full`}
            onClick={() => setCategory(name)}
        >
            <h5 className=" my-1">{name}</h5>
            <i>
                <FaAngleRight />
            </i>
        </div>
    );
};

const Categories = ({ setCategory, expandCate }) => {
    return (
        <div className="w-full">
            <div className="font-medium text-sm text-white p-2 flex items-center w-full bg-slate-800">
                <FaList />
                <h5 className="mx-2">OUR CATEGORIES</h5>
            </div>
            <div className="font-medium w-full">
                <Category
                    setCategory={setCategory}
                    expandCate={expandCate}
                    name="Kemon top features"
                />
                <Category
                    setCategory={setCategory}
                    expandCate={expandCate}
                    name="Wears"
                />
                <Category
                    setCategory={setCategory}
                    expandCate={expandCate}
                    name="Drinks"
                />
                <Category
                    setCategory={setCategory}
                    expandCate={expandCate}
                    name="Sport"
                />
                <Category
                    setCategory={setCategory}
                    expandCate={expandCate}
                    name="Game"
                />
                <Category
                    setCategory={setCategory}
                    expandCate={expandCate}
                    name="Beauty"
                />
                <Category
                    setCategory={setCategory}
                    expandCate={expandCate}
                    name="Health"
                />
                <Category
                    setCategory={setCategory}
                    expandCate={expandCate}
                    name="Computer Electronics"
                />
                <Category
                    setCategory={setCategory}
                    expandCate={expandCate}
                    name="Fashion"
                />
                <Category
                    setCategory={setCategory}
                    expandCate={expandCate}
                    name="Other categories"
                />
            </div>
        </div>
    );
};

export default Categories;
