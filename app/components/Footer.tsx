import Link from "next/link"
import type React from "react"

interface FooterLink {
  href: string
  label: string
}

const Footer: React.FC = () => {
  const footerLinks: FooterLink[] = [
    { href: "/", label: "Home" },
    { href: "/faqs", label: "FAQ's" },
    { href: "/contact", label: "Contact Us" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
  ]

  return (
    <div className="text-center">
      <div className="bg-powder-blue py-3.5 px-4 flex items-center gap-4 md:gap-9 flex-wrap justify-center">
        {footerLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-black text-base leading-[16.94px] font-normal tracking-[0.02em] hover:underline underline-offset-4 transition-all duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="bg-charcoal-navy py-2 px-4">
        <h2 className="text-white text-sm leading-[17.6px] font-normal">Copyrights 2024. All Rights Reserved.</h2>
      </div>
    </div>
  )
}

export default Footer

