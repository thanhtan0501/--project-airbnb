"use client";
import { MenuIcon } from "@/app/assets/Icons/Icons";
import React, { useCallback, useState } from "react";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    console.log(isOpen);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-foreground transition cursor-pointer"
                    onClick={() => {}}
                >
                    Airbnb your home
                </div>
                <div
                    className="p-4 md:p-2 md:pl-3.5 border border-border flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                    onClick={toggleOpen}
                >
                    <MenuIcon />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm py-2">
                    <div className="flex flex-col">
                        <>
                            <MenuItem onClick={() => {}} label="Sign up" />
                            <MenuItem onClick={() => {}} label="Log in" />
                        </>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
