"use client";

import { useState } from "react";
import type { FilterState, ServiceProvider } from "@/types";
import { Header } from "../components/layout/Header";
import { FilterSidebar } from "../components/filters/SiderbarFilters";
import { MobileFilters } from "../components/filters/MobileFilters";
import ServiceCard from "../components/ServiceCard";
import { ChatWindow } from "../components/chat/chat";
import Footer from "../components/Footer";
import arrowRight from "../../public/assets/arrowRight.svg";
import Image from "next/image";
import { useScrollbarVisibility } from "@/hooks/useScrollbarVisibility";

const initialFilters: FilterState = {
  availability: [],
  minRating: 0,
  pricing: {
    type: [],
    range: [],
  },
  supportType: [],
  usageType: [],
  paymentMethods: [],
  employeeStrength: [],
  yearsInBusiness: 12,
};

const services: ServiceProvider[] = [
  {
    id: "1",
    name: "Log On Fix It",
    rating: 4.9,
    reviewCount: 852,
    status: {
      type: "open",
      time: "09:00am - 01:00pm",
    },
    hours: {
      monday: [
        { open: "6am", close: "9am" },
        { open: "6pm", close: "9pm" },
      ],
      tuesday: [
        { open: "6am", close: "9am" },
        { open: "6pm", close: "9pm" },
      ],
      wednesday: [
        { open: "6am", close: "9am" },
        { open: "6pm", close: "9pm" },
      ],
      thursday: [
        { open: "6am", close: "9am" },
        { open: "6pm", close: "9pm" },
      ],
      friday: [
        { open: "6am", close: "9am" },
        { open: "6pm", close: "9pm" },
      ],
      saturday: [
        { open: "6am", close: "9am" },
        { open: "6pm", close: "9pm" },
      ],
      sunday: "Closed",
    },
    pricing: {
      type: "flat",
      amount: 99.99,
      note: "for Virus Removal",
    },
    distance: "0.4 Miles",
    yearFounded: 2009,
    description:
      "We offer an affordable online remote computer repair service & support since 1999. Our expert, friendly technicians provide comprehensive computer repair services, virus removal, and system optimization. With over two decades of experience, we guarantee customer satisfaction and offer a money-back guarantee on all our services. Our team is available during flexible hours to accommodate your schedule, and we pride ourselves on quick response times and thorough problem resolution.",
    badges: Array(6).fill("Money Back Guarantee"),
    imageUrl: "",
  },
  {
    id: "2",
    name: "Geek Buddy",
    rating: 4.8,
    reviewCount: 623,
    status: {
      type: "open",
      time: "24/7",
    },
    hours: {
      monday: [{ open: "12am", close: "11:59pm" }],
      tuesday: [{ open: "12am", close: "11:59pm" }],
      wednesday: [{ open: "12am", close: "11:59pm" }],
      thursday: [{ open: "12am", close: "11:59pm" }],
      friday: [{ open: "12am", close: "11:59pm" }],
      saturday: [{ open: "12am", close: "11:59pm" }],
      sunday: [{ open: "12am", close: "11:59pm" }],
    },
    pricing: {
      type: "hourly",
      amount: 59.99,
      note: "1-hour minimum",
    },
    distance: "0.8 Miles",
    yearFounded: 2015,
    description:
      "24/7 tech support services with certified professionals. Remote assistance for all your computer needs, including hardware diagnostics, software troubleshooting, and system optimization. Our team of certified technicians is available around the clock to provide immediate assistance. We specialize in virus removal, data recovery, software installation, and general PC maintenance. All our services come with a satisfaction guarantee and detailed documentation of work performed.",
    badges: ["24/7 Support", "Certified Techs", "Money Back Guarantee"],
    imageUrl: "",
  },
  {
    id: "3",
    name: "Tech Warriors",
    rating: 4.7,
    reviewCount: 445,
    status: {
      type: "opens_at",
      time: "09:00am",
    },
    hours: {
      monday: [{ open: "9am", close: "6pm" }],
      tuesday: [{ open: "9am", close: "6pm" }],
      wednesday: [{ open: "9am", close: "6pm" }],
      thursday: [{ open: "9am", close: "6pm" }],
      friday: [{ open: "9am", close: "6pm" }],
      saturday: [{ open: "10am", close: "4pm" }],
      sunday: "Closed",
    },
    pricing: {
      type: "flat",
      amount: 79.99,
      note: "Basic diagnostics",
    },
    distance: "1.2 Miles",
    yearFounded: 2018,
    description:
      "Professional computer repair and IT support services. Specializing in both hardware and software solutions for home and small business users. Our team combines technical expertise with clear communication to ensure you understand the problems and solutions. We offer both remote and on-site support, with a focus on long-term solutions rather than quick fixes. All our technicians are certified and undergo regular training to stay current with the latest technology trends.",
    badges: ["On-site Support", "Business Solutions", "Certified Experts"],
    imageUrl: "",
  },
];

export default function Page() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [activeChats, setActiveChats] = useState<string[]>([]);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  console.log("filters", filters);

  const handleClearFilters = () => {
    setFilters(initialFilters);
  };

  const handleChatClick = (serviceId: string) => {
    if (!activeChats.includes(serviceId)) {
      setActiveChats([...activeChats, serviceId]);
    }
  };

  const handleChatClose = (serviceId: string) => {
    setActiveChats(activeChats.filter((id) => id !== serviceId));
  };
  useScrollbarVisibility("main-content");
  return (
    <div id="main-content" className=" flex flex-col">
      <Header />

      <main className=" max-w-[1340px] w-[96%] sm:w-[90%]  xl:w-[80%] flex-1 container mx-auto  ">
        <div className="grid  grid-cols-1 lg:grid-cols-[240px_1fr] mt-[40px] gap-[20px] lg:gap-[40px] ">
          <div className="hidden lg:block ">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          <div>
            <div className="flex  sm:items-center items-start justify-between  flex-col-reverse sm:flex-row ">
              <div className="flex gap-1 sm:gap-2 md:gap-5 items-start sm:items-center flex-col sm:flex-row ">
                <h3 className=" text-[16px] font-semibold text-[#00000099] ">
                  Showing Results For:
                </h3>
                <div className=" flex items-center gap-[08px] md:gap-[15px] text-[15px] md:text-[16px] font-semibold text-[#00000099]">
                  <span className="">Computers</span>
                  <Image src={arrowRight} alt="" />
                  <span className="">Software</span>
                  <Image src={arrowRight} alt="" />
                  <span className="">Virus Removal</span>
                </div>
              </div>
              <div className=" self-end ">
                <MobileFilters
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                />
              </div>
            </div>

            <div className="mt-6 *:mb-[20px] sm:*:mb-[40px]">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onChatClick={handleChatClick}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 right-0 flex z-50">
        {activeChats.map((serviceId, index) => {
          const service = services.find((s) => s.id === serviceId);
          if (!service) return null;

          return (
            <ChatWindow
              key={serviceId}
              serviceId={serviceId}
              serviceName={service.name}
              onClose={() => handleChatClose(serviceId)}
              index={index}
              totalChats={activeChats.length}
            />
          );
        })}
      </div>

      {/* footer  */}
      <Footer />
    </div>
  );
}
