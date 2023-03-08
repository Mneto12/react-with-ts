import { useRef, useEffect, useState, ImgHTMLAttributes } from 'react';

type props = {
    src: string
    onLazyLoad?: (img: HTMLElement) => void
}

type Props = ImgHTMLAttributes<HTMLImageElement> & props

export const RandomFox = ({
    src,
    onLazyLoad,
    ...imgpProps
}: Props): JSX.Element => {

    const node = useRef<HTMLImageElement>(null)
    const [Currentsrc, setCurrentsrc] = useState("https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif")
    const [isLazyLoaded, setIsLazyLoaded] = useState(false);

    useEffect(() => {

        if (isLazyLoaded) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting || !node.current) {
                    return;
                }
                setCurrentsrc(src)
                observer.disconnect();
                setIsLazyLoaded(true);

                if (typeof onLazyLoad === "function") {
                    onLazyLoad(node.current);
                }
            })
        })

        if (node.current) {
            observer.observe(node.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [src, onLazyLoad, isLazyLoaded])

    
    return <img 
    ref={node}
    src={Currentsrc}
    {...imgpProps}
    />
};