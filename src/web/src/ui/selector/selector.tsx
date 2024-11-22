"use client"

import { useMemo, useState } from "react"
import "./selector.css"

export interface SelectorProps {
    label?: string
    options: string[]
    onChange?: (option: string) => void
}

export const Selector = ({
    label = "",
    options = [],
    onChange = (option: string) => {}
}: SelectorProps) => {

    const [currentOption, setCurrentOption] = useState<string>(options[0])

    const select = (newValue: string) => {

        const newOption = options.find((option) => option === newValue) ?? options[0] ?? ""

        setCurrentOption(newOption)

        onChange(newOption)

    }

    const labelClassName = useMemo(()=>
        currentOption.length > 0
        ? "animation-focus" 
        : ""
    , [currentOption])

   return (
        <div className="selector w-full border border-1 border-grey-110 rounded-lg h-[52px] relative bg-white-100">
            <p className={`z-0 text-black-400 label ${labelClassName} h-full leading-[52px]`}>
                {label}
            </p>
            <select
                className="z-10 border-0 bg-transparent h-full w-full pt-[25px] text-md font-thin text-black order-transparent focus:border-transparent focus:ring-0"
                onChange={(e)=>select(e.target.value)} 
                value={currentOption}
            >
                {
                    options.map((option: string, i) => 
                        <option key={i} className="text-black">{option}</option>
                    )
                }
            </select>
        </div>
   ) 
}