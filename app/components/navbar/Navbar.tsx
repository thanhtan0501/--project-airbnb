"use client";

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
    return (
        <div className="sticky top-0 left-0 w-full bg-background z-10 shadow-[0_1px_0px_rgba(0,0,0,0.08)]">
            <div className="py-4">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <Search />
                        <UserMenu />
                    </div>
                </Container>
            </div>
        </div>
    );
};
export default Navbar;
