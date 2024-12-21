"use client";

import { CloseIcon } from "@/app/assets/Icons/Icons";
import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";
import Button from "../Button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    disabled,
    onClose,
    onSubmit,
    secondaryAction,
    secondaryActionLabel,
    ...props
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }
        secondaryAction();
    }, [disabled, secondaryAction]);

    if (!isOpen) {
        return null;
    }
    return (
        <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#7b7b7b]/70">
                <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto">
                    {/* CONTENT */}
                    <div
                        className={cn(
                            "translate duration-300",
                            showModal
                                ? "translate-y-0 opacity-100"
                                : "translate-y-full opacity-0"
                        )}
                    >
                        <div className="translate h-full md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/* HEADER */}
                            <header className="flex items-center px-6 rounded-t justify-center relative border-b min-h-16">
                                <button
                                    className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                                    onClick={handleClose}
                                >
                                    <CloseIcon />
                                </button>
                                <div className="text-lg font-semibold">
                                    {props.title}
                                </div>
                            </header>
                            {/* BODY */}
                            <div className="relative p-6 flex-auto"></div>
                            {/* FOOTER */}
                            <div className="flex flex-col gap-2 p-6">
                                <div className="flex flex-row items-center gap-4 w-full">
                                    {secondaryActionLabel &&
                                        secondaryAction && (
                                            <Button
                                                disabled={disabled}
                                                label={secondaryActionLabel}
                                                onClick={handleSecondaryAction}
                                            />
                                        )}
                                    <Button
                                        disabled={disabled}
                                        label={props.actionLabel}
                                        onClick={handleSubmit}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
