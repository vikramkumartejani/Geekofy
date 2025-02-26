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
import ForgetPasswordModal from "../components/Modals/ForgetPasswordModal";
import NewPasswordSetup from "../components/Modals/NewPasswordSetup";

interface INavLink {
  label: string;
  href: string;
}
export default function Home() {
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenLogIn, setIsOpenLogIn] = useState(false);

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

      {/* <SignUpModal isOpen={isOpenSignUp} setIsOpen={setIsOpenSignUp} /> */}
      <NewPasswordSetup isOpen={isOpenSignUp} setIsOpen={setIsOpenSignUp} />
      {/* <SignInModal isOpen={isOpenLogIn} setIsOpen={setIsOpenLogIn} /> */}
      <ForgetPasswordModal isOpen={isOpenLogIn} setIsOpen={setIsOpenLogIn} />

      <div
        className=" pb-[160px] "
        style={{
          backgroundImage: ` url(${bg.src}) `,
        }}
      >
        {/* Header */}
        <header className="w-[88%] max-w-[1340px] py-[14px] mb-[66px] mx-auto flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-[#0088ff]">
            <Image src={logo} alt="" />
          </Link>
          <div className="space-x-4">
            <Button
              variant="SEC"
              size="sm"
              className="w-[114px] text-white bg-transparent active:bg-white/20 border-white hover:bg-white/10  "
              onClick={() => setIsOpenLogIn(true)}
            >
              Log In
            </Button>
            <Button
              className=" px-[20px] "
              size="sm"
              onClick={() => setIsOpenSignUp(true)}
            >
              Create Account
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-[88%] max-w-[1340px] mx-auto text-center">
          <h1 className="text-[42px] md:text-5xl font-semibold text-white mb-8">
            The Ultimate Place for <span className="text-[#ffd700]">Geeks</span>{" "}
            to Attract Clients.
          </h1>

          <div className="flex flex-wrap justify-center gap-8">
            <Button
              onClick={() => setIsOpenSignUp(true)}
              className="bg-[#0088ff] hover:bg-[#0088ff]/90 text-lg px-8"
            >
              Register your Business
            </Button>
            <Button
              variant="SEC"
              className="text-white bg-transparent active:bg-white/20 border-white hover:bg-white/10 text-lg px-8"
              onClick={() => setIsOpenLogIn(true)}
            >
              Already Listed? Login now
            </Button>
          </div>
        </main>
      </div>

      {/* Features Card */}
      <div className="w-[88%] max-w-[1340px] mx-auto mt-[-116px] text-center">
        <div className="bg-[linear-gradient(270deg,#EEEEEE_5.55%,#FFFFFF_48.97%,#FAFAFA_96%)] pt-[36px] pb-[56px] px-[46px] w-[90%] max-w-[1050] shadow-lg mx-auto">
          <h2 className="text-[34px] font-medium text-[#000000]">
            Get started with online discovery
          </h2>
          <div className="w-full h-[1px] bg-[#E0E0E0] mt-[20px] mb-[40px] " />{" "}
          <div className="grid md:grid-cols-2 gap-6 px-[40px] ">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-5">
                <Image src={teck} alt="" />
                <span className=" text-[22px] text-[#000000CC]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-[105px]">
        <nav className="flex flex-wrap justify-center gap-6 bg-[#D5E8FF80] p-[12px]">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="text-[#000000] hover:text-[#0084FF] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="w-full bg-[#181F31] p-[12px] ">
          <p className="text-center text-white text-[16px]">
            Copyright 2024. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
