import Link from "next/link";
import type React from "react";

interface FooterLink {
  href: string;
  label: string;
}

const Footer: React.FC = ({ className }: { className?: string }) => {
  const footerLinks: FooterLink[] = [
    { href: "/", label: "Home" },
    { href: "/faqs", label: "FAQ's" },
    { href: "/contact", label: "Contact Us" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <>
      {/* Footer */}
      <footer className={` mt-[80px] sm:mt-[105px] ${className}`}>
        <nav className="flex flex-wrap justify-center gap-6 lg:gap-[40px] bg-[#D5E8FF80] p-[12px]">
          {footerLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="text-black text-sm sm:text-base leading-[16.94px] font-normal tracking-[0.02em] hover:underline underline-offset-4 transition-all duration-200"
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
    </>
  );
};

export default Footer;
