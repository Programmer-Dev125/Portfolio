import { RippleButton, SideTab, Toaster } from "../../../components/custom";
import { TabButton } from "../../../components/ui";
import { FaFolderPlus, FaFolderMinus } from "react-icons/fa";
import { contacts, goLink, openEmail } from "../../../data/uiData";
import { useEffect, useState } from "react";
import { IoCopy } from "react-icons/io5";

type Props = {
    tab: string,
    onChange: (tab: string) => void,
    onTab: (prop: any) => void
}

export default function LeftAbout( { tab, onChange, onTab }: Props ){

    const [open, setOpen] = useState(false);
    const [x, setX] = useState<number>(0);
    const [belowX, setBelowX] = useState<number>(0);
    const [currentTab, setCurrentTab] = useState({
        personal: true,
        contact: false
    })
    const [copy, setCopy] = useState(false);

    useEffect(() => {
        onTab(currentTab);
    }, [currentTab]);

    const onClick = (link: string, desc: string, text: string) => {
        switch(link){
            case "email":
                openEmail(() => {
                    setOpen(true);
                })
                break;
            case "route":
                goLink(desc);
                break;
            case "copy":
                window.navigator.clipboard.writeText(desc).then(() => {
                    setCopy(true);
                })
                break;
            default:
                break;
        }
    }

    return(
        <>
            <SideTab
                Trigger={() => 
                    <TabButton 
                        state={currentTab.personal}
                        onClick={() => setCurrentTab({personal: !currentTab.personal, contact: false})}
                        className={`p-5 border-b border-[var(--bd)] ${currentTab.personal ? "" : ""}`} 
                        text="personal-info"  
                        onLayout={(padX: number) => setX(padX || 0)}
                    />
                }
                state={currentTab.personal}
                className="w-full"
            >
                <RippleButton 
                    className="flex flex-row gap-4 items-center group w-full py-5" 
                    style={{paddingLeft: x, paddingRight: x / 2}}
                    onClick={() => onChange("bio")}
                >
                    {tab === "bio" ? <FaFolderMinus size={20} color="var(--lg-red)" /> : <FaFolderPlus size={20} color="var(--lg-red)" />}
                    <p className={`text-sm ${tab === "bio" ? "text-white" : "text-[var(--lk)]"} group-hover:text-white`}>bio</p>
                </RippleButton>
                <RippleButton 
                    className="flex flex-row gap-4 items-center group w-full py-5 border-b border-[var(--bd)]"  
                    style={{paddingLeft: x, paddingRight: x / 2}} 
                    onClick={() => onChange("work")}
                >
                    {tab === "work" ? <FaFolderMinus size={20} color="var(--gr)" /> : <FaFolderPlus size={20} color="var(--gr)" />}
                    <p className={`text-sm ${tab === "work" ? "text-white" : "text-[var(--lk)]"} group-hover:text-white`}>work-history</p>
                </RippleButton>
            </SideTab>
            <SideTab
                Trigger={() => 
                    <TabButton
                        className="border-b border-[var(--bd)] p-5" 
                        text="contacts"
                        state={currentTab.contact}
                        onClick={() => setCurrentTab({personal: false, contact: !currentTab.contact})}
                        onLayout={(padX: number) => setBelowX(padX)}
                    />
                }
                state={currentTab.contact}
            >
                {contacts.map((contact: any) => 
                    <RippleButton
                        className="flex flex-row gap-4 items-start group py-5"
                        style={{ paddingLeft: belowX, paddingRight:belowX / 2  }}
                        onClick={() => onClick(contact.link, contact.desc, contact.text)}
                    >
                        <div className="w-[25px] h-[25px] flex-shrink-0">
                            <contact.Icon size={25} color={contact.color} />
                        </div>

                        <div className="flex flex-col gap-1 min-w-0">
                            <p className="text-sm text-[var(--lk)] group-hover:text-white">
                                {contact.text}
                            </p>
                            <p className="text-sm text-[var(--sec)] break-words">
                                {contact.desc}
                            </p>
                        </div>
                    </RippleButton>
                )}
            </SideTab>
            <Toaster
                open={open}
                closeOnTimeout={false}
                onClose={() => setOpen(false)}
                className="bg-black py-5 px-10 rounded-lg"
            >
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-white">Fail to open Mail Application</p>   
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
            <Toaster
                open={copy}
                onClose={() => setCopy(false)}
                className="bg-black rounded-full flex flex-row gap-2 items-center px-10 py-2"
            >
                <IoCopy 
                    size={24}
                    color="#fff"
                />
                <p className="text-xs sm:text-sm lg:text-base text-white font-medium">Phone Number copied successfully</p>
            </Toaster>
        </>
    )
}