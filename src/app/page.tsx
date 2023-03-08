"use client"
import { RandomFox } from "@/components/RandomFox"
import { MouseEventHandler, useState } from "react";
import { IImageItem } from "@/types/ramdonFox";
import { random } from "lodash";

const randomN = () => random(1,122)

// Generate a funtion that clean the setImages usestate when a button is clicked
const cleanImages = (setImages: React.Dispatch<React.SetStateAction<IImageItem[]>>) => {
  setImages([])
}

const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )
}

const ButtonClass: string = "focus:outline-none text-white bg-purple-700 mt-4 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"

const H1Class: string = "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"

export default function Home() {

  const [Images, setImages] = useState<Array<IImageItem>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {

    const newImage: IImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomN()}.jpg`
    }
    setImages([...Images, newImage])
  }

  return (
    <main>
      <div className="mt-4 w-2/4 mx-auto text-center">
        <h1 className={H1Class}>Random Foxes</h1>
        <div className="flex justify-center gap-2">
          <button className={ButtonClass} onClick={() => cleanImages(setImages)}>Clean images</button>
          <button className={ButtonClass} onClick={addNewFox}>Add new fox</button>
        </div>
          {Images.map(({id,url}, index) => (
            <div className="p-4 h-auto" key={id}>
              <RandomFox 
                src={url} 
                className="mx-auto rounded-full w-80 h-80" 
                alt="Random Fox"
                onLazyLoad={(img) => {
                  console.log(`Image #${index + 1} cargada. Nodo:`, img);
                }}
              />
            </div>
          ))}
      </div>
    </main>
  )
}
