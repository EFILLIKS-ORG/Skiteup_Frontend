import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '../Button';

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title?: string;
    description?: string;
    children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    onConfirm,
    title = 'Delete Student',
    description = 'Going back will clear all manually entered questions and unsaved changes.',
    children,
}) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className="relative flex w-[463px] min-h-[289px] flex-col items-center rounded-[30px] bg-white p-[30px]">
                {/* Content */}
                <div className="flex w-full flex-col items-center gap-[10px] p-[10px]">

                    {/* Alert Icon */}
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[20px] bg-[rgba(231,0,11,0.15)]">
                        <AlertTriangle size={24} className="text-[#E7000B]" />
                    </div>

                    {/* Title */}
                    <h2 className="font-['Poppins',sans-serif] text-[20px] font-semibold leading-[30px] text-black">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="w-full text-center font-['Poppins',sans-serif] text-[16px] font-medium leading-[24px] text-[rgba(0,0,0,0.5)]">
                        {description}
                    </p>

                    {/* Buttons */}
                    {children || (
                        <div className="flex w-full gap-[12px] mt-2">
                            <Button
                                variant="outline"
                                size="md"
                                onClick={onClose}
                                className="flex-1 border-[#A3A3A3] text-[#696969]"
                            >
                                Cancel
                            </Button>

                            <Button
                                size="md"
                                onClick={onConfirm}
                                className="flex-1 bg-[#E7000B] hover:bg-[#CC000A]"
                            >
                                OK
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;