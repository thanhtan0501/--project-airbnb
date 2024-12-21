"use client";

import { SearchIcon } from "@/app/assets/Icons/Icons";
import React from "react";

const Search = () => {
    return (
        <div className="border w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between text-sm font-semibold">
                <div className="px-6">Any Where</div>
                <div className="hidden sm:block px-6 border-x flex-1 text-center">
                    Any week
                </div>
                <div className="pl-6 pr-2 text-tertiary flex flex-row items-center gap-3">
                    <div className="hidden sm:block">Add Guest</div>
                    <div className="p-2 bg-primary rounded-full text-white">
                        <SearchIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
