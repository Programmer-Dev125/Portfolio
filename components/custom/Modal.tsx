import { createPortal } from "react-dom"
import useDimensions from "../../hooks/useDimensions"

type Props = {
    open: boolean,
    children: React.ReactNode,
    parentClassName?: string,
    cardStyle?: string,
    onClose: () => void
}
export default function Modal( { open, children, parentClassName, cardStyle, onClose } : Props ){

    const { screenWidth, screenHeight } = useDimensions({});

    if(!open) return null;

    return createPortal(
        <section 
            onClick={onClose}
            className={`fixed top-0 left-0 w-full h-screen ${open ? "pointer-events-auto" : "pointer-events-none"} ${parentClassName || ""}`}
            style={{
                zIndex: 98,
                height: screenHeight, 
                width: screenWidth
            }}
        >
            <div onClick={(e) => e.stopPropagation()} style={{zIndex: 2}} className={`${cardStyle || ""}`}>
                {children}
            </div>
        </section>,
        document.body
    )   
}