"use client";
import React, { useState } from "react";
import Modal from "../components/Modals";
import Button from "../components/Element/Button";
import Input from "../components/Element/Input";
import SignUpModal from "../components/Modals/SignUpModal";
import SignInModal from "../components/Modals/SignInModal";
import Checkbox from "../components/Element/CheckBox";
import Link from "next/link";

export const page = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className=" flex items-center flex-col justify-center h-[100vh] gap-4 w-full ">
      <h1 className="text-4xl text-primary-blue">
        This testing page for components!
      </h1>
      <p className="text-lg text-gray-700">
        Welcome to Geekofy, a digital hub dedicated to geeks and tech
        enthusiasts.
      </p>
      {/* <Modal isOpen={isOpen} onClose={() => setIsOpen((e) => !e)}>
        Sign Up goes here!
      </Modal> */}
      <Button size="lg"> Testing</Button>
      <Button onClick={() => setIsOpen(true)} variant="SEC">
        {" "}
        Testing
      </Button>
      <div className="w-[500px]">
        <Input type="checkbox" label="label" isRequired />
      </div>
      <Checkbox
        label={
          <>
            I agree with{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              terms
            </Link>
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
      <SignUpModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default page;
