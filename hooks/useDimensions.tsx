import { useEffect, useRef, useState } from "react";

type Props = {
    ref?: any
}

export default function useDimensions({ref}: Props){

    const elemRef = useRef(ref);

    useEffect(() => {
        elemRef.current = ref;
    }, [ref]);

    const [sizes, setSizes] = useState<any>({
        screenWidth: 0,
        screenHeight: 0,
        outWidth: 0,
        outHeight: 0,
        element: elemRef
    });

    useEffect(() => {
        
        const handler = () => {

            setSizes({
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight,
                outWidth: window.outerWidth,
                outHeight: window.outerHeight,
                element: elemRef?.current ?? null
            })
        }

        handler();

        window.addEventListener("resize", handler);

        return () => {
            window.removeEventListener("resize", handler);
        }

    }, []);

    return sizes;
}