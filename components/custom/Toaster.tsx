import { createPortal } from "react-dom";
import React, { useEffect, useLayoutEffect, useRef } from "react"
import useDimensions from "../../hooks/useDimensions";

type Props = {
    children: React.ReactNode,
    open: boolean,
    onClose: () => void,
    closeOnTimeout?: boolean,
    className?: string
}

export default function Toaster( { children, open, onClose, closeOnTimeout=true, className }: Props){

    const timerRef = useRef<any>(null);
    const { screenWidth, screenHeight } = useDimensions({});
    const openRef = useRef<boolean>(false);

    useEffect(() => {
        const onClick = (e: any) => { 
            e.stopPropagation();
            if(openRef.current){
                onClose();
            }
        }

        window.addEventListener("click", onClick);

        return () => {
            window.removeEventListener("click", onClick);
        }
    }, [])

    useEffect(() => {
        openRef.current = open;

        if(open && closeOnTimeout){
            timerRef.current = setTimeout(() => {
                onClose();
                clearTimeout(timerRef.current);
            }, 2000);
        }
    }, [open]);

    return createPortal( 
        <section
            className={`fixed top-0 left-0 flex justify-center ${open ? "pointer-events-auto" : "pointer-events-none"}`}
            style={{
                zIndex: 99,
                width: screenWidth, 
                height: screenHeight
            }}
        >   
            <div 
                onClick={(e: any) => e.stopPropagation()}
                className={`${className || ""} relative w-fit transition-all duration-200 h-fit ${open ? "opacity-100 translate-y-[30px]" : "opacity-0 translate-y-[-30px]"}`}
            >
                {children}
            </div>
        </section>,
        document.body
    )
}