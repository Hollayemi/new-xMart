import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const TwoColFlexImgRight = ({ image, more, title, checkNote, reverse }) => {
    //
    const note = checkNote.map((item, index) => {
        return (
            <li key={index} className={`flex items-center my-2`}>
                <i className={`text-slate-600`}>
                    <FaCheckCircle />
                </i>
                <p className={`px-3`}>{item}</p>
            </li>
        );
    });
    return (
        <div className={`flex justify-center`}>
            <div
                className={`flex items-center w-full px-2 md:px-6 py-8 ${
                    reverse && 'flex-reverse'
                }  flex-col md:flex-row`}
            >
                <div className="w-full md:w-1/2">
                    <h1 className={`font-bold text-2xl text-black font-sans`}>
                        {title}
                    </h1>
                    <p
                        className={`leading-7 text-gray-600 my-6 pl-2 pr-3 text-sm `}
                    >
                        {more}
                    </p>

                    <div>
                        <ul>{note}</ul>
                    </div>
                </div>
                <div
                    className={`relative flex  justify-center items-center mt-14 md:mt-0 w-full md:w-1/2`}
                >
                    <img
                        src={image}
                        alt={`img_here`}
                        className={` w-full px-6 md:px-0 md:w-3/4 items-center justify-center border-b-8 ${
                            reverse === true
                                ? 'rounded-b-lg border-blue-700'
                                : null
                        }`}
                    />
                </div>
            </div>
        </div>
    );
};

export default TwoColFlexImgRight;

export const IconNoteFlex = ({ note, icon, tag }) => {
    return (
        <div className="w-72 min-w-[300px] md:min-w-[200px] h-48 border shadow-xl rounded-2xl shadow-slate-200 m-6 flex flex-col justify-center items-center px-5 text-justify">
            <div className="flex flex-col items-center mb-3">
                <i className="text-5xl">{icon}</i>
                <h5 className="font-bold text-md">{tag}</h5>
            </div>
            <p className="cursor-cancel">{note}</p>
        </div>
    );
};
