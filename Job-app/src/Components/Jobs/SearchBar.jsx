import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ setSearchQuery }) => {

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="w-full">
            <div className="w-full items-center gap-5">
                <div className="w-full flex items-center gap-3 bg-white rounded-lg px-4 shadow-sm border border-gray-400">
                    <IoIosSearch color="#6366f1"/>
                    <input
                        type="text"
                        placeholder="Search for Job title"
                        className="w-full h-14 bg-white rounded-lg outline-none text-gray-700"
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBar