import React from "react";
import Link from "next/link";
import Moment from "react-moment";

const CardFull = ({ article, index }) => {
  console.log(article);
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div className="group w-full md:w-[80%]">
        <div className="relative flex items-baseline">
          <div className="w-6 h-6 mr-3 text-sm items-center text-center justify-center flex rounded-full text-[#FCF6F5FF] bg-[#2BAE66FF]">
            {index}
          </div>
          <div className="w-full family-playfair group border-b-2 mt-5">
            <h2 className="font-bold text-xl group-hover:text-[#2BAE66FF]">
              {article.attributes.title}
            </h2>
            <div className="family-bold my-4 flex justify-between">
              <p className="tracking-widest text-[#2BAE66FF] underline decoration-black underline-offset-2 decoration-[1px]">
                {article.attributes.category.data.attributes.name}
              </p>
              <p>
                <Moment format="MMM D">
                  {article.attributes.published_at}
                </Moment>
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </Link>
  );
};

export default CardFull;
