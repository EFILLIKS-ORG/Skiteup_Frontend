import React from 'react';
import { CardProps } from '../../../utils/utils';

export const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  icon,
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`box-border flex h-[256px] w-[365px] flex-col items-start gap-[20px] rounded-[30px] border border-[rgba(11,58,96,0.2)] bg-white p-[20px] ${className}`.trim()}
    >
      {/* Icon */}
      <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[10px] bg-[#0B3A60]">
        {icon}
      </div>

      {/* Title & Description */}
      <div className="flex w-full flex-col items-start gap-[5px]">
        <h3 className="w-full font-['Poppins'] text-[24px] font-semibold leading-[36px] text-[#0B3A60]">
          {title}
        </h3>

        <p className="w-full font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[rgba(11,58,96,0.5)]">
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="flex w-full items-start gap-[10px]">
        <button
          onClick={onClick}
          className="flex h-[35px] w-full flex-1 items-center justify-center rounded-[10px] bg-[#273469] px-[20px] py-[10px] font-['Geologica'] text-[12px] font-medium leading-[15px] text-white"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
