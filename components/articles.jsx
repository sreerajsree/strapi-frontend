import React from "react";
import Card from "./hero/card";
import CardSide from "./hero/cardSide";
import CardBelow from "./latest/cardBelow";
import CardBelow2 from "./tech/cardBelow2";
import CardFull from "./latest/cardFull";
import CardFull2 from "./tech/cardFull2";
import CardInfo from "./tech/cardInfo";

const Articles = ({ articles }) => {
  const latestArticle = articles.slice(-1);
  const leftArticles = articles.slice(-2, -1);
  const leftArticles2 = articles.slice(-3, -2);
  const rightArticles = articles.slice(-7, -1);
  const Trending = articles.filter((value) => {
    return value.attributes.isTrending === true;
  });
  const Tech = articles.filter((value) => {
    return value.attributes.category.data.attributes.name === "Tech";
  });
  const TechPopular = articles.filter((value) => {
    return value.attributes.isPopular === true;
  });
  const trendingData = Trending.slice(-6).reverse();
  const techDataFirst = Tech.slice(-1).reverse();
  const techData = Tech.slice(-4, -1).reverse();
  const techPopular = TechPopular.slice(-5).reverse();
  return (
    <div>
      <div className="grid-cols-1 grid md:grid-cols-3 gap-4 w-full md:max-w-[70%] mx-auto">
        <div className="col-span-2">
          {latestArticle.map((article, i) => {
            return (
              <Card
                article={article}
                key={`article__left__${article.attributes.slug}`}
              />
            );
          })}
        </div>
        <div className="p-5 md:p-10">
          {leftArticles.map((article, i) => {
            return (
              <CardSide
                article={article}
                key={`article__left__${article.attributes.slug}`}
              />
            );
          })}
          {leftArticles2.map((article, i) => {
            return (
              <CardSide
                article={article}
                key={`article__left__${article.attributes.slug}`}
              />
            );
          })}
        </div>
      </div>
      <section className="section bubble bg-[#2BAE66FF]" id="two">
        <div className="block md:hidden italic font-bold text-6xl opacity-70 family-bold tracking-widest text-white mb-10">
          Latest
        </div>
        <div className="w-[90%] md:max-w-[70%] mx-auto">
          <div className="grid-cols-1 grid md:grid-cols-2 gap-10 relative">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
              {rightArticles.map((article, i) => {
                return (
                  <CardBelow
                    article={article}
                    key={`article__left__${article.attributes.slug}`}
                  />
                );
              })}
            </div>
            <div className="relative">
              <div className="sticky top-0">
                <h2 className="font-bold text-7xl md:text-8xl absolute text-[#2BAE66FF] opacity-40 md:right-20">
                  Trending
                </h2>
                <div className="bg-[#FCF6F5FF] rounded-lg max-w-xl mx-auto">
                  <ul className="p-8 md:p-12">
                    <li>
                      {trendingData.map((article, i) => {
                        return (
                          <CardFull
                            index={i + 1}
                            article={article}
                            key={`article__left__${article.attributes.slug}`}
                          />
                        );
                      })}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block italic absolute top-[50%] right-10 -rotate-90 font-bold text-9xl opacity-70 family-bold tracking-widest text-white">
            Latest
          </div>
        </div>
      </section>
      <section className="bg-[#101820FF] relative section">
        <div className="block md:hidden italic text-6xl opacity-70 family-bold tracking-widest text-white mb-10">
          Tech
        </div>
        <div className="w-[90%] md:max-w-[70%] mx-auto">
          <div className="grid-cols-1 grid md:grid-cols-2 gap-10 relative">
            <div className="grid grid-cols-1">
              {techDataFirst.map((article, i) => {
                return (
                  <CardInfo
                    article={article}
                    key={`article__left__${article.attributes.slug}`}
                  />
                );
              })}
              <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
                {techData.map((article, i) => {
                  return (
                    <CardBelow2
                      article={article}
                      key={`article__left__${article.attributes.slug}`}
                    />
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="sticky top-0">
                <h2 className="font-bold text-8xl absolute text-[#101820FF] opacity-40 right-0 md:right-20">
                  Popular
                </h2>
                <div className="bg-[#FEE715FF] rounded-lg max-w-xl mx-auto">
                  <ul className="p-8 md:p-12">
                    <li>
                      {techPopular.map((article, i) => {
                        return (
                          <CardFull2
                            index={i + 1}
                            article={article}
                            key={`article__left__${article.attributes.slug}`}
                          />
                        );
                      })}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block italic absolute top-[50%] right-10 -rotate-90 font-bold text-9xl opacity-70 family-bold tracking-widest text-white">
          Tech
        </div>
      </section>
    </div>
  );
};

export default Articles;
