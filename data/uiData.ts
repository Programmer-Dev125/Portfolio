import { MdEmail } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { IoLogoLinkedin, IoHomeSharp } from "react-icons/io5";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiKotlin, SiExpress } from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import { RiContactsBook3Fill } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";

export const goLink = (route: string, failure?: (props?: any) => void) => {
    try{
        window.open(route, "_blank");
    }catch(err: any){
        failure?.(err.message);
    }
}

export const openEmail = (failure?: (message?: string) => void) => {
    try{
        window.open("mailto:abdulahaddar077@gmail.com", "_self", "popup=true");
    }catch(err: any) {
        failure?.(err?.message);
    }
} 


export const copyText = (value: string) => {
    window.navigator.clipboard.writeText(value);
}

export const images = [
    "/images/pic-1.png",
    "/images/pic-2.png",
    "/images/pic-3.png",
    "/images/pic-4.png",
    "/images/pic-5.png",
    "/images/pic-6.png",
    "/images/pic-7.png",
    "/images/pic-8.png",
    "/images/pic-9.png",
    "/images/pic-10.png",
    "/images/pic-11.png",
    "/images/pic-12.png",
]

export const contacts = [
    {
        id: 1,
        text: "Email",
        Icon: MdEmail,
        color: "var(--lg-red)",
        desc: "ahadahaddar007@gmail.com",
        link: "email",
    },
    {
        id: 2,
        text: "Phone",
        Icon: BsPhoneFill,
        color: "var(--or)",
        desc: "+92 305-9024466",
        link: "copy"
    },
    {
        id: 3,
        text: "Linkedin",
        Icon: IoLogoLinkedin,
        color: "var(--pp)",
        desc: "https://www.linkedin.com/in/abdul-ahad-dar-6146213a8/",
        link: "route"
    },
    {
        id: 4,
        text: "Upwork",
        Icon: FaSquareUpwork,
        color: "var(--gr)",
        desc: "https://www.upwork.com/freelancers/~01d2adc5e24022f07e",
        link: "route"
    },
]

export const bio = [
    "I’m Abdul Ahad, a Web and Mobile Application Developer with 3+ years of hands-on experience.",
    "I specialize in MERN Stack development, building scalable, production-ready web applications.",
    "I work extensively with React.js, focusing on component-driven architecture and state management.",
    "On the backend, I design and implement RESTful APIs using Node.js and Express.js.",
    "I use MongoDB with optimized schemas, indexing, and aggregation pipelines.",
    "I develop native Android applications using Java and Kotlin, following MVVM architecture.",
    "I also build cross-platform mobile apps with React Native, ensuring performance parity with native apps.",
    "I have experience with authentication, authorization, and role-based access control.",
    "I follow best practices for code quality, performance optimization, and security.",
    "I’m comfortable with Git, CI/CD workflows, and production deployments."
]


export const webStacks = [
    {
        id: 1,
        text: "React",
        Icon: FaReact,
        color: "#0b91ffff"
    },
    {
        id: 2,
        text: "NodeJS",
        Icon: FaNodeJs,
        color: "var(--gr)"
    },
    {
        id: 3,
        text: "Express",
        Icon: SiExpress,
        color: "var(--sec)"
    },
    {
        id: 4,
        text: "HTML",
        Icon: FaHtml5,
        color: "var(--or)"
    },
    {
        id: 5,
        text: "CSS",
        Icon: FaCss3Alt,
        color: "#0b91ffff"
    },
]

export const mobStacks = [
    {
        id: 1,
        text: "Android/AndroidX Sdks",
        Icon: AiFillAndroid,
        color: "#7CB342"
    },
    {
        id: 2,
        text: "Java",
        Icon: FaJava,
        color: "var(--sec)"
    },
    {
        id: 3,
        text: "Kotlin",
        Icon: SiKotlin,
        color: "var(--pp)"
    },
    {
        id: 4,
        text: "React Native",
        Icon: FaReact,
        color: "#0b91ffff"
    },
]

export const projectBar = [
    {
        id: 1,
        Icon: FaReact,
        color: "#0b91ffff",
        text: "MERN Stack"
    },
    {
        id: 2,
        Icon: AiFillAndroid,
        color: "#7CB342",
        text: "Android/AndroidX Sdks"
    },
    {
        id: 3,
        Icon: FaReact,
        color: "#0b91ffff",
        text: "React Native CLI"
    },
]

export const mernProject = [
    {   
        id: 1,
        src: "/images/travel.png",
        title: "Project 1",
        shortDesc: "// Mern Stack App",
        desc: "I built a full-featured travel website using the MERN Stack (MongoDB, Express.js, React, and Node.js) to deliver a fast and seamless user experience. The platform includes dynamic destination listings, secure user authentication, and responsive design powered by React. With a robust Node.js and Express backend and MongoDB for scalable data management, the site ensures performance, reliability, and smooth real-time interactions.",
        projectTitle: "Travel Website",
        link: "https://fly-with-us-seven.vercel.app/",
        color:"var(--gr)",
        Icon: FaReact
    }
]


export const nativeProject = [
    {
        id: 2,
        src: "/images/pic-12.png",
        title: "Project 1",
        shortDesc: "// Native Java App",
        desc: "I developed a native Android chat application using Java and Android SDKs, with both the frontend and backend fully implemented in Java. The system is powered by a three-server architecture, where one server handles real-time live messaging with low latency. A second server manages offline message storage and synchronization to ensure reliable message delivery. The third server is dedicated to secure and efficient media transfer, supporting images, audio, and files without impacting chat performance.",
        projectTitle: "Android Chat App",
        link: "https://github.com/Programmer-Dev125/Android-Chat-App",
        color:"var(--lg-red)",
        Icon: AiFillAndroid
    }
]

export const reactNativeProject = [
    {
        id: 3,
        src: "/images/pic-6.png",
        title: "Project 1",
        shortDesc: "// React Native Cli",
        desc: "I built Makkays Assist, a full-stack mobile application developed using React Native CLI for high performance and flexibility. The app integrates custom native code (Android/iOS) directly into React Native, enabling access to platform-specific features beyond standard JavaScript APIs. This hybrid approach delivers a smooth user experience while maintaining native-level performance. The backend seamlessly supports the app with secure APIs and scalable data handling.",
        projectTitle: "Makkays Full Stack Application",
        link: "https://github.com/Programmer-Dev125",
        color:"var(--lg-red)",
        Icon: FaReact   
    }
]


export const mobileMenu = [
    {
        id: 1,
        Icon: IoHomeSharp,
        color: "var(--or)",
        text: "Home",
        link: "home"
    },
    {
        id: 2,
        Icon: RiContactsBook3Fill,
        color: "var(--lg-red)",
        text: "About",
        link: "about"
    },
    {
        id: 3,
        Icon: BiSolidDashboard,
        color: "var(--pp)",
        text: "Projects",
        link: "projects"
    },
]