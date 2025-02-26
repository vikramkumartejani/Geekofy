import React, { useState } from "react";
import Input, { InputProps } from "./Input";
import eyeIcon from "../../../public/assets/Eye.svg";
import closeEyeIcon from "../../../public/assets/closeEye.svg";
import teckIcon from "../../../public/assets/teckIcon.svg";
import crossIcon from "../../../public/assets/crossIcon.svg";
import Image from "next/image";

interface IProps {
  InputProps: InputProps;
  value: string;
  onChange?: (value: string) => void;
}

const InputPassword: React.FC<IProps> = ({ InputProps, value, onChange }) => {
  const [showPassword, setshowPassword] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const validations = {
    uppercase: /[A-Z]/.test(value),
    lowercase: /[a-z]/.test(value),
    number: /[0-9]/.test(value),
    length: value.length >= 8,
    special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
  };

  const allValid = Object.values(validations).every(Boolean);

  const ValidationItem = ({
    isValid,
    text,
  }: {
    isValid: boolean;
    text: string;
  }) => (
    <div className="flex items-center gap-2">
      {isValid ? (
        <Image src={teckIcon} alt="" />
      ) : (
        <Image src={crossIcon} alt="" />
      )}
      <span className="text-[18px] text-[#929292]  ">{text}</span>
    </div>
  );
  const handleShowPassword = () => {
    setshowPassword((is: boolean) => !is);
  };
  return (
    <div className="relative">
      <Input
        {...InputProps}
        onIconClick={handleShowPassword}
        iconPosition="right"
        iconComp={
          showPassword ? (
            <Image src={eyeIcon} alt="" className=" cursor-pointer " />
          ) : (
            <Image src={closeEyeIcon} alt="" className=" cursor-pointer " />
          )
        }
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => {
          onChange?.(e.target.value);
          setIsTyping(true);
        }}
        onBlur={() => setIsTyping(false)}
      />
      {isTyping && !allValid && (
        <div className=" absolute rounded-lg mt-1 bg-white w-full border border-gray-200 p-4 shadow-lg">
          <div className="space-y-2">
            <ValidationItem
              isValid={validations.uppercase}
              text="Uppercase Character"
            />
            <ValidationItem
              isValid={validations.lowercase}
              text="Lowercase Character"
            />
            <ValidationItem isValid={validations.number} text="Number" />
            <ValidationItem isValid={validations.length} text="8 Characters" />
            <ValidationItem
              isValid={validations.special}
              text="Special Characters"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InputPassword;
