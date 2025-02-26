"use client";

import { useState } from "react";
import { OTPVerification } from "../Element/OtpVerification";
import Modal from ".";

const OTPVeriOtpVerificationModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("xyz@gmail.com");
  const [verificationStatus, setVerificationStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [showEditEmailModal, setShowEditEmailModal] = useState(false);
  const [newEmail, setNewEmail] = useState(email);
  const [resendCount, setResendCount] = useState(0);

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
    <Modal
      boxClassName=" w-[500px] "
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className=" py-[70px] px-[80px] ">
        <OTPVerification
          email={email}
          onVerify={handleVerify}
          onResendCode={handleResendCode}
          onEditEmail={handleEditEmail}
        />

        {/* Status display */}
        {verificationStatus !== "idle" && (
          <div
            className={`mt-6 p-4 rounded-md w-full max-w-md ${
              verificationStatus === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            <p className="font-medium">
              {verificationStatus === "success"
                ? "OTP verified successfully!"
                : "Incorrect OTP. Please try again."}
            </p>
          </div>
        )}

        {/* Resend counter */}

        {/* Edit Email Modal */}
        {showEditEmailModal && <>edit goes!!</>}
      </div>
    </Modal>
  );
};

export default OTPVeriOtpVerificationModal;
