"use client";

import type React from "react";
import { useState, useMemo, type CSSProperties } from "react";

type THPositions = "left" | "right";
type GenericElements = React.ReactNode;
type TIntrinsicInputProps = React.InputHTMLAttributes<HTMLInputElement>;

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
  containerClassname = "",
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
  infoMsgClassName = "",
  inputClassName = "",
  value,
  placeholder,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const [touched, setTouched] = useState(false);

  const getIconClasses = (p: THPositions) => {
    return `absolute ${
      p === "left" ? "left-3" : "right-3"
    } top-1/2 -translate-y-1/2`;
  };

  const _id = props.id || props.name || label;
  const isCb = props.type === "checkbox";

  const hasError = errorMsg && touched;
  const isActive = focus || Boolean(value);

  const containerClasses = useMemo(() => {
    return `
      relative w-full
      ${hasError ? "border border-[#E82327] rounded-lg" : ""}
      ${containerClassname}
    `;
  }, [hasError, containerClassname]);

  const inputClasses = useMemo(() => {
    const dimClasses = isCb ? "w-4 h-4" : "w-full h-[48px]";
    const baseClasses = `
      px-3 rounded-lg transition-all duration-200
      border
      placeholder:text-gray-500
      text-base
      outline-none
      disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
      ${
        hasError
          ? "border-[#E8232700] bg-red-50 text-gray-900 focus:border-[#E8232700]"
          : "border-gray-300 text-gray-900 focus:border-[#0084FF]"
      }
    `;
    return `${dimClasses} ${baseClasses} ${inputClassName}`;
  }, [hasError, inputClassName, isCb]);

  const labelClasses = useMemo(() => {
    return `
      absolute left-3 transition-all duration-200 pointer-events-none z-10
      ${isActive ? "text-xs -top-2.5 bg-white px-1" : "text-gray-500 top-3.5"}
      ${
        hasError
          ? "text-[#E82327]"
          : isActive
          ? "text-[#0084FF]"
          : "text-gray-500"
      }
      ${touched && !value && isRequired ? "text-[#E82327]" : ""}
    `;
  }, [isActive, hasError, touched, value, isRequired]);

  const infoClasses = `mt-1 text-xs text-gray-500 ${infoMsgClassName}`;

  return (
    <div className={containerClasses} style={containerStyle}>
      <div className="relative" style={inputWrapperStyle}>
        {label && (
          <label htmlFor={_id} className={labelClasses} style={labelStyle}>
            {label}
            {isRequired && <span className="text-[#E82327] ml-0.5">*</span>}
          </label>
        )}

        <div className="relative">
          {inputPrevSibling}

          <input
            {...props}
            id={_id}
            className={inputClasses}
            placeholder={focus ? placeholder : ""}
            value={value}
            onFocus={(e) => {
              setFocus(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocus(false);
              setTouched(true);
              props.onBlur?.(e);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onEnterPress?.();
              }
              props.onKeyDown?.(e);
            }}
          />

          {inputNextSibling}

          {iconComp && (
            <div
              className={`${getIconClasses(iconPosition)} cursor-pointer`}
              onClick={onIconClick}
            >
              {iconComp}
            </div>
          )}

          {errorIcon && hasError && (
            <div className={getIconClasses(errorIconPosition)}>{errorIcon}</div>
          )}
        </div>
      </div>

      {infoMsg && !errorMsg && <p className={infoClasses}>{infoMsg}</p>}

      {errorMsg && touched && (
        <div className={"bg-red-50 border-t rounded-b-lg border-[#E82327] px-3 py-1 "}>
          <p className="text-sm text-[#E82327]">{errorMsg}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
