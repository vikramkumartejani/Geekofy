import Link from "next/link";
import { Bell, Mail, User } from "lucide-react";
import { MobileNav } from "./MobileMenu";
import { MainNav } from "./NavigationMenu";
import Image from "next/image";
import logo from "../../../public/assets/NinjofyLogo.svg";
import mail from "../../../public/assets/mail.svg";
import notification from "../../../public/assets/n-bell.svg";
import user from "../../../public/assets/userlogin.svg";

export function Header() {
  return (
    <header className="bg-[#00000003] shadow-lg ">
      <div className=" max-w-[1470px] px-[30px] mx-auto h-16 flex items-center justify-between gap-2">
        <div className="flex items-center gap-8">
          <div>
            <Link href="/">
              <Image src={logo} alt="" />
            </Link>
          </div>
        </div>
        <MobileNav />
        <MainNav />

        <div className="hidden md:flex items-center  gap-0 lg:gap-3 ">
          <button className="p-2 hover:bg-accent rounded-full">
            <Image src={mail} alt="" />
          </button>
          <button className="p-2 hover:bg-accent rounded-full">
            <Image src={notification} alt="" />
          </button>
          <button className="p-2 hover:bg-accent rounded-full">
            <Image src={user} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}
