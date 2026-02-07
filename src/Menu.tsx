import { useState } from "react";
import { Toaster, RippleButton } from "../components/custom/";
import MobileMenu from "./MobileMenu";
import { openEmail } from "../data/uiData";

type Props = {
    current: string, 
    onChange: (props: string) => void
}

export default function Menu({current, onChange}: Props){

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const onTab = (tab: string) => {
        onChange(tab);
    }

    return (
        <>
            <div className="w600_hidden grid grid-cols-[3fr_6fr_2fr] lg:grid-cols-[2fr_3fr_3.5fr_1.5fr] border-b border-[var(--bd)]">
                <p className="text-[var(--lk)] text-sm px-5 py-5">Abdul Ahad</p>
                <div className="grid grid-cols-3">
                    <RippleButton 
                        onClick={() => onTab("home")}
                        className={`border-l hover:border-b-3 hover:border-b-[var(--or)] py-5 text-center text-sm hover:text-white h-full 
                                ${current === "home" ? "border-b-3 border-b-[var(--or)] border-l-[var(--bd)] text-white" : "border-[var(--bd)] text-[var(--lk)]"}`}
                    >   
                        _hello
                    </RippleButton>
                    <RippleButton
                        onClick={() => onTab("about")}
                        className={`border-l hover:border-b-3 hover:border-b-[var(--or)] py-5 text-center text-sm hover:text-white h-full
                            ${current === "about" ? "border-b-3 border-b-[var(--or)] border-l-[var(--bd)] text-white" : "border-[var(--bd)] text-[var(--lk)]"}           
                        `}
                    >
                        _about
                    </RippleButton>
                    <RippleButton
                        onClick={() => onTab("projects")}
                        className={`border-l border-[var(--bd)] border-r hover:border-b-3 hover:border-b-[var(--or)] py-5 text-center text-sm hover:text-white h-full
                            ${current === "projects" ? "border-b-3 border-b-[var(--or)] text-white" : "border-[var(--bd)] text-[var(--lk)]"}    
                        `}
                    >
                        _projects
                    </RippleButton>
                </div>
                <div className="hidden lg:grid w-full py-5" />
                <RippleButton
                    onClick={() => {
                        openEmail((message?: string) => {
                            setOpen(true);
                            setMessage(message || "Fail to open Mail Application");
                        })
                    }}
                    className="border-l border-[var(--bd)] py-5 px-5 hover:border-b-[var(--or)] text-sm text-[var(--lk)] hover:text-white h-full"
                >
                    _contact_me
                </RippleButton>
                <Toaster
                    open={open}
                    closeOnTimeout={false}
                    onClose={() => setOpen(false)}
                    className="bg-black py-5 px-10 rounded-lg"
                >
                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-white">{message}</p>   
                        <RippleButton
                            color="rgba(0, 0, 0, 0.5)"
                            onClick={() => {
                                window.navigator.clipboard.writeText("abdulahaddar077@gmail.com");
                                setOpen(false);
                            }}
                            radii={8}
                            className="w-fit py-2 rounded-lg px-5 bg-[var(--or)]"
                        >
                            <p className="text-sm text-var(--bl)">
                                Copy Email Address
                            </p>
                        </RippleButton>
                    </div>
                </Toaster>
            </div>
            <MobileMenu
                onTab={(tab: string) => onChange(tab)}
            />
        </>
    )    
}
