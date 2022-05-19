import React from 'react';
import { websiteImages } from './Images';

export const Shop = ({ originalPrice, sellingPrice, img, name }) => {
    return (
        <div className="flex flex-col items-center relative w-1/4 h-48 min-w-[250px] rounded m-2 hover:shadow-lg">
            <img
                src={img}
                alt="img_here"
                className="w-full h-full bg-gray00 rounded-xl"
            />

            <div className="flex flex-col items-center justify-center text-white w-full absolute top-0 left-0  h-full bg-black bg-opacity-75">
                <h5 className="text-xl font-bold">{name}</h5>
                <button className="w-40 h-8 rounded-full text-white shadow-lg shadow-slate-800 bg-blue-500 mt-2 items-center">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

const prodArray = [
    {
        img: websiteImages.Image2,
        sellingPrice: '100',
        originalPrice: '700',
        name: 'Teddy Bear',
    },
    {
        img: websiteImages.Image3,
        sellingPrice: '100',
        originalPrice: '700',
        name: 'Toy',
    },
    {
        img: websiteImages.Image1,
        sellingPrice: '800',
        originalPrice: '300',
        name: 'Game Boy',
    },
    {
        img: websiteImages.Image2,
        sellingPrice: '100',
        originalPrice: '700',
        name: 'Teddy Bear',
    },
    {
        img: websiteImages.Image3,
        sellingPrice: '100',
        originalPrice: '700',
        name: 'Toy',
    },
    {
        img: websiteImages.Image1,
        sellingPrice: '800',
        originalPrice: '300',
        name: 'Game Boy',
    },
    {
        img: websiteImages.Image2,
        sellingPrice: '100',
        originalPrice: '700',
        name: 'Teddy Bear',
    },
    {
        img: websiteImages.Image3,
        sellingPrice: '100',
        originalPrice: '700',
        name: 'Toy',
    },
    {
        img: websiteImages.Image1,
        sellingPrice: '800',
        originalPrice: '300',
        name: 'Game Boy',
    },
    {
        img: websiteImages.Image2,
        sellingPrice: '100',
        originalPrice: '700',
        name: 'Teddy Bear',
    },
    {
        img: websiteImages.Image3,
        sellingPrice: '100',
        originalPrice: '700',
        name: 'Toy',
    },
    {
        img: websiteImages.Image1,
        sellingPrice: '800',
        originalPrice: '300',
        name: 'Game Boy',
    },
];
export const HorizontalShops = () => {
    const Products = prodArray.map((each, index) => {
        return (
            <Shop
                key={index}
                img={each.img}
                sellingPrice={each.sellingPrice}
                originalPrice={each.originalPrice}
                name={each.name}
            />
        );
    });
    return (
        <div className="flex items-center overflow-x-auto myScroll-x">
            {Products}
        </div>
    );
};

export const ShopsBlock = () => {
    const Products = prodArray.map((each, index) => {
        return index < 4 ? (
            <Shop
                key={index}
                img={each.img}
                sellingPrice={each.sellingPrice}
                originalPrice={each.originalPrice}
                name={each.name}
            />
        ) : null;
    });
    return (
        <div className="flex items-center overflow-x-auto myScroll-x">
            {Products}
        </div>
    );
};

export const ViewMoreShops = () => {};
