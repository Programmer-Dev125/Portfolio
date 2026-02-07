import { useLayoutEffect, useState } from "react";

type Props = {
    ref: any,
}

export default function useObserver( { ref }: Props){

    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
        x: 0,
        y: 0
    });

    useLayoutEffect(() => {
        
        if(!ref.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            const entry = entries[0];
            const rect = entry.target as HTMLElement;

            setDimensions({
                width: rect?.offsetWidth ?? 0,
                height: rect?.offsetHeight ?? 0,
                x: rect?.offsetLeft ?? 0, 
                y: rect?.offsetTop ?? 0, 
            });
        });

        resizeObserver.observe(ref.current);

        return () => {
            resizeObserver.disconnect();
        }
    }, []);


    return dimensions
}