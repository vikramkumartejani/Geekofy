import Image from "next/image"
import type React from "react"

interface ServiceItem {
    icon: string
    alt: string
    title: string
    width: number
    height: number
}

const ServicesBox: React.FC = () => {
    const services: ServiceItem[] = [
        {
            icon: "/assets/computer.svg",
            alt: "computer",
            title: "Computer Repair",
            width: 44,
            height: 43.96,
        },
        {
            icon: "/assets/printer.svg",
            alt: "Printer Support",
            title: "Printer Support",
            width: 44,
            height: 43.96,
        },
        {
            icon: "/assets/router.svg",
            alt: "router",
            title: "WiFi & Networking",
            width: 44,
            height: 43.96,
        },
        {
            icon: "/assets/mobile.svg",
            alt: "Mobiles & Tablets",
            title: "Mobiles & Tablets",
            width: 30,
            height: 38,
        },
    ]

    return (
        <div className="max-w-[443px] px-4 mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-12 pb-[100px] md:pb-[272px]">
            {services.map((service, index) => (
                <div key={index} className="text-center flex flex-col gap-2 items-center">
                    <div className="w-[50px] h-[50px] flex items-start justify-center">
                        <Image
                            src={service.icon}
                            alt={service.alt}
                            width={service.width}
                            height={service.height}
                        />
                    </div>
                    <h3 className="text-black-60 text-sm font-normal">{service.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default ServicesBox

