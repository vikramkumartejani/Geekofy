"use client"

import { useState } from "react"
import LocationFilter from "./FiltersComponents/LocationFilter"
import Divider from "./FiltersComponents/Divider"
import CategoryFilter from "./FiltersComponents/CategoryFilter"
import ServiceFilter from "./FiltersComponents/ServiceFilter"

interface Category {
    id: number
    name: string
}

interface Service {
    id: number
    name: string
    type: "software" | "hardware"
}

const categories: Category[] = [
    { id: 1, name: "Computer" },
    { id: 2, name: "Printers" },
    { id: 3, name: "Wifi & Networking" },
    { id: 4, name: "Mobiles & Tablets" },
]

const services: Service[] = [
    { id: 1, name: "Computer Setup", type: "software" },
    { id: 2, name: "Slow Computer", type: "software" },
    { id: 3, name: "Email Setup", type: "software" },
    { id: 4, name: "Virus Removal", type: "software" },
    { id: 5, name: "Screen Replacement", type: "hardware" },
    { id: 6, name: "Hard Drive Crashed", type: "hardware" },
    { id: 7, name: "Keypad Replacement", type: "hardware" },
    { id: 8, name: "Water Spill", type: "hardware" },
]

const Filters = () => {
    const [location, setLocation] = useState("")
    const [isLocationOpen, setIsLocationOpen] = useState(false)
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    const [isServiceOpen, setIsServiceOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedService, setSelectedService] = useState("")

    const handleLocationClick = () => {
        setIsLocationOpen(!isLocationOpen)
        setIsCategoryOpen(false)
        setIsServiceOpen(false)
    }

    const handleCategoryClick = () => {
        setIsCategoryOpen(!isCategoryOpen)
        setIsLocationOpen(false)
        setIsServiceOpen(false)
    }

    const handleServiceClick = () => {
        setIsServiceOpen(!isServiceOpen)
        setIsLocationOpen(false)
        setIsCategoryOpen(false)
    }

    const handleDetectLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords
                    try {
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
                        )
                        const data = await response.json()
                        const address = data.display_name
                        setLocation(address)
                        setIsLocationOpen(false)
                    } catch (error) {
                        console.error("Error fetching location:", error)
                        setLocation("Location not found")
                    }
                },
                (error) => {
                    console.error("Error getting location:", error)
                    setLocation("Unable to retrieve location")
                },
            )
        } else {
            console.log("Geolocation is not supported by this browser.")
            setLocation("Geolocation not supported")
        }
    }

    return (
        <div className="pt-10 md:pt-[50px] pb-[60px] md:pb-[80px] max-w-[700px] mx-auto w-full px-4">
            <div
                className="relative pl-[15px] md:pl-0 pr-[15px] flex md:items-center justify-between md:flex-row py-5 md:py-0 flex-col md:min-h-[58px] gap-5 md:gap-0 rounded-md border border-[#00000033]"
                style={{ boxShadow: "0px 2px 8px 0px #00000030" }}
            >
                <LocationFilter
                    location={location}
                    isOpen={isLocationOpen}
                    onLocationChange={setLocation}
                    onToggle={handleLocationClick}
                    onDetectLocation={handleDetectLocation}
                />

                <Divider />

                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    isOpen={isCategoryOpen}
                    onToggle={handleCategoryClick}
                    onSelect={(category) => {
                        setSelectedCategory(category)
                        setIsCategoryOpen(false)
                    }}
                />

                <Divider />

                <ServiceFilter
                    services={services}
                    selectedService={selectedService}
                    isOpen={isServiceOpen}
                    onToggle={handleServiceClick}
                    onSelect={(service) => {
                        setSelectedService(service)
                        setIsServiceOpen(false)
                    }}
                />

                <button className="ml-0 h-[36px] min-w-[56px] bg-primary-blue text-white rounded-md">Go</button>
            </div>
        </div>
    )
}

export default Filters

