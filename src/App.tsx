import { useEffect, useRef, useState } from "react";
import {Card, Content} from "../components/ui";
import Menu from "./Menu";
import useDimensions from "../hooks/useDimensions";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Projects from "./pages/Projects/Projects";
import useObserver from "../hooks/useObserver";

export default function App(){

    const [current, setCurrent] = useState("home");
    const menuRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);
    const { screenWidth, screenHeight } = useDimensions({})
    const menuDimensions = useObserver({ref: menuRef});
    const footerDimensions = useObserver({ref: footerRef})

    return(
        <main>
            <Card
                positions={{
                    ...(current === "about" || current === "projects") ? {
                        left: screenWidth / 7,
                        bottom: 30
                    } : {
                        top: menuDimensions.height + (screenWidth <= 900 ? screenHeight / 1.5 : (screenWidth / 5) / 2),
                        right: screenWidth / 4,
                    }
                }}
                upperCircle={{
                    width: 300,
                    height: 300,
                }}
                belowCircle={{
                    width: 100,
                    height: 100
                }}
            >
                <header ref={menuRef}>
                    <Menu current={current} onChange={(tab: string) => setCurrent(tab)} />
                </header>
                {
                    current === "home" 
                        && 
                    <Content className="content-center" offset={footerDimensions.height}>
                        <Home />
                    </Content>
                }
                {
                    current === "about" 
                        && 
                    <Content offset={footerDimensions.height}> 
                        <About />
                    </Content>
                }
                {
                    current === "projects" 
                        && 
                    <Content offset={footerDimensions.height}>
                        <Projects />
                    </Content>
                }
                <footer ref={footerRef} className="absolute bottom-0 w-full">
                    <Footer />
                </footer>
            </Card>
        </main>  
    )
}