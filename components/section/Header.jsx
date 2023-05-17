import { useState } from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col relative items-center justify-center"
        id="header"
      >
        <motion.div
          initial={{ scale: 1.5 }}
          whileInView={{ scale: 1 }}
          className="w-full min-h-screen absolute top-0  "
        >
          <Image
            src="/img/image-5.JPG"
            alt=""
            width={350}
            height={800}
            style={{ width: "auto", height: "auto" }}
            layout="responsive"
            objectFit="cover"
            objectPosition="top"
            priority
          />
        </motion.div>
        <div className="w-full h-screen bg-gradient-to-tr from-black via-black/60 to-transparent absolute top-0 z-10"></div>
        <div className="w-full h-full relative z-20 flex flex-col items-center space-y-8 justify-between">
          <h1 className="text-zinc-300 font-[Hattori] text-lg md:text-3xl">
            The Wedding Of
          </h1>
          <div className="text-center leading-relaxed py-4">
            <h3 className="text-5xl  px-2 font-extrabold bg-gradient-to-tr from-amber-800 via-yellow-600 font-[parisienne] to-amber-600 bg-clip-text text-transparent py-2 ">
              Rahmadi
            </h3>
            <span className="font-[parisienne] text-3xl text-zinc-200">&</span>
            <h4 className="text-5xl  px-2 font-extrabold bg-gradient-to-tr from-amber-800 via-yellow-600 font-[parisienne] to-amber-600 bg-clip-text text-transparent py-2">
              Dinda
            </h4>
          </div>
          <div className="flex flex-col relative z-50 items-center gap-1 justify-center">
            <div className="mouse"></div>
            <small className="text-zinc-300/80">scroll down</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
