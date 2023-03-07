"use client"
import { RandomFox } from "@/components/RandomFox"
import { useState } from "react";

const randomN = (): number => Math.floor(Math.random() * 122) + 1;

type ImageItem = {
  id: string
  url: string
}

// generate simple unique id
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )
}


export default function Home() {

  const [Images, setImages] = useState<Array<ImageItem>>([
    {id: generateId(), url:`https://randomfox.ca/images/${randomN()}.jpg`},
    {id: generateId(), url:`https://randomfox.ca/images/${randomN()}.jpg`},
    {id: generateId(), url:`https://randomfox.ca/images/${randomN()}.jpg`},
    {id: generateId(), url:`https://randomfox.ca/images/${randomN()}.jpg`},
  ])

  return (
    <main>
      <div>
          {Images.map(({id,url}) => (
            <div className="p-4" key={id}>
              <RandomFox image={url}/>
            </div>
          ))}
      </div>
    </main>
  )
}
