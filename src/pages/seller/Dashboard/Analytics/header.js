import React from 'react';
import { Badge, Input, InputGroup } from 'rsuite';
import { FaBell, FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <section className="flex items-center w-full">
            <div className="flex items-center w-3/5">
                <div className="font-black text-xl text-blue-500 w-56 text-center">
                    TransMonitor
                </div>
                <div>
                    <InputGroup inside className="w-4/5 min-w-[400px] ml-10">
                        <InputGroup.Addon>
                            <FaSearch />
                        </InputGroup.Addon>
                        <Input placeholder="search" />
                    </InputGroup>
                </div>
            </div>
            <div className="flex items-center w-2/5 justify-evenly">
                <h5>search</h5>
                <h5>FAQ</h5>
                <h5>
                    <Badge content={9}>
                        <i className="text-xl">
                            <FaBell />
                        </i>
                    </Badge>
                </h5>
                <div className="flex items-center">
                    <div className="text-right pr-1">
                        <h5 className="text-xs text-gray-400">Hello</h5>
                        <h5 className="text-sm text-gray-400">Name here</h5>
                    </div>
                    <img
                        src={''}
                        alt="img_here"
                        className="w-10 h-10 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Header;
