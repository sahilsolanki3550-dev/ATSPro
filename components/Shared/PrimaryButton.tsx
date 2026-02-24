import { StaticImageData } from 'next/image'
import React from 'react'
import { ArrowRight, LucideIcon } from "lucide-react"

interface ButtonProp{
    name: string
    icon?:boolean
    onClick?:() => void
    className?:string
    type?:"button" | "submit" | "reset"
}
const PrimaryButton:React.FC<ButtonProp> = ({name, icon=false, onClick, className, type="button"}) => {
  return (
    
     <button  type={type} onClick={onClick} className={`bg-primary hover:bg-primary/90 cursor-pointer text-white px-3 sm:px-4 md:px-8 md:py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all space-x-2 gap-2 ${className} duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95 active:shadow-lg`}>
        {name}
        {icon && 
            <ArrowRight strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
        }

     </button>
    
  )
}

export default PrimaryButton