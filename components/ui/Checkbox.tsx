import { FaCheck } from "react-icons/fa6";
import { RippleButton } from "../custom";

type Props = {
    state: boolean,
    onClick: () => void
}

export default function Checkbox( { state, onClick }: Props){
    return(
        <RippleButton 
            onClick={onClick}
            color="rgba(0, 0, 0, 0.5)"
            className={`w-[20px] h-[20px] ${state ? "bg-[var(--lk)]" : "bg-transparent"} border border-[var(--lk)] rounded-sm flex justify-center items-center`}
        >
            <FaCheck color="var(--bl)" size={10} className={`transition-transform duration-100 ease-in-out ${state ? "scale-100" : "scale-0"}`} />
        </RippleButton>
    )
}