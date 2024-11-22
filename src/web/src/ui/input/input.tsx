"use client"

import { useMemo, useState } from "react"
import "./input.css"

export interface InputProps {
    label?: string
    onChange?: (newValue: string) => void
}

export const Input = ({
    label = "",
    onChange = () => {}
}: InputProps) => {

    const [value, setValue] = useState("")

    const [isFocus, setIsFocus] = useState(false)

    const focus = () => setIsFocus(true)

    const blur = () => setIsFocus(false)

    const change = (newValue: string) => {
        setValue(newValue)
        onChange(newValue)
    }

    const labelClassName = useMemo(()=>
        isFocus || value.length > 0
        ? "animation-focus" 
        : ""
    , [isFocus, value])

   return (
        <div className="input w-full border border-1 border-grey-110 rounded-lg h-[52px] relative bg-white-100">
            <p className={`z-0 text-black-400 label ${labelClassName} h-full leading-[52px]`}>
                {label}
            </p>
            <input 
                type="text" 
                className="z-10 border-0 bg-transparent h-full w-full pt-[26px] text-md font-thin text-black order-transparent focus:border-transparent focus:ring-0" 
                onChange={(e)=>change(e.target.value)}
                onBlur={()=>blur()}
                onFocus={()=>focus()}
                value={value}
            />
        </div>
   ) 
}