import { useLayoutEffect, useState } from "react";
import { ImageViewer, RippleButton } from "../custom"

type Props = {
    title: string,
    shortDesc: string,
    desc: string,
    projectTitle: string,
    onClick: () => void,
    color: string,
    Icon: any,
    src: string,
    parentClassName?: string
}

export default function ProjectCard({title, shortDesc, desc, onClick, Icon, projectTitle, color, src, parentClassName} : Props){

    const [animate, setAnimate] = useState(false);

    useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 100);

    }, []);

    return(
        <div className={`flex flex-col gap-3 transition-opacity duration-200 ease-in-out ${parentClassName || ""} ${animate ? "opacity-100" : "opacity-0"}`}>
            <div className="flex flex-col gap-2">
                <p className="text-[var(--pp)] text-base font-bold">{title}</p>
                <p className="text-sm text-[var(--lk)]">_{shortDesc}</p>
            </div>
            <div className="bg-[#011221] border border-[var(--bd)] rounded-lg">
                <div className="relative">
                    <ImageViewer 
                        src={src}
                        height={300}
                        imgClassName="rounded-t-lg"
                        divClassName="rounded-t-lg"
                    />
                    <div className="absolute top-2 right-3">
                        <RippleButton 
                            onClick={onClick}
                            className="w-[30px] h-[30px] flex justify-center items-center rounded-lg"
                            style={{ backgroundColor: color }}
                        >
                            <Icon size={20} color="#000" />
                        </RippleButton>
                    </div>
                </div>
                <div className="px-3 py-6 flex flex-col gap-5">
                    <p className="text-[var(--sec)] font-medium text-sm sm:text-base">{projectTitle}</p>
                    <p className="text-[var(--lk)] text-xs sm:text-sm leading-7">{desc}</p>
                    <RippleButton
                        onClick={onClick}
                        radii={4}
                        color="#000"
                        className="bg-[#1C2B3A] rounded-sm border border-[var(--bd)] px-3 py-2 w-fit text-sm text-[var(--sec)]"
                    >
                        view-project
                    </RippleButton>
                </div>
            </div>
        </div>
    )
}