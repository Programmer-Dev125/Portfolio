import { useEffect, useRef } from "react";

type Props = {
    ln: number,
    width: number,
    children: React.ReactNode,
    className?: string
}

export default function Carousel( { ln, width, children, className }: Props){

    const scrollRef = useRef<number>(0);
    const elem = useRef<HTMLDivElement | null>(null);
    const timer = useRef<any>(null);

    useEffect(() => {

        const onScroll = () => {
            timer.current = setTimeout(() => {
                
                scrollRef.current = scrollRef.current === ln ? 0 : scrollRef.current + 1;
                let scrollX = scrollRef.current * width;

                const el = elem.current;
                if(el){
                    el.scrollTo({
                        left: scrollX,
                        top: 0,
                        behavior: "smooth"
                    })
                }
                onScroll();
            }, 3000);
        };  

        onScroll();

        return () => {
            if(timer.current) clearTimeout(timer.current); 
        }
    }, []);

    return(
        <div 
            ref={elem}
            className={`overflow-x-hidden scroll-hidden flex flex-row ${className || ""}`}
            style={{
                width: width
            }}
        >
            {children}
        </div>
    )
}