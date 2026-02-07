import { useState } from "react";
import LeftAbout from "./LeftAbout";
import { bio, mobStacks, webStacks } from "../../../data/uiData";
import { Content, WorkHistory } from "../../../components/ui";
import { FaSquareUpwork } from "react-icons/fa6";
import useDimensions from "../../../hooks/useDimensions";


export default function About(){

    const [currentTab, setCurrentTab] = useState("bio");
    const { screenWidth } = useDimensions({});
    const [personalContact, setPersonalContact] = useState({personal: true, contact: false});

    return(
        <div 
            className="max-[850px]:grid-cols-1 lg:h-screen grid overflow-x-hidden grid-cols-[minmax(0,3fr)_minmax(0,7fr)] lg:grid-cols-[minmax(0,2.5fr)_minmax(0,5.5fr)_minmax(0,2fr)] xl:grid-cols-[minmax(0,2fr)_minmax(0,6fr)_minmax(0,2fr)]"
        >
            <div className="border-r border-[var(--bd)] scroll-hidden">
                <LeftAbout 
                    tab={currentTab}
                    onChange={(tab: string) => setCurrentTab(tab)}
                    onTab={(prop) => setPersonalContact(prop)}
                />
            </div>
            <div className={`border-r border-r-[var(--bd)] ${screenWidth <= 850  && personalContact.contact ? `border-t` : ""}`}>
               <p className={`border-r border-[var(--bd)] px-5 py-2 w-fit text-sm text-[var(--sec)]`}>{currentTab}</p>
               {currentTab === "bio" && 
                    <Content className="border-t border-[var(--bd)] py-3 px-5">
                        <p className="text-[var(--lk)] text-sm">/*</p>
                        <div className="flex flex-col gap-3">
                            {bio.map((text: string) => 
                                <div className="flex flex-row gap-3 items-center pl-3">
                                    <p className="text-[var(--lk)] text-sm">*</p>
                                    <p className="text-[var(--sec)] text-sm">{text}</p>
                                </div>
                            )}
                        </div>
                        <p className="text-[var(--lk)] text-sm">*/</p>
                    </Content>
               }  
               {currentTab === "work" &&
                    <div className="border-t border-[var(--bd)] py-10 px-5 flex flex-col gap-[84px]">
                        <WorkHistory 
                            title="Upwork Top-Rated Developer"
                            description="On Upwork, I have a proven track record of delivering high-quality projects on time, earning top client ratings and long-term collaborations. I focus on clean code, performance optimization, and scalable solutions to meet client goals efficiently. My Upwork success reflects my commitment to reliable, production-ready solutions and client satisfaction."
                            jobDesc="Web and Mobile Freelance Developer"
                            UpperNode={<FaSquareUpwork size={30} color="var(--gr)" />}
                        />
                        <WorkHistory 
                            title=""
                            jobDesc=""
                            duration={200}
                            description="I worked at Coders Globe as a Mobile Developer and Tester for 4 months. During this time, I contributed to developing native Android apps using Java and Kotlin. I was also responsible for testing and quality assurance, ensuring apps were bug-free and user-friendly. This experience strengthened my skills in mobile development, debugging, and cross-platform app workflows."
                            UpperNode={<div className="flex flex-col gap-3">
                                    <img src="/images/coders.svg" />
                                    <p className="text-base font-medium text-[var(--sec)]">Mobile Developer and Tester</p>
                                </div>
                            }
                        />
                    </div>
               }
            </div>
            <div className="lg:border-r border-[var(--bd)] lg:border-t-none border-t col-span-full lg:col-span-1 lg:block  grid grid-cols-1 sm:grid-cols-[minmax(0,5fr)_minmax(0,5fr)]">
                <div className="lg:border-none border-r border-[var(--bd)]">
                    <div className="border-b border-[var(--bd)]  lg:border-t-none">
                        <p className="w-fit lg:border-r border-[var(--bd)] px-5 py-2 text-sm text-[var(--sec)]">Web Development Language</p>
                    </div>
                    <div className="px-5 flex flex-col gap-5 py-10"> 
                        {webStacks.map((stack: any) => 
                            <div className="flex flex-row gap-5 items-center">
                                <div className="w-[24px] h-[24px]">
                                    <stack.Icon size={24} color={stack.color} />
                                </div>
                                <p className="text-[var(--lk)] text-sm">{stack.text}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div className="border-b border-t border-[var(--bd)]">
                        <p className="w-fit lg:border-r border-[var(--bd)] px-5 py-2 text-sm text-[var(--sec)]">Mobile Development Language</p>
                    </div>
                    <div className="px-5 flex flex-col gap-5 py-10"> 
                        {mobStacks.map((stack: any) => 
                            <div className="flex flex-row gap-5 items-center">
                                <div className="w-[24px] h-[24px] flex-shrink-0">
                                    <stack.Icon size={24} color={stack.color} />
                                </div>
                                <div className="min-w-0"> 
                                    <p className="text-[var(--lk)] text-sm break-words">{stack.text}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}