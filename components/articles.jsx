import React from "react";
import Card from "./card";
import CardSide from "./cardSide";
import CardBelow from "./cardBelow";
import CardFull from "./cardFull";

const Articles = ({ articles }) => {
  const latestArticle = articles.slice(-1);
  const leftArticles = articles.slice(-2, -1);
  const leftArticles2 = articles.slice(-3, -2);
  const rightArticles = articles.slice(-6, -1);
  const Trending = articles.filter((value) => {
    return value.attributes.isTrending === true;
  });
  const trendingData = Trending.slice(-5).reverse()
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 max-w-[70%] mx-auto">
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
        <div className="p-10">
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
        <div className="max-w-[70%] mx-auto">
          <div className="grid grid-cols-2 gap-10 relative">
            <div>
              {rightArticles.map((article, i) => {
                return (
                  <CardBelow
                    article={article}
                    key={`article__left__${article.attributes.slug}`}
                  />
                );
              })}
            </div>
            <div className="relative p-5">
              <div className="sticky top-10">
              <h2 className="font-bold text-8xl absolute text-[#2BAE66FF] opacity-40 right-0">
                Trending
              </h2>
              <div className="bg-[#FCF6F5FF] rounded-lg">
                <ul className="p-12">
                  <li>
                    {trendingData.map((article, i) => {
                      return (
                        <CardFull
                          index={i+1}
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
          <div className="italic absolute top-[50%] right-10 -rotate-90 font-bold text-9xl opacity-70 family-bold tracking-widest text-white">
            Latest
          </div>
        </div>
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <svg viewBox="0 0 1920 240" xmlns="http://www.w3.org/2000/svg">
        <rect
          width="1920"
          height="240"
          fill="#2BAE66FF
      "
        />
        <path
          d="M1920,240C1618.5,242.83333333333334,302.5,251.83333333333334,0,240C-302.5,228.16666666666666,69.66666666666666,175,105,169C140.33333333333334,163,176.66666666666666,200.16666666666666,212,204C247.33333333333334,207.83333333333334,281.8333333333333,191.83333333333334,317,192C352.1666666666667,192.16666666666666,387.3333333333333,207.83333333333334,423,205C458.6666666666667,202.16666666666666,495.8333333333333,170.33333333333334,531,175C566.1666666666666,179.66666666666666,598.5,223.16666666666666,634,233C669.5,242.83333333333334,708.1666666666666,236.66666666666666,744,234C779.8333333333334,231.33333333333334,813.3333333333334,221.5,849,217C884.6666666666666,212.5,922.1666666666666,208,958,207C993.8333333333334,206,1028.6666666666667,208.33333333333334,1064,211C1099.3333333333333,213.66666666666666,1134.3333333333333,226.5,1170,223C1205.6666666666667,219.5,1242,198,1278,190C1314,182,1350.6666666666667,169.83333333333334,1386,175C1421.3333333333333,180.16666666666666,1454.6666666666667,222.16666666666666,1490,221C1525.3333333333333,219.83333333333334,1562.5,178.16666666666666,1598,168C1633.5,157.83333333333334,1667.8333333333333,150.83333333333334,1703,160C1738.1666666666667,169.16666666666666,1772.8333333333333,209.66666666666666,1809,223C1845.1666666666667,236.33333333333334,2221.5,237.16666666666666,1920,240C1618.5,242.83333333333334,302.5,251.83333333333334,0,240"
          fill="#000000"
        />
      </svg>
    </div>
  );
};

export default Articles;
