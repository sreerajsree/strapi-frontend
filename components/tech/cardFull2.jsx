import React from "react";
import Link from "next/link";
import Moment from "react-moment";

const CardFull2 = ({ article, index }) => {
  console.log(article);
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div className="group w-[80%]">
        <div className="relative flex items-baseline">
          <div className="w-6 h-6 mr-3 text-sm items-center text-center justify-center flex rounded-full text-[#FCF6F5FF] bg-[#101820FF]">
            {index}
          </div>
          <div className="w-full family-playfair group border-b-2 mt-5 border-[#101820FF]">
            <h2 className="font-bold text-xl group-hover:text-[#F65058FF]">
              {article.attributes.title}
            </h2>
            <div className="family-bold my-4 flex justify-between">
              <p className="tracking-widest text-[#F65058FF] underline decoration-black underline-offset-2 decoration-[1px]">
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

export default CardFull2;
