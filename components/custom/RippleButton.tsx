import React, { useRef, useState } from "react";
import useObserver from "../../hooks/useObserver";

type Props = {
    yPlus?: number,
    xPlus?: number,
    children: React.ReactNode,
    onClick?: (...args: any) => void,
    color?: string,
    radii?: number | string,
    className?: string,
    style?: any
}

export default function RippleButton({ yPlus=0, xPlus=0, onClick, children, color="var(--lk)", radii, className, style }: Props){

    const [show, setShow] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const {width, height} = useObserver({ref});

    const openRipple = (e: any) => {
        e.stopPropagation();
        setShow(true);
        setTimeout(() => {
           setShow(false);
           onClick?.();
        }, 200);
    }

    return (
        <div className="relative">
            <div    
                className={`absolute transition-all duration-200 ${show ? "opacity-100" : "opacity-0"}`}
                style={{
                    backgroundColor: color,
                    width: (width + xPlus)  || 0,
                    height: (height + yPlus) || 0,
                    top: yPlus !== 0 ? -(yPlus / 2) : 0,
                    left: xPlus !== 0 ? -(xPlus / 2) : 0,
                    borderRadius: radii || 0,
                    zIndex: -1
                }}
            />  
            <div 
                ref={ref}
                className={`${className || ""}`}
                onClick={(e: any) => {
                    if(onClick){
                        openRipple(e);
                    }
                }}
                style={{...style}}
            >  
                {children}
            </div>
        </div>
    )
}