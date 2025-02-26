"use client";
import { GenericElements, THPositions } from "@/types";
import React, { CSSProperties, useMemo, useState } from "react";

type TIntrinsicInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputProps extends TIntrinsicInputProps {
  containerStyle?: CSSProperties;
  containerClassname?: string;
  inputWrapperStyle?: CSSProperties;
  label?: string;
  labelStyle?: CSSProperties;
  iconComp?: GenericElements;
  onIconClick?: () => void;
  iconPosition?: THPositions;
  errorIconPosition?: THPositions;
  errorIcon?: GenericElements;
  inputPrevSibling?: GenericElements;
  inputNextSibling?: GenericElements;
  errorMsg?: string;
  infoMsg?: string;
  infoMsgClassName?: string;
  isRequired?: boolean;
  lefttTextForInputWeb?: string | undefined;
  onEnterPress?: () => void;
  inputClassName?: string;
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  containerClassname,
  inputWrapperStyle,
  label,
  labelStyle,
  iconComp,
  onIconClick,
  iconPosition = "right",
  errorIconPosition = "right",
  errorIcon,
  errorMsg = "",
  infoMsg = "",
  inputPrevSibling,
  inputNextSibling,
  isRequired = false,
  onEnterPress,
  infoMsgClassName,
  inputClassName,
  value,
  ...props
}) => {
  const [focus, setFocus] = useState(false);

  const getIconClasses = (p: THPositions) => {
    return ` absolute ${p === "left" ? "left-[14px]" : "right-[14px]"}`;
  };

  const _id = props.id || props.name || label;
  const isCb = props.type === "checkbox";

  const inputClasses = useMemo(() => {
    const dimClasses = isCb ? "w-4 h-4" : " w-[100%] h-[48px]";
    const baseClasses = ` px-[8px] rounded-[8px] border-[#00000033] disabled:pointer-events-none disabled:bg-[#F9FAFB] disabled:text-[#667085] outline-none shadow-sm border-[1px]  placeholder-[#0000008C] 
     text-[#101828]  ${
       errorMsg &&
       " border-[#00000000] border-[0px] text-[#E82327] placeholder-[#E82327] "
     } `;

    return `${dimClasses} ${baseClasses} ${props.className} `;
  }, [errorMsg, props.className, isCb]);

  return (
    <div
      className={`flex w-[100%] flex-col ${containerClassname} ${
        errorMsg && " border rounded-lg border-[#E82327] "
      } `}
      style={containerStyle}
    >
      <div style={inputWrapperStyle}>
        <div
          className={` ${
            isCb
              ? "flex flex-row-reverse justify-end items-center gap-2 "
              : "relative"
          } `}
        >
          {label && (
            <label
              htmlFor={_id}
              className={`  z-10 ${focus && !isCb && "focus-label"}  ${
                !isCb && "user-label px-[16px]  "
              }  `}
            >
              {label}
              {isRequired && (
                <span className="  text-[#E82327] text-[16px] ml-1 ">*</span>
              )}
            </label>
          )}
          <div className=" relative flex items-center ">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onEnterPress?.();
                }
              }}
              {...props}
              id={_id}
              className={` focus:border-[#0084FF] ${inputClasses} ${inputClassName}`}
              onFocus={() => setFocus(true)}
              onBlur={() => {
                if (value === "") {
                  setFocus(false);
                }
              }}
            />
            {inputNextSibling}
            {iconComp && (
              <div
                className={getIconClasses(iconPosition)}
                onClick={onIconClick}
              >
                {iconComp}
              </div>
            )}
            {errorIcon && (
              <div className={getIconClasses(errorIconPosition)}>
                {errorIcon}
              </div>
            )}
          </div>
        </div>
      </div>

      {infoMsg && (
        <p className={` ${infoMsgClassName} text-[12px] text-[#929292]`}>
          {infoMsg}
        </p>
      )}
      {errorMsg && (
        <p className="text-[#E82327] italic px-3 py-[7px] border-t-[1px] border-[#E82327] bg-[#E8232711] ">
          {errorMsg}
        </p>
      )}
    </div>
  );
};

export default Input;
