import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

type Props = {
    Trigger: (...args: any) => React.ReactNode,
    children: React.ReactNode,
    styles?: any,
    className?: string,
    state: boolean, 
}

export default function SideTab({Trigger, children, styles, className, state}: Props){

    const ref = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        console.log(height);
    }, [height]);

    useLayoutEffect(() => {
        if(!ref.current) return;
        setHeight(ref.current.scrollHeight);
    }, [state]);


    return(
        <>
            <Trigger />
            <div    
                ref={ref}
                className={`${className || ""}`} 
                style={{ ...styles, height: state ? height : 0, transition: "height 200ms ease-in-out", overflow: "hidden" }}
            >
                {children}
            </div>
        </>
    )
}