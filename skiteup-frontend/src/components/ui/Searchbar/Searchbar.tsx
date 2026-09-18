import React from 'react';
import { Search } from 'lucide-react';
import type { SearchBarProps } from '../../../utils/utils';

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search by name, reg number, email....',
  value,
  className = '',
  onChange,
  ...props
}) => {
  return (
    <div
      className={`box-border flex h-[38px] w-[372px] flex-row items-center gap-[11.01px] rounded-[6.25px] border-[1.10144px] border-[rgba(0,0,0,0.2)] bg-[rgba(255,255,255,0.5)] px-[10px] py-[20px] ${className}`.trim()}
    >
      <Search size={24} strokeWidth={1} className="shrink-0 text-[rgba(0,0,0,0.5)]" />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent font-['Poppins'] text-[14px] font-normal leading-[21px] text-black outline-none placeholder:text-[rgba(0,0,0,0.5)]"
        {...props}
      />
    </div>
  );
};

export default SearchBar;
