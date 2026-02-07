import type React from "react"
import useDimensions from "../../hooks/useDimensions"
import { useEffect, useRef } from "react"
import useObserver from "../../hooks/useObserver"

type Props = {
    children?: React.ReactNode,
    upperCircle: any,
    belowCircle: any,
    positions: any
}

export default function Card({children, upperCircle, belowCircle, positions}: Props){

    return(
        <section 
            className="w-full h-full"
        >
            <div 
                className="bg-white/5 rounded-lg w450_full mt-[20px] mb-[20px] w-[90%] mx-auto backdrop-blur-[100px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] relative border border-[var(--bd)]"
                style={{
                    minHeight: "100vh"
                }}
            >
                {children}
            </div>
            <div
                style={{ zIndex: -2, ...positions }}
                className="flex flex-col gap-2 absolute"
            >
                <div 
                    style={{
                        borderRadius: "50%",
                        backgroundColor: "var(--gr)",
                        ...upperCircle
                    }}
                />
                <div 
                    style={{
                        borderRadius: "50%",
                        backgroundColor: "var(--pp)",
                        ...belowCircle
                    }}
                />
            </div>
        </section>
    )
}