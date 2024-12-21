"use client";

// import Image from "next/image";
import React from "react";

const Avatar = () => {
    return (
        <>
            {/* <Image
                className="rounded-full"
                height={30}
                width={30}
                alt={`Avatar`}
                src={"/images/placeholder.jpg"}
            /> */}
            <div className="rounded-full w-8 h-8 text-tertiary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    className="block h-full w-full fill-current "
                >
                    <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
                </svg>
            </div>
        </>
    );
};

export default Avatar;
