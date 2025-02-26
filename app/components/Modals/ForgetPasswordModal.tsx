import React, { useState } from "react";
import Modal from ".";
import Button from "../Element/Button";
import Input from "../Element/Input";
import emailIcon from "../../../public/assets/Envelope.svg";
import Image from "next/image";

const ForgetPasswordModal = ({
  isOpen,
  setIsOpen,
  onSignUpClick,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSignUpClick?: () => void;
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission
    console.log("Form submitted:", email);
  };
  return (
    <Modal
      boxClassName=" w-[460px] "
      isOpen={isOpen}
      onClose={() => setIsOpen((e) => !e)}
    >
      <div className=" py-[20px] px-[40px] ">
        <h2 className=" text-[#000000CC] mb-[70px] text-center text-[24px] font-semibold ">
          Forgot Password
        </h2>
        <div className="mb-[40px]">
          <Input
            iconComp={<Image src={emailIcon} alt="" />}
            label="E-mail"
            isRequired
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button
          onClick={handleSubmit}
          className="w-full mb-[50px]"
          size="lg"
          disabled
        >
          Send Reset Link
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

export default ForgetPasswordModal;
