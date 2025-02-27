"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import type { ServiceProvider } from "@/types";
import Button from "./Element/Button";
import { BusinessHoursModal } from "./Modals/BusinessHoursModal";
import defaultLogo from "../../public/assets/defaultlogo.png";
import money from "../../public/assets/money.png";
import chatIcon from "../../public/assets/chat.svg";

interface ServiceCardProps {
  service: ServiceProvider;
  onChatClick: (serviceId: string) => void;
}

const ServiceCard = ({ service, onChatClick }: ServiceCardProps) => {
  const [isHoursModalOpen, setIsHoursModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <>
      <div className="shadow-lg">
        <div className="px-[10px] pt-[10px] block sm:hidden  ">
          <Image
            className="object-cover w-[100px] aspect-square "
            src={service.imageUrl || defaultLogo}
            alt={service.name}
          />
        </div>
        <div className="flex flex-row items-start gap-4 pt-[20px] px-[14px] md:px-[40px] lg:px-[20px] xl:px-[40px] flex-wrap sm:flex-nowrap ">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[#0084FF] font-[800] text-[24px] mb-[10px] leading-[22px] ">
                  {service.name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <div className="flex">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(service.rating)
                              ? "fill-[#FFB45C] text-[#FFB45C]"
                              : "fill-muted text-muted-foreground"
                          }`}
                        />
                      ))}
                  </div>
                  <span className="text-[#00000099] font-medium text-[16px] ">
                    {service.rating} ({service.reviewCount})
                  </span>
                  <span className="text-[16px] font-semibold text-[#00900E] ">
                    Excellent
                  </span>
                </div>
              </div>
              {/* <div className="text-right">
                <div className="text-sm text-muted-foreground">
                  Distance: {service.distance}
                </div>
                <div className="text-sm text-muted-foreground">
                  Year Founded: {service.yearFounded}
                </div>
              </div> */}
            </div>
          </div>
          <Button
            className=" w-[126px] bg-[#059E14] hover:bg-[#057219] active:bg-[#057219] border-none "
            onClick={() => onChatClick(service.id)}
          >
            Live Chat <Image src={chatIcon} alt="" />
          </Button>
        </div>

        <div className="grid md:grid-cols-[130px_1fr] gap-[10px] xl:gap-[30px] mb-4 pt-[20px] px-[14px] md:px-[40px] lg:px-[20px] xl:px-[40px] ">
          <div className="hidden sm:block ">
            <Image
              className="object-cover w-[130px] aspect-square "
              src={service.imageUrl || defaultLogo}
              alt={service.name}
            />
          </div>
          <div>
            <div className="w-full pt-[10px] mb-[25px] ">
              <div className=" flex justify-between flex-wrap sm:flex-nowrap items-center mb-[6px] ">
                <button
                  onClick={() => setIsHoursModalOpen(true)}
                  className=" text-[16px] font-medium  "
                >
                  <span className=" w-[90px] ">
                    <span
                      className={` w-[90px] ${
                        service.status.type === "open"
                          ? "text-[#00900E] "
                          : " text-[#E82327] "
                      }`}
                    >
                      {service.status.type === "open" ? "Open Now" : "Opens at"}
                      <span className=" text-[#000000] pl-2 ">:</span>
                    </span>
                  </span>
                  <span className="ml-2 text-[16px] font-medium text-[#00000099] ">
                    {service.status.type === "open"
                      ? `${service.hours.monday[0].open} - ${service.hours.monday[0].close}`
                      : service.status.time}
                  </span>
                </button>
                <div className=" text-[16px] font-medium text-[#00000099]">
                  Distance: {service.distance}
                </div>
              </div>

              <div className="flex justify-between items-center flex-wrap sm:flex-nowrap ">
                <div className=" flex  ">
                  <div className="w-[90px] ">
                    <span className="text-[16px] font-medium text-[#00000099]">
                      {service.pricing.type === "flat" ? "Flat Fee" : "Hourly"}
                    </span>
                  </div>
                  <div className="text-[16px] font-medium text-[#00000099]">
                    <span className=" text-[#000000] ">: </span>$
                    {service.pricing.amount}
                    {service.pricing.type === "hourly" && "/hr"}
                    <span className="text-muted-foreground ml-1">
                      {service.pricing.note && `(${service.pricing.note})`}
                    </span>
                  </div>
                </div>
                <div className=" text-[16px] font-medium text-[#00000099] mr-[0px] xl:mr-[20px]  ">
                  Year Founded: {service.yearFounded}
                </div>
              </div>
            </div>
            <div className=" text-[16px] text-[#00000099] ">
              {isExpanded
                ? service.description
                : shortText(service.description, 100)}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#0084FF] hover:underline ml-1"
              >
                {isExpanded ? "read less" : "read more"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 py-[10px] grid grid-cols-2 md:grid-cols-3 gap-2 bg-[#D5E8FF80] px-[14px] md:px-[40px] lg:px-[20px] xl:px-[40px] ">
          {service.badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-start sm:items-center"
            >
              <Image src={money} className=" w-[26px] sm:w-[36px] " alt="" />
              <span className=" text-[#00000099] text-[14px] md:text-[16px] font-semibold ">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      <BusinessHoursModal
        isOpen={isHoursModalOpen}
        onClose={() => setIsHoursModalOpen(false)}
        hours={service.hours}
        businessName={service.name}
      />
    </>
  );
};

export default ServiceCard;
