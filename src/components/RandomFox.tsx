type props = {
    image: string
}

export const RandomFox = ({image}: props): JSX.Element => {

    return <img 
    src={image}
    className="mx-auto" 
    alt="Random Fox" 
    />
};