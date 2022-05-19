import React from 'react';
import { websiteImages } from './Images';

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

const HorizontalDisplay = ({ image, about, aspect }) => {
    const Products = prodArray.map((each, index) => {
        return (
            <Product
                key={index}
                img={each.img}
                sellingPrice={each.sellingPrice}
                originalPrice={each.originalPrice}
                name={each.name}
            />
        );
    });
    return (
        <div className="bg-white py-4 md:p-4 mt-6 shadow-lg shadow-slate-200 border-t-4 border-slate-800">
            <h2 className="h-16 pl-5 md:pl-20 border-b font-bold text-lg text-black flex items-center">
                Electronics
            </h2>
            <div className="flex h-[700px] md:h-[360px] flex-col md:flex-row">
                <div className="w-full md:w-80 md:min-w-[250px] h-80 md:h-full relative">
                    <img
                        src={image}
                        alt="imageHere"
                        className="w-full h-full "
                    />
                    <div className="absolute bg-gradient-to-t from-blue-500 md:via-slate-800 to-transparent top-0 left-0 h-full w-full">
                        <div className="flex flex-col items-center absolute w-2/3 pr-2 right-0 md:w-full bottom-6 md:bottom-2 px-2">
                            <h5 className="text-white text-lg font-bold">
                                Disposable Gloves Hazmat Suit Personal
                                Protective Equipment Kit
                            </h5>
                            <button className="w-28 h-8 mt-3 rounded bg-white text-blue-500 shadow-xl">
                                Expore
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col overflow-x-auto ml-1">
                    <div className="overflow-x-auto myScroll-x overflow-y-hidden flex items-center">
                        {Products}
                    </div>
                    <div className="overflow-x-auto myScroll-x overflow-y-hidden flex items-center">
                        {Products}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HorizontalDisplay;

export const Product = ({ originalPrice, sellingPrice, img, name }) => {
    return (
        <div className="flex flex-col items-center w-40 h-40 rounded m-2 hover:shadow-lg">
            <div className="w-40 h-40">
                <img
                    src={img}
                    alt="img_here"
                    className="w-40 h-32 bg-gray00 rounded-xl"
                />
            </div>
            <div className="flex items-center justify-evenly w-full h-6">
                <h5 className="text-xs font-bold">{name}</h5>
            </div>
        </div>
    );
};
