import { useRef, useEffect, useState, ImgHTMLAttributes } from 'react';

type props = {
    src: string
}

type Props = ImgHTMLAttributes<HTMLImageElement> & props

export const RandomFox = ({src, ...imgpProps}: Props): JSX.Element => {

    const node = useRef<HTMLImageElement>(null)
    const [Currentsrc, setCurrentsrc] = useState("https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif")

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting || !node.current) {
                    return;
                }
                setCurrentsrc(src)
            })
        })

        if (node.current) {
            observer.observe(node.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [src])

    
    return <img 
    ref={node}
    src={Currentsrc}
    {...imgpProps}
    />
};