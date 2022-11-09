import React from "react"
import Link from "next/link"
import NextImage from "../image"

const Card = ({ article }) => {

  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div className="p-10 hidden md:block">
        <div className="relative">
          <div className="absolute w-full h-full bg-gradient-to-t from-black/60 rounded-lg"></div>
          <div className="w-full h-full">
            <NextImage image={article.attributes.image} className="rounded-lg" />
          </div>
          <div className="w-full family-bold group">
            <p id="category" className="text-lg -rotate-90 tracking-widest absolute top-10 uppercase text-white underline underline-offset-[5px] decoration-2 decoration-green-400">
              {article.attributes.category.data.attributes.name}
            </p>
            <p id="title" className="text-white text-6xl absolute bottom-5 left-10 group-hover:underline decoration-green-400 decoration-[3px] underline-offset-[3px]">
              {article.attributes.title}
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 block md:hidden">
        <div className="relative">
          <div className="w-full h-full">
            <NextImage image={article.attributes.image} className="rounded-lg object-cover" />
          </div>
          <div className="w-full family-bold group">
            <p id="category" className="text-sm -rotate-90 tracking-widest absolute top-10 uppercase text-white underline underline-offset-[5px] decoration-2 decoration-green-400">
              {article.attributes.category.data.attributes.name}
            </p>
            <p id="title" className="text-black text-2xl mt-4 w-full group-hover:underline decoration-green-400 decoration-[2px] underline-offset-[3px]">
              {article.attributes.title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
