import Image from "next/image"
import type { FC } from "react"

interface Service {
    id: number
    name: string
    type: "software" | "hardware"
}

interface ServiceFilterProps {
    services: Service[]
    selectedService: string
    isOpen: boolean
    onToggle: () => void
    onSelect: (service: string) => void
}

const ServiceFilter: FC<ServiceFilterProps> = ({ services, selectedService, isOpen, onToggle, onSelect }) => {
    return (
        <div className="relative md:px-5 min-w-[180px]">
            <button
                className={`w-full flex items-center justify-between gap-2 text-left text-base !font-medium leading-[20px] focus:outline-none ${selectedService ? "text-black/80" : "text-black/50 text-nowrap"
                    }`}
                onClick={onToggle}
            >
                {selectedService || "Select Service"}
                <Image src="/assets/icons/drop-down-arrow.svg" alt="drop-down-arrow" width={14} height={7} />
            </button>

            {isOpen && (
                <div className="absolute top-9 md:top-[39px] left-0 w-full md:w-[250px] bg-white rounded-md border border-[#00000033] md:border-t-0 z-40">
                    <div className="py-5">
                        <div className="mb-4 px-6 text-lg leading-[21.78px] text-black-60 font-bold">Software Support</div>
                        {services
                            .filter((service) => service.type === "software")
                            .map((service) => (
                                <ul key={service.id} className="pr-4 pl-12 pb-5 last:pb-0" onClick={() => onSelect(service.name)}>
                                    <li className="list-disc text-base leading-[20px] text-[#00000080] cursor-pointer font-medium">
                                        {service.name}
                                    </li>
                                </ul>
                            ))}
                        <div className="mb-4 px-6 text-lg leading-[21.78px] text-black-60 font-bold">Hardware Support</div>
                        {services
                            .filter((service) => service.type === "hardware")
                            .map((service) => (
                                <ul key={service.id} className="pr-4 pl-12 pb-5 last:pb-0" onClick={() => onSelect(service.name)}>
                                    <li className="list-disc text-base leading-[20px] text-[#00000080] cursor-pointer font-medium">
                                        {service.name}
                                    </li>
                                </ul>
                            ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ServiceFilter

