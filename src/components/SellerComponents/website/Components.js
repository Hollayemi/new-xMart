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

export const ImageNote = ({ image, heading, note, backdrop, second }) => {
    return (
        <div
            className={`flex ${
                second ? 'bg-orange-100 flex-reverse' : 'bg-gray-900'
            } items-center justify-center`}
        >
            <div className="w-5/6 pt-16 flex justify-evenly flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-68 relative flex justify-center items-center">
                    <img
                        src={image}
                        className="w-[470px] z-50"
                        alt="img-here"
                    />
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full py-4 md:py-0 md:w-5/6">
                        <h5
                            className={`font-bold text-2xl text-white ${
                                second && 'text-gray-700'
                            }`}
                        >
                            {heading}
                        </h5>
                        <p
                            className={`mt-8 exp-text text-gray-${
                                second ? '800' : '400'
                            } leading-20`}
                        >
                            {note}
                        </p>
                        <p
                            className={`mt-8 exp-text text-gray-${
                                second ? '500' : '200'
                            } pb-2 leading-20 relative cursor-pointer`}
                        >
                            {/* SHARE YOUR OWN STORY! */}
                            <img
                                src={Underline}
                                alt="underline"
                                className="absolute bottom-0 left-0 b w-48"
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
