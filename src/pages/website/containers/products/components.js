import React from 'react';

export const MyCartPreView = ({ image, name, qty, price }) => {
    return (
        <div className="w-full my-6 text-slate-900">
            <div className="flex items-center px-2">
                <div className="w-12 h-12 min-w-16 min-h-12 flex justify-center items-center cursor-pointer mx-2 rounded-md border">
                    <img
                        src={image}
                        className="w-10 h-10 max-h-fit"
                        alt="my images"
                    />
                </div>
                <div className="flex w-8/12 justify-between items-center">
                    <div>
                        <h5 className="font-semibold">{name}</h5>
                        <div>
                            <div className="flex items-center tracking-wide text-xs">
                                <h5 className="w-6 min-w-fit items-center bg-slate-200 rounded-sm px-1 shadow-md">
                                    Price:
                                </h5>
                                <span className="pl-1 pr-2">
                                    &#x20A6;{price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SizeBtn = ({ size, disable, preferedSizes, setSize }) => {
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
                <button
                    onClick={() => setSize(size)}
                    className={`w-12 hover:-mt-4 ${
                        preferedSizes.includes(size) && '-mt-4'
                    } h-10 rounded bg-slate-500 text-slate-100 border`}
                >
                    {size}
                </button>
            )}
        </div>
    );
};

export const ColorBtn = ({ color, chosenColors, setColor }) => {
    return (
        <div className="p-1">
            <div
                onClick={() => setColor(chosenColors.push(color))}
                className={`w-8 h-8 rounded bg-${color}-600 text-slate-100 border ${
                    chosenColors.includes(color) && '-mt-4'
                }`}
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
