"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: ReactNode; // or IconType of react-icons
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon,
    className,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(
                "relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full",
                outline
                    ? "bg-white border-black text-black"
                    : "bg-primary border-border text-white",
                small
                    ? "py-1 text-sm font-light border"
                    : "py-3 text-md font-semibold border-2",
                className
            )}
        >
            {icon && (
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    {icon}
                </div>
            )}
            {label}
        </button>
    );
};

export default Button;
