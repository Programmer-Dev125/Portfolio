import { TextGenerator, Carousel } from "../../components/custom";
import { Code } from "../../components/ui";
import { images } from "../../data/uiData";

export default function Home(){
    

    return (
        <>
            <div className="w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] h-full mx-auto w900_g1 grid grid-cols-[5fr_5fr] py-10">
                <div className="flex flex-col gap-[80px] justify-center">
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-sm sm:text-base lg:text-lg text-white">Hi all. I am</p>
                        <p className="text-base sm:text-xl md:text-3xl lg:text-6xl text-white font-semibold">Abdul Ahad</p>
                        <TextGenerator 
                            final="Web and Mobile Developer."
                            duration={80}
                            Node={({value}) => <p className="sm:text-xl md:text-3xl text-[var(--pp)] font-semibold">{`> ${value}`}</p>}
                        />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <div className="flex flex-col gap-[3px]">
                            <p className="text-[var(--lk)] text-sm sm:text-base">// Please Check my Projects</p>
                            <p className="text-[var(--lk)] text-sm sm:text-base">// find my profile on Github:</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Code
                                varName="gitUrl"
                                varValue="https://github.com/Programmer-Dev125"
                            />
                            <Code
                                varName="linkedinUrl"
                                varValue="https://www.linkedin.com/in/abdul-ahad-dar-6146213a8/"
                            />
                            <Code
                                varName="upworkUrl"
                                varValue="https://www.upwork.com/freelancers/~01d2adc5e24022f07e"
                            />
                        </div>
                    </div>
                </div>
                <div className="w900_center justify-self-end">
                    <div className="min-w-[300px] h-[700px] bg-black rounded-xl py-2 relative">
                        <div className="bg-white w-[95%] mx-auto h-full rounded-xl relative">
                            <div 
                                className="absolute top-0 flex justify-center items-center w-full py-2"
                                style={{
                                    zIndex: 2
                                }}
                            >
                                <div className="w-[20px] h-[20px] flex justify-center items-center bg-[#cccccc] rounded-full">
                                    <div className="w-[10px] h-[10px] bg-black rounded-full" />
                                </div>
                            </div>
                            <Carousel
                                ln={images.length - 1}
                                width={300 * 0.95}
                                className="relative top-0"
                            >
                                {images.map((img: string, index: number) => 
                                    <img 
                                        key={index}
                                        className="h-full"
                                        style={{
                                            minWidth: 300 * 0.95,
                                        }}
                                        src={img}
                                        alt="app-images"
                                    />
                                )}
                            </Carousel>
                            <div className="absolute bottom-0 w-full bg-black flex justify-center items-center py-2">
                                <div className="w-[20px] h-[20px] bg-white rounded-full" />
                            </div>
                        </div>
                        <div className="absolute top-[70px] right-[-5px] flex flex-col gap-5">
                            <div className="w-[10px] h-[100px] bg-black rounded-full" />
                            <div className="w-[10px] h-[50px] bg-black rounded-full" />
                        </div>
                    </div>
                </div>              
            </div>
        </>
    )
}