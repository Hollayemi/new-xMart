import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPass = () => {
    return (
        <div className="bg-slate-900 h-full w-full absolute flex items-center justify-center">
            <div className="flex items-center border p-8 rounded justify-center flex-col">
                <h1 className="font-bold text-white">xMart Forgot Password</h1>
                <div>
                    <form className="flex flex-col items-center justify-center">
                        <input
                            className="border focus:border-red-100 w-full m-2 mt-8 bg-transparent rounded-xl text-white px-5 py-1"
                            placeholder="email"
                        />

                        <button className="text-black h-8 w-full bg-teal-200 rounded-full shadow-lg">
                            Send
                        </button>

                        <div className="w-full flex px-2 text-xs justify-between mt-2 items-center">
                            <p className="text-sm hover:text-teal-200 text-teal-100">
                                {' '}
                            </p>
                            <Link
                                to="/admin/login"
                                className="text-sm hover:text-teal-200 text-teal-100 cursor-pointer"
                            >
                                Back
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPass;
