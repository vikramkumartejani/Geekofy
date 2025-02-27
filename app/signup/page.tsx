"use client";
import Link from "next/link";
import Button from "../components/Element/Button";
import Image from "next/image";
import logo from "../../public/assets/Geekofy.svg";
import teck from "../../public/assets/yellowTeck.svg";
import bg from "../../public/assets/bgImage.png";
import { useState } from "react";
import SignUpModal from "../components/Modals/SignUpModal";
import SignInModal from "../components/Modals/SignInModal";
import emailIcon from "../../../public/assets/Envelope.svg";
import Modal from "../components/Modals";
import Input from "../components/Element/Input";
import ForgetPasswordModal from "../components/Modals/ForgetPasswordModal";
import NewPasswordSetup from "../components/Modals/NewPasswordSetup";
import Footer from "../components/Footer";

interface INavLink {
  label: string;
  href: string;
}
export default function Home() {
  // Modal states
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenLogIn, setIsOpenLogIn] = useState(false);
  const [isOpenForget, setIsOpenForget] = useState(false);
  const [isOpenSetNewPassword, setIsOpenSetNewPassword] = useState(false);

  const features = [
    "Never Pay For Leads Again",
    "No Card On File",
    "Reach Targeted Customers",
    "Free SEO",
    "Free Listing",
    "Live Chat",
    "Free Call To Action",
    "Only Verified Reviews",
  ];

  const navLinks: INavLink[] = [
    { label: "Home", href: "/" },
    { label: "FAQs", href: "/" },
    { label: "Contact Us", href: "/" },
    { label: "Terms & Conditions", href: "/" },
    { label: "Privacy Policy", href: "/" },
  ];

  return (
    <div className="min-h-screen  ">
      {/* Modals */}
      <SignUpModal
        isOpen={isOpenSignUp}
        setIsOpen={setIsOpenSignUp}
        onSignInClick={() => {
          setIsOpenSignUp(false);
          setIsOpenLogIn(true);
        }}
      />
      <SignInModal
        isOpen={isOpenLogIn}
        setIsOpen={setIsOpenLogIn}
        onSignUpClick={() => {
          setIsOpenLogIn(false);
          setIsOpenSignUp(true);
        }}
      />
      {/* {Forgot Password Modal} */}
      <ForgetPasswordModal
        isOpen={isOpenForget}
        setIsOpen={setIsOpenForget}
        onSignUpClick={() => {
          setIsOpenForget(false);
          setIsOpenSignUp(true);
        }}
      />
      {/*SetNewPassword  */}
      <NewPasswordSetup
        isOpen={isOpenSetNewPassword}
        setIsOpen={setIsOpenSetNewPassword}
        onSignUpClick={() => {
          setIsOpenSetNewPassword(false);
          setIsOpenSignUp(true);
        }}
      />
      {/* Modal ends */}

      <div
        className=" pb-[180px] md:pb-[160px] bg-right-top sm:bg-center"
        style={{
          backgroundImage: ` url(${bg.src}) `,
        }}
      >
        {/* Header */}
        <header className=" w-[88%] max-w-[1340px] py-[20px] md:py-[14px] mb-[40px] md:mb-[66px] mx-auto flex items-center md:justify-between justify-center">
          <div>
            <Link href="/" className="text-3xl font-bold text-[#0088ff]">
              <Image src={logo} alt="" />
            </Link>
          </div>
          <div className="space-x-4 hidden md:block">
            <Button
              variant="SEC"
              size="sm"
              className="w-[114px] text-white bg-transparent active:bg-white/20 border-white hover:bg-white/10  "
              onClick={() => setIsOpenLogIn(true)}
            >
              Log In
            </Button>
            <Button
              className=" w-[170px] px-[20px] "
              size="sm"
              onClick={() => setIsOpenSignUp(true)}
            >
              Create Account
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className=" w-[88%] max-w-[1340px] mx-auto text-center">
          <h1 className="text-[42px] md:text-5xl font-semibold text-white mb-8">
            The Ultimate Place for <span className="text-[#ffd700]">Geeks</span>{" "}
            to Attract Clients.
          </h1>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Button
              onClick={() => setIsOpenSignUp(true)}
              className=" w-[300px] md:w-[270px] bg-[#0088ff] hover:bg-[#0088ff]/90 text-lg "
            >
              Register your Business
            </Button>
            <Button
              variant="SEC"
              className="w-[300px] text-white bg-transparent active:bg-white/20 border-white hover:bg-white/10 text-lg "
              onClick={() => setIsOpenLogIn(true)}
            >
              Already Listed? Login now
            </Button>
          </div>
        </main>
      </div>

      {/* Features Card */}
      <div className=" w-[90%] sm:w-[88%] max-w-[1340px] mx-auto mt-[-116px] text-center">
        <div className="bg-[linear-gradient(270deg,#EEEEEE_5.55%,#FFFFFF_48.97%,#FAFAFA_96%)] pt-[20px] sm:pt-[36px] sm:pb-[56px] pb-[30px]  px-[12px] sm:px-[20px] lg:px-[46px] w-[100%] lg:w-[90%] max-w-[1050] shadow-lg mx-auto">
          <h2 className=" text-3xl sm:text-[34px] font-medium text-[#000000]">
            Get started with online discovery
          </h2>
          <div className="w-full h-[1px] bg-[#E0E0E0] mt-[12px] mb-[20px] sm:mt-[20px] sm:mb-[40px] " />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[320px_260px] lg:grid-cols-[350px_300px] justify-between  md:gap-4 lg:gap-6 w-[100%] md:w-[90%] mx-auto ">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 sm:gap-5">
                <Image className=" w-4 sm:w-6 " src={teck} alt="" />
                <span className=" text-[18px] md:text-[20px] lg:text-[22px] text-[#000000CC]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer  */}
      <Footer />
    </div>
  );
}
