import Image from "next/image"
import type { FC } from "react"

interface LocationFilterProps {
    location: string
    isOpen: boolean
    onLocationChange: (value: string) => void
    onToggle: () => void
    onDetectLocation: () => void
}

const LocationFilter: FC<LocationFilterProps> = ({
    location,
    isOpen,
    onLocationChange,
    onToggle,
    onDetectLocation,
}) => {
    return (
        <div className="relative min-w-[150px] pl-2 md:pl-[15px]">
            <div className="flex items-center gap-3 justify-between cursor-pointer" onClick={onToggle}>
                <Image src="/assets/icons/location.svg" alt="location" width={18.57} height={27.4} />
                <input
                    type="text"
                    placeholder="Find My Location"
                    className="w-full outline-none text-black/80 placeholder:text-black/50 text-base !font-medium leading-[20px] bg-transparent pr-2"
                    value={location}
                    onChange={(e) => onLocationChange(e.target.value)}
                    onClick={onToggle}
                />
            </div>

            {isOpen && (
                <div className="absolute top-10 md:top-[43px] left-0 w-full md:w-[318px] bg-white rounded-md border border-[#00000033] md:border-t-0 z-40">
                    <div className="p-[15px] space-y-2.5">
                        <div className="flex justify-between items-center">
                            <h3 className="text-black/60 font-medium text-[14px]">Current Location</h3>
                            <button
                                className="text-primary-blue text-[14px] font-medium flex items-center gap-2"
                                onClick={onDetectLocation}
                            >
                                Detect Using GPS
                                <Image src="/assets/icons/arrow-right.svg" alt="arrow-right" width={9} height={6} />
                            </button>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter locality/zip code"
                            className="w-full p-2.5 font-medium text-sm border-[.5px] border-[#00000033] text-[#00000099] placeholder:text-[#00000099] rounded-md outline-none bg-[#00000008]"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default LocationFilter

