
import { GenericElements } from "@/types";
import React, { CSSProperties } from "react";
type TPaddings = "none" | "xs" | "sm" | "md" | "lg" | "xl";

export interface IBoxProps {
  className?: string;
  style?: CSSProperties;
  paddings?: TPaddings;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface IProps extends IBoxProps {
  children: GenericElements;
}

const paddingValues: { [_x in TPaddings]: number } = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
  none: 0,
};

const getPaddings = (size: TPaddings) => {
  const val = paddingValues[size];
  return {
    padding: val,
  } as CSSProperties;
};

const Box: React.FC<IProps> = ({
  style,
  className,
  children,
  paddings = "none",
  onClick,
}) => {
  return (
    <div
      className={` rounded-lg border border-[#E1E1E1] bg-white shadow-lg ${className}`}
      style={{
        ...getPaddings(paddings),
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Box;
