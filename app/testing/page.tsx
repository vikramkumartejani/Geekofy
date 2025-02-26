"use client";

import type React from "react";

import { useState } from "react";
import { AlertCircle, Mail, Eye, EyeOff, Search } from "lucide-react";
import Input from "../components/Element/Input";
import OTPVeriOtpVerificationModal from "../components/Modals/OtpVerificationModal";

const page = () => {
  const [values, setValues] = useState({
    normal: "",
    filled: "John Doe",
    error: "invalid-email",
    withIcon: "",
    withErrorIcon: "invalid-password",
    withInfo: "",
    required: "",
    password: "",
    search: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("xyz@gmail.com");
  const [verificationStatus, setVerificationStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [showEditEmailModal, setShowEditEmailModal] = useState(false);
  const [newEmail, setNewEmail] = useState(email);
  const [resendCount, setResendCount] = useState(0);

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [field]: e.target.value });
    };

  const handleVerify = (otp: string) => {
    console.log("Verifying OTP:", otp);
    // Simulate verification
    if (otp === "2222") {
      setVerificationStatus("error");
    } else {
      setVerificationStatus("success");
    }
  };

  const handleResendCode = () => {
    console.log("Resending code...");
    setResendCount((prev) => prev + 1);
    // Reset verification status
    setVerificationStatus("idle");
  };

  const handleEditEmail = () => {
    setShowEditEmailModal(true);
  };

  const handleSaveEmail = () => {
    setEmail(newEmail);
    setShowEditEmailModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Input Component Examples</h1>
        <OTPVeriOtpVerificationModal />
        <div className="grid gap-8">
          {/* Normal Input */}
          <div>
            <h2 className="text-lg font-medium mb-3">Normal Input</h2>
            <Input
              label="Username"
              placeholder="Enter your username"
              value={values.normal}
              onChange={handleChange("normal")}
            />
          </div>

          {/* Filled Input */}
          <div>
            <h2 className="text-lg font-medium mb-3">Filled Input</h2>
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              value={values.filled}
              onChange={handleChange("filled")}
            />
          </div>

          {/* Input with Error */}
          <div>
            <h2 className="text-lg font-medium mb-3">Input with Error</h2>
            <Input
              label="Email"
              placeholder="Enter your email"
              value={values.error}
              onChange={handleChange("error")}
              errorMsg="Please enter a valid email address"
            />
          </div>

          {/* Input with Icon */}
          <div>
            <h2 className="text-lg font-medium mb-3">Input with Icon</h2>
            <Input
              label="Email Address"
              placeholder="Enter your email"
              value={values.withIcon}
              onChange={handleChange("withIcon")}
              iconComp={<Mail className="h-5 w-5 text-gray-500" />}
            />
          </div>

          {/* Input with Error Icon */}
          <div>
            <h2 className="text-lg font-medium mb-3">Input with Error Icon</h2>
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={values.withErrorIcon}
              onChange={handleChange("withErrorIcon")}
              errorMsg="Password must be at least 8 characters"
              errorIcon={<AlertCircle className="h-5 w-5 text-[#E82327]" />}
            />
          </div>

          {/* Input with Info Message */}
          <div>
            <h2 className="text-lg font-medium mb-3">
              Input with Info Message
            </h2>
            <Input
              label="Username"
              placeholder="Enter your username"
              value={values.withInfo}
              onChange={handleChange("withInfo")}
              infoMsg="Username must be unique and between 3-20 characters"
            />
          </div>

          {/* Required Input */}
          <div>
            <h2 className="text-lg font-medium mb-3">Required Input</h2>
            <Input
              label="First Name"
              placeholder="Enter your first name"
              value={values.required}
              onChange={handleChange("required")}
              isRequired
            />
          </div>

          {/* Password Input with Toggle */}
          <div>
            <h2 className="text-lg font-medium mb-3">
              Password Input with Toggle
            </h2>
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange("password")}
              iconComp={
                showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )
              }
              onIconClick={() => setShowPassword(!showPassword)}
              isRequired
              infoMsg="Password must be at least 8 characters long"
            />
          </div>

          {/* Search Input */}
          <div>
            <h2 className="text-lg font-medium mb-3">Search Input</h2>
            <Input
              label="Search"
              placeholder="Search..."
              value={values.search}
              onChange={handleChange("search")}
              iconComp={<Search className="h-5 w-5 text-gray-500" />}
              onIconClick={() => console.log("Search clicked")}
            />
          </div>

          {/* Disabled Input */}
          <div>
            <h2 className="text-lg font-medium mb-3">Disabled Input</h2>
            <Input
              label="Username"
              placeholder="Enter your username"
              value="johndoe"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
