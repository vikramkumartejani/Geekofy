"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const softwareSupport = [
  { title: "Computer Diagnosis", href: "" },
  { title: "Computer Repair & Help", href: "" },
  { title: "Computer Tune-up", href: "" },
  { title: "Virus Removal", href: "" },
  { title: "Email Support", href: "" },
  { title: "New Computer Setup", href: "" },
  { title: "OS Upgrade / Reinstall", href: "" },
  { title: "Browser Support", href: "" },
  {
    title: "Software Uninstall / Reinstall",
    href: "",
  },
  { title: "Data Backup or Transfer", href: "" },
  { title: "Computer Training", href: "" },
];

const hardwareSupport = [
  { title: "Desktop Hardware Replacement", href: "/services/desktop-hardware" },
  { title: "Laptop Hardware Replacement", href: "/services/laptop-hardware" },
  { title: "Desktop RAM Replacement", href: "/services/desktop-ram" },
  { title: "Laptop Keypad Replacement", href: "/services/laptop-keypad" },
  { title: "Laptop Screen Replacement", href: "/services/laptop-screen" },
  { title: "Laptop Water Damage", href: "/services/water-damage" },
  { title: "No Boot - Harddrive Crashed", href: "/services/no-boot" },
];

export function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex md:gap-8">
      <NavigationMenuList className="flex gap-0 lg:gap-8">
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" lg:px-2 px-[4px] text-[16px] lg:text-[18px] text-[#00000099] font-bold ">
            Computers
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[600px] grid-cols-2">
              <div>
                <h3 className="font-bold text-[18px]  mb-5 ">
                  Software Support
                </h3>
                <div className="grid gap-2">
                  {softwareSupport.map((item, i) => (
                    <div key={i}>
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-[16px] font-medium text-[#00000099] hover:text-primary hover:px-[10px] hover:py-[5px] active:px-[10px] active:py-[5px] hover:bg-[#0084FF] active:bg-[#0084FF] hover:shadow-lg active:shadow-md hover:text-[#ffffff] active:text-[#ffffff] hover:rounded-md active:rounded-md "
                      >
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[18px]  mb-5 ">
                  Hardware Support
                </h3>
                <div className="grid gap-2">
                  {hardwareSupport.map((item, i) => (
                    <div key={i}>
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-[16px] font-medium text-[#00000099] hover:text-primary hover:px-[10px] hover:py-[5px] active:px-[10px] active:py-[5px] hover:bg-[#0084FF] active:bg-[#0084FF] hover:shadow-lg active:shadow-md hover:text-[#ffffff] active:text-[#ffffff] hover:rounded-md active:rounded-md "
                      >
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className=" lg:px-2 px-[4px] text-[16px] lg:text-[18px] text-[#00000099] font-bold ">
            Printers
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[400px]">
              <h3 className="font-medium leading-none mb-3 text-primary">
                Printer Services
              </h3>
              {/* Add printer services here */}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className=" lg:px-2 px-[4px] text-[16px] lg:text-[18px] text-[#00000099] font-bold ">
            WiFi & Networking
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[400px]">
              <h3 className="font-medium leading-none mb-3 text-primary">
                Network Services
              </h3>
              {/* Add network services here */}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className=" lg:px-2 px-[4px] text-[16px] lg:text-[18px] text-[#00000099] font-bold ">
            Mobiles & Tablets
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[400px]">
              <h3 className="font-medium leading-none mb-3 text-primary">
                Mobile Services
              </h3>
              {/* Add mobile services here */}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
