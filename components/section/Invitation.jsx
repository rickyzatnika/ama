import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Invitation = () => {
  return (
    <div
      id="profile"
      className="w-full flex items-center flex-col py-14 justify-evenly min-h-screen bg-gradient-to-bl from-[#212121] to-black relative"
    >
      {/* <div className="w-full bg-invitation absolute -rotate-45 mix-blend-screen left-44 sm:left-60 md:left-96 lg:left-40 top-0">
        <Image
          src="/image/ornamen-profile.png"
          width={50}
          height={25}
          alt=""
          objectFit="contain"
          layout="responsive"
          priority
        />
      </div> */}
      <div className="text-center relative z-20">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-zinc-300 mb-2 text-md md:text-2xl px-2 font-[Hattori]"
        >
          Assalamu`alaikum Warahmatullahi Wabarakatuh
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-zinc-400/90 text-sm leading-relaxed"
        >
          Dengan menyebut nama Allah SWT yang Maha Pengasih dan Maha Penyayang,
          kami dengan senang hati ingin mengundang Bapak/Ibu/Saudara/i dan
          berbagi kegembiraan pada pernikahan kami yang Insya Allah akan
          dilaksanakan,
        </motion.p>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="flex flex-col leading-relaxed justify-center text-center gap-2 items-center"
      >
        <span className="text-zinc-400 italic">Pada Tanggal :</span>
        <span className="text-4xl bg-gradient-to-tr from-amber-400 via-yellow-600 to-amber-400 bg-clip-text text-transparent font-[parisienne]">
          10 Juni 2023
        </span>
      </motion.div>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full flex flex-nowrap items-center justify-around"
      >
        <div className="w-fit text-center flex flex-col items-center gap-2  py-2 leading-relaxed">
          <h3 className="text-zinc-400 text-md sm:text-xl font-[Hattori]">
            Akad Nikah
          </h3>
          <div className="w-fit flex items-center justify-center mix-blend-screen brightness-75">
            <Image
              src="/image/ornamen-cincin.png"
              alt=""
              width={100}
              height={75}
              objectFit="contain"
              priority
            />
          </div>
          <p className="text-zinc-400/80 text-sm leading-loose">
            {" "}
            Pukul 08.00 WIB <br /> s/d <br /> Selesai
          </p>
        </div>
        <div className="w-fit text-center flex flex-col items-center gap-2 py-2 leading-relaxed">
          <h3 className="text-zinc-400 text-md sm:text-xl font-[Hattori]">
            Resepsi
          </h3>
          <div className="w-fit flex items-center justify-center mix-blend-screen brightness-75">
            <Image
              src="/image/ornamen-cheers.png"
              alt=""
              width={100}
              height={75}
              objectFit="contain"
              priority
            />
          </div>
          <p className="text-zinc-400/80 text-sm leading-loose">
            Pukul 10.00 WIB <br /> s/d <br /> Pukul 14.20 WIB
          </p>
        </div>
      </motion.div>
      <div className="py-4 leading-relaxed text-center">
        <p className="text-zinc-400 italic">Tempat :</p>
        <p className="bg-gradient-to-tr flex text-xl flex-col tracking-wide items-center gap-3 from-amber-400/80 via-yellow-600/90 to-amber-400/80 bg-clip-text text-transparent">
          AL-HAROMAIN <br />
        </p>
        <span className="px-2 text-zinc-400/80 leading-relaxed text-sm tracking-normal">
          Jl. Tubagus Ismail No.90, Sekeloa, Kecamatan Coblong, Kota Bandung,
          Jawa Barat 40134
        </span>
      </div>
      <div className="w-full px-2 lg:px-8 flex flex-col items-center gap-5 py-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.03662091098!2d107.6207860151833!3d-6.886217069298227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7000af6876b%3A0xfb6d1a3f65c98e39!2sJl.%20Tubagus%20Ismail%20No.90%2C%20Sekeloa%2C%20Kecamatan%20Coblong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040134!5e0!3m2!1sid!2sid!4v1676520917371!5m2!1sid!2sid"
          width="100%"
          height="220"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Link
          href="https://goo.gl/maps/fyuaxtiA82g5wXnN9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="py-2 px-5 bg-yellow-700 text-zinc-300 rounded">
            {" "}
            Open Maps
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Invitation;
