import React from "react";
import Link from "next/link";
import NextImage from "./image";

const CardInfo = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div className="pb-10">
        <div>
          <div className="w-full h-full">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="w-full group flex items-center justify-between">
            <div
              id="category"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "sideways",
              }}
              className="-rotate-180 family-bold text-base tracking-widest uppercase text-white underline underline-offset-[5px] decoration-2 decoration-[#FEE715FF]"
            >
              {article.attributes.category.data.attributes.name}
            </div>
            <div className="ml-5">
              <p
                id="title"
                className="text-white text-3xl mt-4 w-full group-hover:underline decoration-[#FEE715FF] decoration-[2px] underline-offset-[3px]"
              >
                {article.attributes.title}
              </p>
              <p className="text-gray-400 mt-5">{article.attributes.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardInfo;
