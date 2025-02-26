import React, { useState } from "react";
import Modal from ".";
import Button from "../Element/Button";
import Link from "next/link";
import InputPassword from "../Element/InputPassword";
import Checkbox from "../Element/CheckBox";

const NewPasswordSetup = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match!");
      return;
    }
    // Handle form submission
    console.log("Form submitted:", password);
  };
  return (
    <Modal
      boxClassName=" w-[460px] "
      isOpen={isOpen}
      onClose={() => setIsOpen((e) => !e)}
    >
      <div className=" pt-[50px] pb-[60px] px-[40px] ">
        <h2 className=" text-[#000000CC] mb-[70px] text-center text-[24px] font-semibold ">
          Forgot Password
        </h2>
        <div className="mb-[40px] flex flex-col gap-[30px] ">
          <InputPassword
            InputProps={{
              label: "New Password",
              type: "password",
              isRequired: true,
            }}
            value={password}
            onChange={(e) => {
              setPassword(e);
            }}
          />
          <InputPassword
            InputProps={{
              label: "Confirm Password",
              name: "password",
              type: "password",
              isRequired: true,
              onFocus: () => setConfirmPasswordError(""),
              errorMsg: confirmPasswordError,
            }}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e);
            }}
          />
        </div>
        <div className="mb-[36px]">
          <Checkbox
            checked={checked}
            onChange={(checked) => setChecked(checked)}
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
          onClick={handleSubmit}
          className="w-full mb-[50px] disabled:border-none "
          size="lg"
          disabled
        >
          Confirm
        </Button>
        <div className="flex items-center justify-center gap-[4px]">
          <p className=" text-[#666666] font-medium text-[16px] ">
            Don’t have an account?
          </p>
          <Link className=" text-[#0084FF] font-medium text-[16px] " href={""}>
            Sign Up
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default NewPasswordSetup;
