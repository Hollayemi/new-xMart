import React from 'react';
import { SignInForm } from './Signin';

const KemSignIn = () => {
    return (
        <section className="h-80 min-h-screen overflow-x-hidden">
            <div className="w-full h-full flex">
                <div className="fixed left-0 top-0 hidden md:block sm-w-40 md:w-2/5 bg-slate-800 h-full"></div>
                <div className="hidden md:block sm-w-40 md:w-2/5 bg-slate-800 h-full"></div>
                <div className="w-full md:w-3/5  px-5 md:px-4 flex flex-col items-center justify-center">
                    <SignInForm />
                </div>
            </div>
        </section>
    );
};

export default KemSignIn;
