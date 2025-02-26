import React from "react";
import { GenericElements } from "@/types";

type TBtnSizes = "xs" | "sm" | "md" | "lg" | "xlg";
type TbtnVariants = "PRI" | "SEC";

interface IButtonProps {
  children: GenericElements;
  style?: React.CSSProperties;
  className?: string;
  elementLeft?: GenericElements;
  elementRight?: GenericElements;
  size?: TBtnSizes;
  variant?: TbtnVariants;
  disabled?: boolean | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isLoading?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

const btnVarirants = {
  PRI: "bg-[#0084FF]  border-[#0084FF] text-white hover:bg-[#0083ef] hover:border-[#0083ef] active:bg-[#0083ef] active:border-[#0083ef]",

  SEC: "bg-[#ffffff] text-[#303030] hover:bg-[#f5f5f5] active:bg-[#f5f5f5]  border-[#D2D5DA]",
};

const btnSizes = {
  xs: " py-[4px] px-[8px] text-[12px]  ",
  sm: " py-[8px] px-[8px] text-[16px]  ",
  md: " py-[10px] px-[10px] text-[20px]  ",
  lg: " py-[14px] px-[14px] text-[28px]  ",
  xlg: " py-[20px] px-[30px] text-[32px]  ",
};

const Button: React.FC<IButtonProps> = ({
  children,
  style,
  elementLeft,
  elementRight,
  size = "md",
  variant = "PRI",
  onClick,
  className,
  disabled,
  isLoading = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={` no-underline inline-flex items-center justify-center gap-2 rounded-lg border font-medium transition-all duration-[.1s] ease-in-out disabled:cursor-not-allowed disabled:bg-[#00000066] disabled:text-[#fff] disabled:border-[#00000066] active:translate-y-[2px] shadow-sm  ${btnSizes[size]}
      ${btnVarirants[variant]}
      ${className}
      `}
      style={style}
      onClick={(e) => {
        if (disabled || isLoading) return;
        onClick?.(e);
      }}
      disabled={disabled}
    >
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {elementLeft && elementLeft}
          {children}
          {elementRight && elementRight}
        </>
      )}
    </button>
  );
};

export default Button;
