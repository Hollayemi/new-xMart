import React from 'react';
import { Placeholder } from 'rsuite';

const Status = ({ prod_name, quantity, color, image, icon, action }) => {
    return (
        <div className="flex flex-col items-center mx-4 min-w-[300px] mt-10">
            <div className="flex flex-col items-center py-2 bg-slate-800 w-64 rounded shadow text-slate-400 relative">
                {icon && (
                    <i className="absolute top-2 right-2 text-blue-500 text-lg">
                        {icon}
                    </i>
                )}
                <img src={image} alt={Placeholder} width="100" />
                <div className="flex flex-col items-start my-3">
                    <div className="flex items-center justify-center pl-2">
                        <h5 className="w-28 min-w-[100px] leading-7">
                            Product name
                        </h5>
                        <h5>{prod_name}</h5>
                    </div>

                    <div className="flex items-center justify-center pl-2">
                        <h5 className="w-28 min-w-[100px] leading-7">
                            Quantity
                        </h5>
                        <h5>{quantity}</h5>
                    </div>

                    <div className="flex items-center justify-center pl-2">
                        <h5 className="w-28 min-w-[100px] leading-7 text-left">
                            Color
                        </h5>
                        <h5>{color}</h5>
                    </div>
                    {action && (
                        <div>
                            <button className="w-24 h-6 rounded shadow text-sm bg-slate-100 m-2 text-slate-400 px-2 hover:bg-slate-200 hover:text-slate-800">
                                Accept
                            </button>
                            <button className="w-24 h-6 rounded shadow text-sm bg-slate-100 m-2 text-slate-400 px-2 hover:bg-slate-200 hover:text-red-700">
                                Out of stock
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {!icon && (
                <p className="text-red-500 text-sm py-2">
                    Request deactivated after 24 hours
                </p>
            )}
        </div>
    );
};

export default Status;
