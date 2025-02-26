import React, { useState } from "react";
import Modal from ".";
import Button from "../Element/Button";
import Input from "../Element/Input";
import Link from "next/link";
import googleIcon from "../../../public/assets/google.png";
import appleIcon from "../../../public/assets/apple.png";
import emailIcon from "../../../public/assets/Envelope.svg";
import Image from "next/image";
import InputPassword from "../Element/InputPassword";
import Checkbox from "../Element/CheckBox";

const SignInModal = ({
  isOpen,
  setIsOpen,
  onSignUpClick,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSignUpClick?: () => void;
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission
    console.log("Form submitted:", formData);
  };
  return (
    <Modal
      boxClassName=" w-[90%] w-[460px] max-w-[460px] "
      isOpen={isOpen}
      onClose={() => setIsOpen((e) => !e)}
    >
      <div className=" py-[20px] px-[20px] sm:px-[40px] ">
        <h2 className=" text-[#000000B2] mb-[30px] text-center text-[24px] font-medium ">
          Hi, Welcome Back! 👋
        </h2>
        <div className=" flex items-center justify-center mb-[30px] gap-[10px] ">
          <Button className=" w-full" variant="SEC">
            <Image src={googleIcon} alt="" />
          </Button>
          <Button className=" w-full" variant="SEC">
            <Image src={appleIcon} alt="" />
          </Button>
        </div>
        <div className=" flex items-center justify-center mb-[30px] gap-[5px] ">
          <div className=" w-full h-[1px] bg-[#CFCFCF] " />
          <p className=" text-[#CFCFCF] text-sm font-semibold ">OR</p>
          <div className=" w-full h-[1px] bg-[#CFCFCF] " />
        </div>

        <div className="mb-[20px]">
          <Input
            iconComp={<Image src={emailIcon} alt="" />}
            label="E-mail"
            isRequired
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mb-[30px]">
          <InputPassword
            InputProps={{
              label: "Password",
              isRequired: true,
              infoMsg:
                "Minimum 6 characters (Mix of Uppercase, Lowercase and Number)",
            }}
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })}
          />
        </div>
        <div className=" flex justify-between flex-wrap-reverse items-center sm:gap-2 gap-4 mb-[30px] sm:mb-[50px]">
          <div>
            <Checkbox label="Remember Password" />
          </div>
          <Link className=" text-[#E82327] font-medium text-[12px] " href={""}>
            Forgot Password?
          </Link>
        </div>
        <Button
          onClick={handleSubmit}
          className="w-full mb-[30px] sm:mb-[50px]"
          size="lg"
        >
          Login
        </Button>
        <div className="flex items-center justify-center gap-[4px]">
          <p className=" text-[#666666] font-medium text-[16px] ">
            Don’t have an account?
          </p>
          <Button
            size="sm"
            style={{
              padding: 0,
              color: "#0084FF",
              background: "none",
              border: "none",
            }}
            onClick={onSignUpClick}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SignInModal;
