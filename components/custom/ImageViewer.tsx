type Props = {
    src: string,
    height: number,
    imgClassName?: string,
    divClassName?: string
}

export default function ImageViewer( { src, height, imgClassName, divClassName }: Props ){
    return(
        <div 
            style={{height, overflowY: "auto"}}
            className={`scroll-hidden ${divClassName || ""}`} 
        > 
            <img 
                src={src}
                className={`w-full ${imgClassName || ""}`}
            />
        </div>
    )
}