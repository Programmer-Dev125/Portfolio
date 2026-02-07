import { useEffect, useRef, useState } from "react";

type Props = {
    Node: (...args: any) => React.ReactNode,
    duration?: number,
    final: string
}

export default function TextGenerator( { Node, final, duration=50 }: Props){

    const [value, setValue] = useState("");
    const indexRef = useRef<number>(0);
    const valueRef = useRef<string>("");
    const timer = useRef<any>(null);


    useEffect(() => {

        const handler = () => {
            timer.current = setTimeout(() => {
                if(indexRef.current >= final.length) {
                    clearTimeout(timer.current);
                    return;
                }   
                
                valueRef.current = valueRef.current + final[indexRef.current];
                indexRef.current += 1;
                setValue(valueRef.current);
                handler();

            }, duration);
        };

        handler();
        
        return () => {
            if(timer.current) clearTimeout(timer.current);
        }

    }, []);

    return <Node value={value} />

}