"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
    className?: string;
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
    return (
        <div
            className={cn(
                "max-w-screen-2xl mx-auto px-4 sm:px-2 md:px-10 xl:px-20",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;
