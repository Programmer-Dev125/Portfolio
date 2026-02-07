import { IoMenu } from "react-icons/io5";
import { RippleButton, Modal } from "../components/custom";
import { MenuButton } from "../components/ui";
import { useState } from "react";
import { mobileMenu } from "../data/uiData";

type Props = {
    onTab: (tab: string) => void
}

export default function MobileMenu({onTab}: Props){

    const [open, setOpen] = useState(false);

    return(
        <div className="w900_upperHidden w-full grid grid-cols-[5fr_5fr] sm:grid-cols-[3fr_7fr] border-b border-[var(--bd)]">
            <p className="border-r h-full border-[var(--bd)] py-6 px-5 text-base text-[var(--lk)]">Abdul Ahad</p>
            <div className="justify-self-end content-center h-full pr-5">
                <RippleButton
                    onClick={() => setOpen(true)}
                    yPlus={10} 
                    xPlus={10}
                    radii={"50%"}
                >
                    <IoMenu size={24} color="var(--lk)" />
                </RippleButton>
            </div>
            <Modal
                onClose={() => setOpen(false)}
                open={open}
                parentClassName="bg-black/80 flex justify-center items-center"
                cardStyle="w-[90%] mx-auto h-fit"
            >
                {mobileMenu.map((menu: any, index: number) =>
                    <MenuButton 
                        Icon={menu.Icon}
                        color={menu.color}
                        text={menu.text}
                        duration={(index + 1) * 100}
                        onClick={() => {
                            onTab(menu.link);
                            setOpen(false);
                        }}  
                    />
                )}
            </Modal>
        </div>
    )
}