"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FilterState } from "@/types";
import Checkbox from "../Element/CheckBox";
import { Label } from "@/components/ui/label";
import TitleWithBorder from "../Element/TitleWithBorder";
import Image from "next/image";
import fillStar from "../../../public/assets/fill-star.png";
import whiteStar from "../../../public/assets/white-star.png";
import Button from "../Element/Button";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onClearFilters: () => void;
}

export function FilterSidebar({
  filters,
  onFilterChange,
  onClearFilters,
}: FilterSidebarProps) {
  const [selectedPriceType, setSelectedPriceType] = useState<
    "flat" | "hourly" | "call" | "startDate" | null
  >(null);

  const handlePriceTypeChange = (
    type: "flat" | "hourly" | "call" | "startDate" | null
  ) => {
    // setSelectedPriceType(type);
    // onFilterChange({
    //   pricing: {
    //     ...filters.pricing,
    //     type: [type],
    //   },
    // });
  };

  const handleRatingChange = (rating: number) => {
    onFilterChange({ minRating: rating });
  };

  return (
    <>
      <div className="bg-[linear-gradient(92.95deg,_#F7F7F7_1.67%,_#FFFFFF_106.62%)] w-full *:mb-[25px] p-2 pb-0">
        {/* Availability */}
        <div>
          <TitleWithBorder title="Availability" />
          <div className="space-y-2 mt-[15px]">
            {[
              { id: "open", label: "Open Now" },
              { id: "appointment", label: "By Appointment" },
              { id: "24/7", label: "24/7 Support" },
            ].map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  checked={filters.availability.includes(type.id as any)}
                  onChange={(checked) =>
                    onFilterChange({
                      availability: checked
                        ? [...filters.availability, type.id as any]
                        : filters.availability.filter((t) => t !== type.id),
                    })
                  }
                  label={type.label}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <div className="flex items-center justify-between ">
            <TitleWithBorder title="Reviews" isBorderBototm={false} />
            <button
              onClick={() => {
                setSelectedPriceType(null);
                onFilterChange({
                  minRating: 0,
                });
              }}
              className="text-[16px] font-medium text-[#00000080] hover:text-primary flex items-center"
            >
              <X className="w-4 h-4 ml-1" />
              Clear
            </button>
          </div>
          <div className=" flex items-center w-full h-[4px] mb-3 ">
            <div className=" rounded-[10px] w-[50px] h-[4px] bg-[#0084FF] " />
            <div className=" flex-1 h-[1px] bg-[#E4E4E4] " />
          </div>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                className={`p-1 ${
                  rating <= filters.minRating
                    ? "text-[#FFB45C]"
                    : "text-[#8D8D8D] "
                }`}
                onClick={() => handleRatingChange(rating)}
              >
                <Image
                  className="w-5 h-5 "
                  src={rating <= filters.minRating ? fillStar : whiteStar}
                  alt=""
                />
              </button>
            ))}
            <span className="ml-2 text-[16px] font-semibold text-[#00000099] ">
              & Up
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <TitleWithBorder isBorderBototm={false} title="Pricing" />
            <button
              onClick={() => {
                onFilterChange({
                  pricing: { type: [], range: [] },
                });
              }}
              className="text-[16px] font-medium text-[#00000080] hover:text-primary flex items-center"
            >
              <X className="w-4 h-4 ml-1" />
              Clear
            </button>
          </div>
          <div className="flex items-center w-full h-[4px] mb-3">
            <div className="rounded-[10px] w-[50px] h-[4px] bg-[#0084FF]" />
            <div className="flex-1 h-[1px] bg-[#E4E4E4]" />
          </div>

          <div className="space-y-4">
            {/* Flat Fee */}
            <div>
              <Checkbox
                checked={filters.pricing.type.includes("flat")}
                onChange={(checked) =>
                  onFilterChange({
                    pricing: {
                      ...filters.pricing,
                      type: checked
                        ? [...filters.pricing.type, "flat"]
                        : filters.pricing.type.filter((t) => t !== "flat"),
                    },
                  })
                }
                label="Flat Fee"
              />
              {filters.pricing.type.includes("flat") && (
                <div className="ml-6 mt-2 space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={filters.pricing.range.includes("under-70")}
                      onChange={() =>
                        onFilterChange({
                          pricing: {
                            ...filters.pricing,
                            range: ["under-70"],
                          },
                        })
                      }
                      className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-0"
                    />
                    <span className="text-[16px] text-[#00000099]">
                      Under $70
                    </span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={filters.pricing.range.includes("70-100")}
                      onChange={() =>
                        onFilterChange({
                          pricing: {
                            ...filters.pricing,
                            range: ["70-100"],
                          },
                        })
                      }
                      className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-0"
                    />
                    <span className="text-[16px] text-[#00000099]">
                      $70 - $100
                    </span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={filters.pricing.range.includes("over-100")}
                      onChange={() =>
                        onFilterChange({
                          pricing: {
                            ...filters.pricing,
                            range: ["over-100"],
                          },
                        })
                      }
                      className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-0"
                    />
                    <span className="text-[16px] text-[#00000099]">
                      Over $100
                    </span>
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="$ Min"
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <input
                      type="text"
                      placeholder="$ Max"
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                      Go
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Hourly Fee */}
            <div>
              <Checkbox
                checked={filters.pricing.type.includes("hourly")}
                onChange={(checked) =>
                  onFilterChange({
                    pricing: {
                      ...filters.pricing,
                      type: checked
                        ? [...filters.pricing.type, "hourly"]
                        : filters.pricing.type.filter((t) => t !== "hourly"),
                    },
                  })
                }
                label="Hourly Fee"
              />
            </div>

            {/* Starts At */}
            <div>
              <Checkbox
                checked={filters.pricing.type.includes("startDate")}
                onChange={(checked) =>
                  onFilterChange({
                    pricing: {
                      ...filters.pricing,
                      type: checked
                        ? [...filters.pricing.type, "startDate"]
                        : filters.pricing.type.filter((t) => t !== "startDate"),
                    },
                  })
                }
                label="Starts At"
              />
            </div>

            {/* Call for pricing */}
            <div>
              <Checkbox
                checked={filters.pricing.type.includes("call")}
                onChange={(checked) =>
                  onFilterChange({
                    pricing: {
                      ...filters.pricing,
                      type: checked
                        ? [...filters.pricing.type, "call"]
                        : filters.pricing.type.filter((t) => t !== "call"),
                    },
                  })
                }
                label="Call For Pricing"
              />
            </div>
          </div>
        </div>

        {/* Support Type */}
        <div>
          <TitleWithBorder title="Support Type" />
          <div className="space-y-2 mt-[15px]">
            {[
              { id: "remote", label: "Remote Support" },
              { id: "instore", label: "Local Instore Support" },
              { id: "house", label: "House Call" },
              { id: "pickup", label: "Pick & Drop" },
            ].map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  checked={filters.supportType.includes(type.id as any)}
                  onChange={(checked) =>
                    onFilterChange({
                      supportType: checked
                        ? [...filters.supportType, type.id as any]
                        : filters.supportType.filter((t) => t !== type.id),
                    })
                  }
                  label={type.label}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Usage Type */}
        <div>
          <TitleWithBorder title="Usage Type" />
          <div className="space-y-2 mt-[15px]">
            {[
              { id: "personal", label: "Personal Use" },
              { id: "business", label: "Business Use" },
            ].map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  checked={filters.usageType.includes(type.id as any)}
                  onChange={(checked) =>
                    onFilterChange({
                      usageType: checked
                        ? [...filters.usageType, type.id as any]
                        : filters.usageType.filter((t) => t !== type.id),
                    })
                  }
                  label={type.label}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <TitleWithBorder title="Payment Method" titleClassName="mb-2" />
          <div className="mt-[15px] flex flex-col gap-2">
            {[
              { id: "zelle", label: "Zelle Pay" },
              { id: "klarna", label: "Klarna" },
              { id: "card", label: "Credit/Debit Card" },
              { id: "paypal", label: "PayPal" },
              { id: "google", label: "Google Pay" },
              { id: "apple", label: "Apple Pay" },
              { id: "cash", label: "Cash" },
              { id: "crypto", label: "Cryptocurrency" },
            ].map((method) => (
              <div key={method.id} className="flex items-center space-x-2">
                <Checkbox
                  checked={filters.paymentMethods.includes(method.id as any)}
                  onChange={(checked) =>
                    onFilterChange({
                      paymentMethods: checked
                        ? [...filters.paymentMethods, method.id as any]
                        : filters.paymentMethods.filter((t) => t !== method.id),
                    })
                  }
                  label={method.label}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Employee Strength */}
        <div>
          <TitleWithBorder title="Employee Strength" titleClassName="mb-2" />
          <div className="mt-[15px] flex flex-col gap-2">
            {[
              { id: "solo", label: "Solo" },
              { id: "2-5", label: "2 - 5" },
              { id: "6-10", label: "6 - 10" },
              { id: "11-20", label: "11 - 20" },
              { id: "20+", label: "20+" },
            ].map((strength) => (
              <div key={strength.id} className="flex items-center space-x-2">
                <Checkbox
                  checked={filters.employeeStrength.includes(
                    strength.id as any
                  )}
                  onChange={(checked) =>
                    onFilterChange({
                      employeeStrength: checked
                        ? [...filters.employeeStrength, strength.id as any]
                        : filters.employeeStrength.filter(
                            (t) => t !== strength.id
                          ),
                    })
                  }
                  label={strength.label}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Years in Business */}
        <div>
          <TitleWithBorder title="Years in Business" />
          <div className=" w-[40px] mt-[15px] ">
            <Select
              value={String(filters.yearsInBusiness)}
              onValueChange={(value) =>
                onFilterChange({ yearsInBusiness: Number(value) })
              }
            >
              <div className=" min-w-[130px] flex items-center gap-4  ">
                <SelectTrigger>
                  <SelectValue placeholder="Select years" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 5, 12, 15, 20].map((years) => (
                    <SelectItem key={years} value={String(years)}>
                      {years}
                    </SelectItem>
                  ))}
                </SelectContent>
                <span className="text-[16px] font-medium text-[#00000080]">
                  Years
                </span>
              </div>
            </Select>
          </div>
        </div>
      </div>
      <button
        onClick={onClearFilters}
        className="flex items-center justify-center gap-1 mt-[20px] ml-auto py-[10px] px-5 text-[#00000099] text-[16px] font-medium  hover:bg-[#f5f5f5] border rounded-md"
      >
        <X className="w-4 h-4 ml-1" />
        Clear All Filters
      </button>
    </>
  );
}
