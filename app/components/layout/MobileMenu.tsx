"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define the softwareSupport and hardwareSupport arrays
const softwareSupport = [
  { href: "/software-support/windows", title: "Windows" },
  { href: "/software-support/macos", title: "MacOS" },
  { href: "/software-support/linux", title: "Linux" },
];

const hardwareSupport = [
  { href: "/hardware-support/desktops", title: "Desktops" },
  { href: "/hardware-support/laptops", title: "Laptops" },
  { href: "/hardware-support/servers", title: "Servers" },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden p-2">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="computers">
              <AccordionTrigger>Computers</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Software Support</h4>
                    <div className="grid gap-2">
                      {softwareSupport.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-sm hover:text-primary"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Hardware Support</h4>
                    <div className="grid gap-2">
                      {hardwareSupport.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-sm hover:text-primary"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* Add other categories */}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}
