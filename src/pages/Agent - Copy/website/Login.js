import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from '../../../state/slices/admin/login';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formData = {
        email: email,
        password: password,
    };
    const loginHandler = (e) => {
        e.preventDefault();
        adminLogin(formData, dispatch, navigate);
    };

    return (
        <div className="bg-slate-900 h-full w-full absolute flex items-center justify-center">
            <div className="flex items-center border p-8 rounded justify-center flex-col">
                <h1 className="font-bold text-white">xMart Admin Login</h1>
                <div>
                    <form
                        onSubmit={loginHandler}
                        className="flex flex-col items-center justify-center"
                    >
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border focus:border-red-100 w-full m-2 mt-8 bg-transparent rounded-xl text-white px-5 py-1"
                            placeholder="Email"
                        />
                        <div className="w-full flex px-2 text-xs justify-between items-center">
                            <Link
                                to="/admin/forgot-password"
                                className="cursor-pointer text-xs hover:text-teal-200 text-teal-100"
                            >
                                forgot password
                            </Link>
                            <i className="fa fa-eye hover:text-teal-200 text-teal-100"></i>
                        </div>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border focus:border-red-100 w-full m-2 mb-3 bg-transparent rounded-xl text-white px-5 py-1"
                            placeholder="password"
                            type="password"
                        />

                        <button className="text-black h-8 w-full bg-blue-200 rounded-full shadow-lg">
                            Login
                        </button>

                        <div className="w-full flex px-2 text-xs justify-between mt-5 items-center">
                            <p className="text-sm cursor-pointer hover:text-teal-200 text-teal-100">
                                create admin branch
                            </p>
                            <Link
                                to="/admin/signup"
                                className="text-sm hover:text-teal-200 text-teal-100"
                            >
                                Sign up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
