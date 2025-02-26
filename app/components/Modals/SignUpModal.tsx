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

const SignUpModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [formData, setFormData] = useState({
    firstName: "asd",
    lastName: "sadf",
    email: "dsaf",
    password: "sdf",
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <Modal
      boxClassName=" w-[460px] "
      isOpen={isOpen}
      onClose={() => setIsOpen((e) => !e)}
    >
      <div className=" py-[20px] px-[40px] ">
        <h2 className=" text-[#000000B2] mb-[30px] text-center text-[24px] font-medium ">
          Create an account
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
        <div className="flex  justify-center mb-[20px]  gap-[24px]">
          <Input
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            label="First name"
            isRequired
          />
          <Input
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            label="Last name"
            isRequired
          />
        </div>
        <div className="mb-[20px]">
          <Input
            label="E-mail"
            isRequired
            iconComp={<Image src={emailIcon} alt="" />}
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
            }}
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })}
          />
          <p className={` text-[12px] text-[#929292]`}>
            Minimum 6 characters (Mix of Uppercase, Lowercase and Number)
          </p>
        </div>
        <div className="mb-[50px]">
          <Checkbox
            checked={formData.agreed}
            onChange={(checked) =>
              setFormData({ ...formData, agreed: checked })
            }
            label={
              <>
                I agree with{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  terms
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  privacy policy
                </Link>
              </>
            }
          />
        </div>
        <Button
          className="w-full mb-[50px] disabled:border-[#00000000]"
          size="lg"
          disabled={!formData.agreed}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>

        <div className="flex items-center justify-center gap-[4px]">
          <p className=" text-[#666666] font-medium text-[16px] ">
            Already have an account?
          </p>
          <Link className=" text-[#0084FF] font-medium text-[16px] " href={""}>
            Sign In
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
