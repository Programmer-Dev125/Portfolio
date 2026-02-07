import { useLayoutEffect, useRef } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { RippleButton } from "../custom";

type Props = {
    text: string, 
    className?: string,
    onLayout?: (props?: any) => void,
    onClick: () => void,
    state: boolean
}

export default function TabButton( { text, className, onLayout, onClick, state }: Props ){

    const ref = useRef<HTMLParagraphElement | null>(null);
    
    useLayoutEffect(() => {
        if(!ref.current) return;
        onLayout?.(ref.current.offsetLeft);
    }, [ref]);

    return(
        <RippleButton className={`flex flex-row gap-3 items-center w-full ${className || ""}`} onClick={onClick}>
            <div className={`w-[16px] h-[16px] transition-transform duration-100 ease-in-out ${state ? "rotate-90" : "rotate-0"}`}>
                <IoMdArrowDropright size={16} color="var(--sec)" />
            </div>
            <p className="text-sm sm:text-base text-[var(--sec)]" ref={ref}>
                {text}
            </p>
        </RippleButton>
    )
}