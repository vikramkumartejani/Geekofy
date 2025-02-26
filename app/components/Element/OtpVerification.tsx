"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Button from "./Button";

interface OTPVerificationProps {
  email: string;
  onVerify: (otp: string) => void;
  onResendCode: () => void;
  onEditEmail: () => void;
  forceState?: "normal" | "error" | "success";
  defaultOTP?: string[];
}

export function OTPVerification({
  email,
  onVerify,
  onResendCode,
  onEditEmail,
  forceState,
  defaultOTP = ["", "", "", ""],
}: OTPVerificationProps) {
  const [otp, setOtp] = useState<string[]>(defaultOTP);
  const [error, setError] = useState(forceState === "error");
  const [success, setSuccess] = useState(forceState === "success");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Update state when forceState changes
  useEffect(() => {
    if (forceState === "error") {
      setError(true);
      setSuccess(false);
    } else if (forceState === "success") {
      setError(false);
      setSuccess(true);
    } else {
      setError(false);
      setSuccess(false);
    }
  }, [forceState]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (!forceState) {
      setError(false);
      setSuccess(newOtp.every((digit) => digit !== ""));
    }

    // Move to next input if value is entered
    if (value !== "" && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < 4) newOtp[index] = char;
    });
    setOtp(newOtp);

    if (!forceState) {
      setSuccess(newOtp.every((digit) => digit !== ""));
    }

    inputRefs.current[Math.min(pastedData.length, 3)]?.focus();
  };

  const handleVerify = () => {
    const otpString = otp.join("");
    if (otpString.length === 4) {
      onVerify(otpString);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-[16px] text-[#23222D] mb-[30px] ">
          Enter the OTP sent to your email address
        </h2>
        <p className="text-[16px] text-[#444444] mb-[30px] ">
          Code sent to <span className="text-[#0084FF]">{email} </span>(
          <Button
            size="sm"
            style={{
              padding: 0,
              color: "#0084FF",
              background: "none",
              border: "none",
            }}
            onClick={onEditEmail}
          >
            edit
          </Button>
          )
        </p>
      </div>

      <div className="flex justify-center gap-3 mb-[30px]">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={`w-12 h-12 text-center text-2xl font-semibold rounded-lg border-2 
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${
                  error
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : success || digit
                    ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                }
              `}
          />
        ))}
      </div>

      <div className=" mb-[30px] ">
        {error && (
          <div className="flex items-center justify-center gap-2 text-red-600 mb-[5px]">
            <div className="w-2 h-2 rounded-full bg-red-600"></div>
            <p className="text-sm">Wrong OTP entered</p>
          </div>
        )}
        <Button
          size="sm"
          style={{
            padding: 0,
            color: "#0084FF",
            background: "none",
            border: "none",
          }}
          onClick={onResendCode}
        >
          <div>
            Resend Code
            <div className=" h-[1px] w-full bg-[#0084FF] " />
          </div>
        </Button>
      </div>

      <Button
        onClick={handleVerify}
        disabled={otp.some((digit) => digit === "")}
      >
        Verify & Proceed
      </Button>
    </div>
  );
}
