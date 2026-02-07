import { useLayoutEffect, useState } from "react"
import { RippleButton } from "../custom";

type Props = {
    Icon: any,
    color: string, 
    text: string,
    duration?: number
    onClick: () => void
}

export default function MenuButton({ Icon, color, text, duration=100, onClick }: Props){

    const [animate, setAnimate] = useState(false);

    useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, duration);
    }, []);

    return(
        <RippleButton
            onClick={onClick}
            className={`flex flex-row gap-3 py-3 px-3 items-center transition-transform transition-opacity ${animate ? "translate-x-0 opacity-100" : "translate-x-[100px] opacity-0"}`}
        >
            <Icon size={30} color={color} />
            <p className="text-base text-[var(--sec)] font-medium">{text}</p>
        </RippleButton>
    )
}