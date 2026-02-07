import { useEffect, useState } from "react"

type Props = {
    children: React.ReactNode,
    className?: string,
    offset?: number
}

export default function Content( { children, className, offset }: Props){

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 100);
    }, []);


    return (
        <section 
        // h-full
            className={`transition-transform transition-opacity  duration-200 ease-in-out ${className || ""} ${animate ? "translate-y-0 opacity-100" : "opacity-0 translate-y-[100px]"}`}
            style={{
                paddingBottom: offset,
            }}

        >
            {children}
        </section>
    )
}