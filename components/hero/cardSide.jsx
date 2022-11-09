import React from "react"
import Link from "next/link"
import NextImage from "../image"

const CardSide = ({ article }) => {

  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div className="pb-10">
        <div className="relative">
          <div className="w-full h-full">
            <NextImage image={article.attributes.image} className="rounded-lg object-cover" />
          </div>
          <div className="w-full family-bold group">
            <p id="category" className="teext-sm md:text-base -rotate-90 tracking-widest absolute top-10 uppercase text-white underline underline-offset-[5px] decoration-2 decoration-green-400">
              {article.attributes.category.data.attributes.name}
            </p>
            <p id="title" className="text-black text-2xl md:text-3xl mt-4 w-full group-hover:underline decoration-green-400 decoration-[2px] underline-offset-[3px]">
              {article.attributes.title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardSide
