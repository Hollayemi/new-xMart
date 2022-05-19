import React from 'react';

const Purchase = ({ x_name, price, xtra, gift, memory }) => {
    return (
        <div className="shadow-sm text-center h-80 py-8 bg-slate-800 rounded-lg my-6 mx-3 min-w-[270px] sm:w-48 md:w-68 hover:shadow-lg px-4">
            <h2 className="font-black text-xl text-white">{x_name}</h2>
            <br />
            <h3 className="text-slate-400">Only for &#x20A6; {price}</h3>

            <h4 className="text-slate-400">{xtra}</h4>

            <button className="bg-slate-100 border rounded-lg h-8 w-36 mt-12">
                Purchase{' '}
            </button>
            <br />

            <p className="text-xs mt-8 text-slate-400">
                This {x_name} choice offers {gift} {memory} of memory For free
            </p>
        </div>
    );
};

export default Purchase;
