import React from "react";
import { Search, X } from "reicon-react";
import { type SearchBarProps, sizeStyles, iconSizes } from "../../types/searchbar";

export const SearchBar: React.FC<SearchBarProps> = ({
    size = "md",
    value,
    onClear,
    className = "",
    ...props
}) => {
    const hasValue =
        value !== undefined && String(value).length > 0;

    return (
        <div
            className={`flex w-full items-center rounded-md border border-(--color-border) bg-(--color-cardbg) transition focus-within:border-(--color-primary) ${sizeStyles[size]} ${className}`}
        >
            <Search
                size={iconSizes[size]}
                className="ml-3 shrink-0 text-(--color-text-tertiary)"
            />

            <input
                value={value}
                className="min-w-0 flex-1 bg-transparent px-2 text-(--color-text-primary) outline-none placeholder:text-(--color-text-placeholder) disabled:cursor-not-allowed"
                {...props}
            />

            {hasValue && onClear && (
                <button
                    type="button"
                    onClick={onClear}
                    className=" mr-2 flex shrink-0 items-center justify-center rounded-full p-1 text-(--color-text-tertiary) hover:bg-(--color-background) hover:text-(--color-text-primary) "
                    aria-label="Clear search"
                >
                    <X size={iconSizes[size]} />
                </button>
            )}
        </div>
    );
};

export default SearchBar;