import React from 'react';

export const MyCartPreView = ({ image, name, qty, price }) => {
    return (
        <div className="w-full my-6 text-slate-900">
            <div className="flex items-center px-2">
                <div className="w-12 h-12 flex justify-center items-center hover:border-green-600 cursor-pointer border-slate-700 mx-2 rounded-md bg-slate-800 border">
                    <img
                        src={image}
                        className="w-10 h-10 max-h-fit"
                        alt="my images"
                    />
                </div>
                <div className="flex w-full justify-between items-center">
                    <div>
                        <h5 className="font-semibold">{name}</h5>
                        <div>
                            <div className="flex w-12 tracking-wide text-xs items-center bg-slate-200 rounded-sm px-1 shadow-md">
                                <h5>Qty:</h5>
                                <span className="pl-1 pr-2">{qty}</span>
                            </div>
                        </div>
                    </div>
                    <p>&#x20A6;{price}</p>
                </div>
            </div>
        </div>
    );
};

export const SizeBtn = ({ size, disable }) => {
    return (
        <div className="p-1">
            {disable ? (
                <button
                    disabled
                    className="w-12 h-10 rounded bg-slate-200 text-slate-500 border"
                >
                    {size}
                </button>
            ) : (
                <button className="w-12 hover:-mt-4 h-10 rounded bg-slate-500 text-slate-100 border">
                    {size}
                </button>
            )}
        </div>
    );
};

export const ColorBtn = ({ color }) => {
    return (
        <div className="p-1">
            <div
                className={`w-8 h-8 rounded bg-${color}-600 text-slate-100 border`}
            ></div>
        </div>
    );
};

export const PreviewImg = ({ setImage, image }) => {
    return (
        <div className="w-12 h-12 flex justify-center items-center hover:border-green-600 cursor-pointer border-slate-200 mx-2 rounded-md bg-slate-200 border">
            <img
                src={image}
                className="w-10 h-10 max-h-fit"
                alt="my images"
                onClick={() => setImage(image)}
            />
        </div>
    );
};
