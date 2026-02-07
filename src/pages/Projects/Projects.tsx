import { useMemo, useState } from "react";
import { RippleButton, SideTab } from "../../../components/custom";
import { Checkbox, TabButton, ProjectCard } from "../../../components/ui";
import { goLink, mernProject, nativeProject, projectBar, reactNativeProject } from "../../../data/uiData";
import useDimensions from "../../../hooks/useDimensions";

export default function Projects(){

    const [x, setX] = useState(0);
    const [tab, setTab] = useState(0);
    const [open, setOpen] = useState(true);
    const { screenWidth } = useDimensions({});
    const data = useMemo(() => {
        switch(tab){
            case 0:
                return mernProject;
            case 1:
                return nativeProject;
            case 2:
                return reactNativeProject;
            default:
                return mernProject;
        }
    }, [tab]);


    return(
        <div className="grid max-[820px]:grid-cols-1 max-[1100px]:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] max-[1600px]:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] grid-cols-[minmax(0,2fr)_minmax(0,8fr)] h-full">
            <div className="border-r border-[var(--bd)]">
                <SideTab 
                    Trigger={() => 
                        <TabButton
                            state={open}
                            onClick={() => setOpen(prev => !prev)}
                            text="projects"
                            className="border-b border-[var(--bd)] py-5 px-5"  
                            onLayout={(padX: number) => setX(padX)}
                        />
                    }
                    state={open}
                >
                    {projectBar.map((item: any, index: number) => 
                        <RippleButton className="flex flex-row gap-5 items-center group w-full py-5" style={{paddingLeft: x}} onClick={() => setTab(index)}>
                            <Checkbox state={tab === index} onClick={() => setTab(index)} />
                            <div className="flex flex-row gap-2 items-center min-w-0 flex-wrap">
                                <item.Icon size={20} color="var(--lk)" />
                                <p className={`text-sm text-[var(--lk)] group-hover:text-[var(--sec)]`}>{item.text}</p>
                            </div>
                        </RippleButton>
                    )}
                </SideTab>
            </div>
            <div className={`${screenWidth <= 850 && open ? "border-t border-[var(--bd)]" : ""}`}>
                <div className={`border-r w-fit border-[var(--bd)] px-8 py-2`}>
                    <p className="text-sm text-[var(--lk)]">{projectBar[tab].text}</p>
                </div>
                <div className="border-t border-[var(--bd)] py-10 px-8">
                    {data.map((item: any) => 
                        <ProjectCard  
                            parentClassName="w-[300px] sm:w-[400px]"  
                            key={item.id}
                            src={item.src}
                            title={item.title}
                            shortDesc={item.shortDesc}
                            desc={item.desc}
                            projectTitle={item.projectTitle}
                            onClick={() => goLink(item.link)}
                            color="var(--gr)"
                            Icon={item.Icon}
                        />              
                    )}
                </div>
            </div>
        </div>
    )
}