import React, { useState } from "react";
import Link from "next/link";
import {
  ImFacebook2,
  ImInstagram,
  ImTwitter,
  ImYoutube,
  ImLinkedin,
} from "react-icons/im";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TickerTape } from "react-ts-tradingview-widgets";
const TickerSymbols = [
  {
    proName: "NASDAQ:AAPL",
    title: "APPLE",
  },
  {
    proName: "NASDAQ:META",
    title: "META",
  },
  {
    proName: "NASDAQ:TSLA",
    title: "TESLA",
  },
  {
    proName: "NASDAQ:AMZN",
    title: "AMAZON",
  },
  {
    proName: "NASDAQ:GOOGL",
    title: "GOOGLE",
  },
  {
    proName: "NASDAQ:MSFT",
    title: "MICROSOFT",
  },
  {
    proName: "NASDAQ:AMD",
    title: "AMD",
  },
  {
    proName: "NASDAQ:NVDA",
    title: "NVIDIA",
  },
  {
    proName: "NASDAQ:NFLX",
    title: "NETFLIX",
  },
  {
    proName: "NYSE:IBM",
    title: "IBM",
  },
  {
    proName: "NASDAQ:INTC",
    title: "INTEL",
  },
  {
    proName: "NYSE:CRM",
    title: "SALESFORCE",
  },
];

const Nav = ({ categories }) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <div className="h-[70px] md:h-12 overflow-hidden">
        <TickerTape colorTheme="light" symbols={TickerSymbols}></TickerTape>
      </div>
      <nav className="hidden md:flex max-w-[70%] mx-auto items-center justify-between p-5">
        <div className="flex items-center">
          <button onClick={onOpenModal}>
            <HiBars3BottomRight className="w-12 h-12" />
          </button>
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="w-40" />
          </Link>
        </div>
        <div>
          <ul className="inline-flex p-3">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link
                    href={`/category/${category.attributes.slug}`}
                    className="mx-2 uppercase font-semibold hover:text-green-400"
                  >
                    {category.attributes.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="inline-flex gap-4">
          <Link href="/">
            <ImFacebook2 className="w-6 h-6 hover:text-green-400" />
          </Link>
          <Link href="/">
            <ImInstagram className="w-6 h-6 hover:text-green-400" />
          </Link>
          <Link href="/">
            <ImTwitter className="w-6 h-6 hover:text-green-400" />
          </Link>
          <Link href="/">
            <ImYoutube className="w-6 h-6 hover:text-green-400" />
          </Link>
          <Link href="/">
            <ImLinkedin className="w-6 h-6 hover:text-green-400" />
          </Link>
        </div>
        <Modal open={open} onClose={onCloseModal} center>
          <div className="p-20 bg-green-100">
            <ul className="flex flex-col family-bold text-4xl md:text-6xl md:w-[800px] w-[200px]">
              {categories.map((category) => {
                return (
                  <li key={category.id} className="hover:text-green-400 mb-6">
                    <Link
                      href={`/category/${category.attributes.slug}`}
                      className="uppercase font-semibold tracking-wider"
                    >
                      {category.attributes.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Modal>
      </nav>
      <nav className="p-5 block md:hidden">
        <div className="flex items-center">
          <button onClick={onOpenModal}>
            <HiBars3BottomRight className="w-10 h-10" />
          </button>
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="w-36" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
