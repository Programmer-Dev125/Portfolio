import { useState } from "react";
import { RippleButton, Toaster } from "../custom/";
import { IoCopy } from "react-icons/io5";
import { copyText } from "../../data/uiData";

type Props = {
    varName: string,
    varValue: string
}

export default function Code({ varName, varValue }: Props){

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const openToaster = () => {
        copyText(varValue);
        setOpen(true);
        setMessage(`${varName} copied successfully`);
    }

    return(
        <div className="flex flex-row gap-2 items-start flex-wrap">
            <p className="text-[var(--pp)] text-sm sm:text-base">String</p>
            <p className="text-[var(--gr)] text-sm sm:text-base">{varName}</p>
            <p className="text-white text-sm sm:text-base">=</p>
            <RippleButton
                onClick={openToaster}
                color="rgba(0, 0, 0, 0.7)"
            >
                <p className="text-[#E99287] sm:text-sm text-base break-all">"{varValue}"</p>
            </RippleButton>
            <Toaster
                open={open}
                onClose={() => setOpen(false)}
                className="bg-black rounded-full flex flex-row gap-2 items-center px-10 py-2"
            >
                <IoCopy 
                    size={24}
                    color="#fff"
                />
                <p className="text-xs sm:text-sm lg:text-base text-white font-medium">{message}</p>
            </Toaster>
        </div>
    )
}