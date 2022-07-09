import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminSignup } from '../../../state/slices/admin/signup';

const Signup = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');

    const formData = {
        name: name,
        email: email,
        password: password,
    };

    const signupHandler = (e) => {
        e.preventDefault();
        if (password === confPass) {
            adminSignup(formData, dispatch);
        }
    };

    return (
        <div className="bg-slate-900 h-full w-full absolute flex items-center justify-center">
            <div className="flex items-center border p-8 rounded justify-center flex-col">
                <h1 className="font-bold text-white">MocoMoca Sign up</h1>
                <div>
                    <form className="flex flex-col items-center justify-center">
                        <input
                            className="border focus:border-red-100 w-full m-2 mt-8 bg-transparent rounded-xl text-white px-5 py-1"
                            placeholder="Name"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className="border focus:border-red-100 w-full m-2 bg-transparent rounded-xl text-white px-5 py-1"
                            placeholder="email"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className="w-full flex px-2 text-xs justify-end items-center">
                            <i className="fa fa-eye hover:text-teal-200 text-teal-100"></i>
                        </div>
                        <input
                            className="border focus:border-red-100 w-full m-2 mb-3 bg-transparent rounded-xl text-white px-5 py-1"
                            placeholder="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="w-full flex px-2 text-xs justify-end items-center">
                            <i className="fa fa-eye hover:text-teal-200 text-teal-100"></i>
                        </div>
                        <input
                            className="border focus:border-red-100 w-full m-2 mb-3 bg-transparent rounded-xl text-white px-5 py-1"
                            placeholder="confirm password"
                            type="password"
                            onChange={(e) => setConfPass(e.target.value)}
                        />

                        <button
                            onClick={(e) => signupHandler(e)}
                            className="text-black h-8 w-full bg-blue-200 rounded-full shadow-lg"
                        >
                            Sign up
                        </button>

                        <div className="w-full flex px-2 text-xs justify-between mt-2 items-center">
                            <p className="text-sm hover:text-teal-200 text-teal-100">
                                Already have account{' '}
                            </p>
                            <Link
                                to="/admin/login"
                                className="text-sm hover:text-teal-200 text-teal-100"
                            >
                                Sign in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
