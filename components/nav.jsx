import React from "react";
import Link from "next/link";

const Nav = ({ categories }) => {
  return (
    <div className="p-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="w-32 h-32" />
          </Link>
          <div className="font-semibold">
            <h2>The</h2>
            <h2>Tech</h2>
            <h2>Enthusiast</h2>
          </div>
        </div>
        <div>hii</div>
      </nav>
      <div className="bg-gray-100">
        <ul className="inline-flex p-3">
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <Link href={`/category/${category.attributes.slug}`} className="mx-2 capitalize font-semibold">
                  {category.attributes.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
