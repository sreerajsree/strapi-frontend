import React from "react";
import Link from "next/link";
import NextImage from "../image";
import Moment from "react-moment";

const CardBelow = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div className="lg:flex mb-5 bg-black p-3 rounded-lg items-center">
        <div className="flex flex-col justify-between py-6 lg:mx-6 w-2/3">
          <div className="text-xl font-semibold text-white hover:underline decoration-green-400 underline-offset-[3px]">
            {article.attributes.title}
          </div>
          <p className="text-white family-bold tracking-widest py-4 underline underline-offset-[3px] decoration-green-400">{article.attributes.category.data.attributes.name}</p>
          <span className="text-sm text-gray-500">
            <Moment format="MMM Do YYYY">
              {article.attributes.published_at}
            </Moment>
          </span>
        </div>
        <div className="object-cover h-full w-1/3">
          <NextImage image={article.attributes.image} />
        </div>
      </div>
    </Link>
  );
};

export default CardBelow;
