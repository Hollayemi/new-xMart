import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo1 from '../../assets/images/png/logo2x.png';

const MyLi = ({ name, link, active }) => (
    <div className="w-full md:w-24">
        <Link to={link}>
            <li
                className={`w-full md:w-24 cursor-pointer leading-10 font-semibold hover:decoration-none active:text-red-400 text-md hover:text-white ${
                    active && 'text-red-400'
                } text-left px-6 md:p-0 md:text-center`}
            >
                {name}
            </li>
        </Link>
    </div>
);
const HeaderComp = ({ active }) => {
    const [toggleNav, setToggleNav] = useState('-right-48');
    return (
        <div className="flex shadow-md px-5 shadow-slate-500 sticky top-0 z-50 justify-between md:justify-around items-center bg-slate-800 h-14 border-b border-slate-400 text-white">
            <div>
                <img src={logo1} width={100} alt="xMart" />
            </div>
            <div className="md:hidden">
                <i onClick={() => setToggleNav('right-0')} className="text-lg">
                    <FaBars />
                </i>
            </div>

            <ul
                className={`flex flex-col w-48 md:w-auto md:flex-row fixed ${toggleNav} md:right-0 top-0 h-full md:relative items-center bg-slate-50 text-slate-900 md:text-white md:bg-transparent md:justify-evenly text-md pt-10 md:pt-0`}
            >
                <p
                    onClick={() => setToggleNav('-right-48')}
                    className="text-red-500 h-6 flex items-center md:hidden absolute top-2 px-4 cursor-pointer border-b w-full ab"
                >
                    close
                </p>
                <MyLi
                    name={'My store'}
                    link="/seller"
                    active={active === 'seller' ? true : false}
                />
                <MyLi
                    name={'Agent'}
                    link="/agent"
                    active={active === 'agent' ? true : false}
                />
                <MyLi
                    name={'Services'}
                    link="/services"
                    active={active === 'services' ? true : false}
                />
                <MyLi
                    name={'Contant us'}
                    link="/contact"
                    active={active === 'contact' ? true : false}
                />
                <MyLi
                    name={'About us'}
                    link="/about"
                    active={active === 'about' ? true : false}
                />
            </ul>
        </div>
    );
};

export default HeaderComp;
