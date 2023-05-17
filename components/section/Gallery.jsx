/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import ShowProtocol from "../ShowProkes";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

const Gallery = () => {
  return (
    <>
      <div
        id="gallery"
        className="w-full bg-white min-h-screen pt-6 pb-8 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center w-full py-4 grid grid-cols-1 leading-relaxed"
        >
          <div className="font-[Hattori] flex flex-col gap-2 bg-gradient-to-br from-amber-800 via-amber-500/70 to-amber-800 bg-clip-text text-transparent text-3xl sm:text-3xl">
            <span className="font-[parisienne] p-1 text-5xl font-semibold">
              Happiness
            </span>{" "}
            <span> Moments</span>
          </div>
        </motion.div>
        <div className="w-5/6 sm:w-4/6 h-full my-12 mx-auto py-1 px-6 ">
          <video
            loop
            muted
            autoPlay
            className="rounded-xl shadow-xl shadow-black/30 hover:shadow-md "
          >
            <source type="video/mp4" src="/video/video.mp4" />
          </video>
        </div>
        <LightGallery
          mode="lg-fade"
          speed={300}
          addClass={true}
          closeOnTap={true}
          isMobile
          elementClassNames="grid grid-cols-3 pt-10 px-2 lg:px-4 gap-0 group "
        >
          <Link href="/img/gallery/gallery-3.jpg">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-3.jpg"
                alt=""
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-6.jpg">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-6.jpg"
                alt=""
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-2.jpg">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-2.jpg"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-7.jpeg">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-7.jpeg"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-4.jpg">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-4.jpg"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-5.jpeg">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-5.jpeg"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-12.jpeg">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-12.jpeg"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-10.jpeg">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-10.jpeg"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/2.jpeg">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/2.jpeg"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-1.jpg">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-1.jpg"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-8.jpeg">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-8.jpeg"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-9.jpeg">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-9.jpeg"
                alt=""
                priority
              />
            </div>
          </Link>
        </LightGallery>
      </div>
      <ShowProtocol />
    </>
  );
};

export default Gallery;
