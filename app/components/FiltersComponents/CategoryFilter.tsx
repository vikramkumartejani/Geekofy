import Image from "next/image"
import type { FC } from "react"

interface Category {
    id: number
    name: string
}

interface CategoryFilterProps {
    categories: Category[]
    selectedCategory: string
    isOpen: boolean
    onToggle: () => void
    onSelect: (category: string) => void
}

const CategoryFilter: FC<CategoryFilterProps> = ({ categories, selectedCategory, isOpen, onToggle, onSelect }) => {
    return (
        <div className="relative md:px-5 min-w-[200px]">
            <button
                className={`w-full flex items-center justify-between gap-5 text-left text-base !font-medium leading-[20px] focus:outline-none ${selectedCategory ? "text-black/80" : "text-black/50 text-nowrap"
                    }`}
                onClick={onToggle}
            >
                {selectedCategory || "Select Category"}
                <Image src="/assets/icons/drop-down-arrow.svg" alt="drop-down-arrow" width={14} height={7} />
            </button>

            {isOpen && (
                <div className="absolute top-9 md:top-[39px] left-0 w-full md:w-[206px] bg-white rounded-md border border-[#00000033] md:border-t-0 z-40">
                    <div className="py-2">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="px-5 py-2.5 text-base leading-[20px] text-[#00000080] cursor-pointer font-medium"
                                onClick={() => onSelect(category.name)}
                            >
                                {category.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CategoryFilter

