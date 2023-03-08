"use client"
import { RandomFox } from "@/components/RandomFox"
import { MouseEventHandler, useState } from "react";

const randomN = (): number => Math.floor(Math.random() * 122) + 1;

type ImageItem = {
  id: string
  url: string
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

  const [Images, setImages] = useState<Array<ImageItem>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {


    const newImage: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomN()}.jpg`
    }
    setImages([...Images, newImage])
  }

  return (
    <main>
      <div className="mt-4 w-2/4 mx-auto text-center">
        <h1 className={H1Class}>Random Foxes</h1>
        <button className={ButtonClass} onClick={addNewFox}>Add new fox</button>
          {Images.map(({id,url}) => (
            <div className="p-4 h-auto" key={id}>
              <RandomFox 
                src={url} 
                className="mx-auto rounded-lg h-60 w-60" 
                alt="Random Fox"
              />
            </div>
          ))}
      </div>
    </main>
  )
}
