import { useLayoutEffect, useState } from "react";

type Props = {
    UpperNode: React.ReactNode
    title: string, 
    jobDesc: string,
    description: string,
    duration?: number
}

export default function WorkHistory( { title, description, UpperNode, jobDesc, duration=100 } : Props ){

    const [show, setShow] = useState(false);

    useLayoutEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, duration);
    }, []);

    return(
        <div className={`flex flex-col gap-5 transition-all duration-250 ease-in-out ${show ? "translate-x-0 opacity-100" : "translate-x-[100px] opacity-0"}`}>     
            <div className="flex flex-row gap-4 items-center">
                {UpperNode}
                <div className="flex flex-col gap-1">
                    <p className="text-sm sm:text-base lg:text-lg font-medium text-[var(--sec)]">{title}</p>
                    <p className="text-sm text-white/50">{jobDesc}</p>
                </div>
            </div>
            <p className="text-[var(--sec)] text-sm indent-8">"{`${description}`}"</p>
        </div>
    )
}