import React from "react";
import type { PaginationProps } from "../../../utils/utils";


const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    showPreviousNext = true,
    previousText = 'Previous',
    nextText = 'Next',
    className = '',
}: PaginationProps) => {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages || page === currentPage) {
            return;
        }
        onPageChange(page);
    };

    return (
        <div className={`flex items-center gap-2 mt-4 ${className}`} >
            {showPreviousNext && (
                <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm disabled:cursor-not-allowed diabled:opacity-50"
                >
                    {previousText}
                </button>
            )}

            {pages.map((page) => (
                <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`h-9 min-w-9 rounded-lg px-3 text-sm ${currentPage === page ? 'bg-[#0B3A60] text-white' : 'border border-grey-300 text-gray-700'}`}>
                    {page}
                </button>
            ))}

            {showPreviousNext && (
                <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {nextText}
                </button>
            )}
        </div>
    );
};

export default Pagination;