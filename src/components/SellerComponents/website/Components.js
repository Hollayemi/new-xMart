import React from 'react';
import Underline from '../../../assets/images/png/Landing/Vector 3.png';

export const Testimonials = ({ image, name, location, type, note }) => {
    const vendor = 'bg-green-200 text-green-600 px-2 py-1 rounded shadow';
    const customer = 'bg-orange-200 text-orange-600 px-2 py-1 rounded shadow';
    return (
        <div className="w-full px-2">
            <div>
                <img
                    src={image}
                    alt="image_here"
                    className="w-48 h-48 rounded-full"
                />
            </div>
            <div>
                <h5>{name}</h5>
                <div className="flex items-center">
                    <h5>in {location} </h5>
                    <h5
                        className={`mx-2 ${
                            type === 'vendor' ? vendor : customer
                        }`}
                    >
                        {type}
                    </h5>
                </div>
                <p className="text-xs mt-3 leading-5">{note}</p>
            </div>
        </div>
    );
};

export const StoreStep = ({ image, name, note }) => {
    return (
        <div className="w-full flex flex-col items-center px-2 pb-10">
            <div className="rounded-full flex justify-center items-center overflow-hidden w-24 bg-slate-50 h-24">
                <img src={image} alt="image_here" className="w-18 h-18" />
            </div>
            <h5 className="arial mt-2 font-bold text-white">{name}</h5>
            <div>
                <p className="text-xs mt-3 text-gray-100 leading-5 text-justify">
                    {note}
                </p>
            </div>
        </div>
    );
};

export const ImageNote = ({ image, heading, note, backdrop, second }) => {
    return (
        <div
            className={`flex ${
                second ? 'bg-orange-100 flex-reverse' : 'bg-gray-200'
            } items-center justify-center py-8 px-3`}
        >
            <div className="w-full pt-16 flex justify-evenly flex-col md:flex-row">
                <div className="w-full md:w-2/5 h-68 relative flex justify-center items-center">
                    <img
                        src={image}
                        className="w-[470px] mb-14 z-40"
                        alt="img-here"
                    />
                </div>
                <div className="w-full md:w-3/5 flex justify-center">
                    <div className="w-full py-4 md:py-0 md:w-5/6">
                        <h5
                            className={`font-bold text-2xl relative text-slate-800 arial ${
                                second && 'text-gray-700'
                            }`}
                        >
                            {heading}
                            <img
                                src={Underline}
                                alt="underline"
                                className="absolute top-8 left-10 b w-52"
                            />
                        </h5>
                        <p
                            className={`mt-8 exp-text Lucida tracking-wid text-gray-${
                                second ? '800' : '600'
                            } leading-24`}
                        >
                            {note}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
