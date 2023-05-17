import axios from 'axios'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/legacy/image";
import { useForm } from "react-hook-form"
import { GiLoveLetter } from 'react-icons/gi'



const GetUniqueCode = ({ guest }) => {

  const router = useRouter();
  const { uuid } = router.query;
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  const formSubmit = async ({ status }) => {
    try {
      const userId = guest?.userId;
      await axios.patch(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation/status/${uuid}?userId=${userId}`, {
        status: selectedValue,
      })

      setIsOpen(false)
      router.push(`/invitation/${uuid}?userId=${userId}`);

    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (value) => {
    setSelectedValue(value);
  };


  return (
    <>
      <div className="w-4/6  bg-goyang z-[20]  fixed  lg:absolute -top-6 left-0 ">
        <Image
          src="/img/ornamen-2-atas.png"
          alt=""
          layout="responsive"
          width={100}
          height={75}
          objectFit="cover"
          objectPosition="bottom"
          priority
        />
      </div>
      <div className="w-5/6  bg-goyang z-[20] fixed lg:absolute top-3 -left-10 ">
        <Image
          src="/img/ornamen-2-atas.png"
          alt=""
          layout="responsive"
          width={100}
          height={75}
          objectFit="cover"
          objectPosition="top"
          priority
        />
      </div>

      <div className="w-full h-full py-4 md:py-44 pb-0 z-50 fixed top-0 lg:relative flex flex-col gap-4  items-center justify-center space-y-8">
        <h3 className='text-amber-900/80 font-semibold text-lg relative z-50'>Undangan Pernikahan</h3>
        <div className="flex w-fit items-center justify-center">
          <div className="border border-r-0 p-2 border-b-0 border-zinc-500/40 box-content  relative left-2 text-center">
            <Image
              src="/img/img-cover-woman.png"

              alt=""
              width={250}
              height={150}
              objectFit="contain"
              priority
            />
            <p className="text-sm text-amber-800/80 sm:text-md p-1 font-[Hattori] tracking-widest">DINDA</p>
          </div>
          <div className="relative border p-2 border-l-0 border-t-0 border-zinc-500/40 box-content  text-center -left-2 ">
            <Image
              src="/img/img-cover-man.png"
              alt=""
              width={250}
              height={150}
              objectFit="contain"
              priority
            />
            <p className="text-sm text-amber-800/80 sm:text-md p-1 font-[Hattori] tracking-widest">RAHMADI</p>
          </div>

        </div>
        <div className='w-fit rounded-lg border px-8 py-1 text-center leading-relaxed'>
          <h4 className='mb-2 text-sm sm:text-md text-zinc-700'>Kepada Yth, Bpk/Ibu/Saudara/i :</h4>
          <p className='py-2 text-xl capitalize text-amber-800/80 font-[Hattori] tracking-wide'>{guest?.name}</p>
          <p className='text-zinc-700 text-sm sm:text-md'>Di Tempat.</p>
        </div>
        <form className='w-fit items-center justify-center flex flex-col' onSubmit={handleSubmit(formSubmit)}>
          <input
            type="text"
            onChange={() => handleClick("Opened")}
            {...register("status", { required: true })}
            checked={selectedValue === "Opened"}
            value="Opened"
            className="opacity-0 flex flex-col items-center justify-center"

          />
          {/* fixed status opened*/}
          {!guest?.status ? (
            <>
              <button
                onClick={() => handleClick("Opened")}
                type="submit"
                className="py-2 flex items-center gap-1 cursor-pointer px-5 shadow-lg rounded shadow-black/20 text-zinc-200 hover:text-zinc-100 bg-[#9c8450]  hover:bg-[#867041] "
              >
                <GiLoveLetter size={22} />
                Buka Undangan
              </button>
            </>
          ) : (
            <>
              <button
                className="py-2 flex text-sm items-center gap-1 cursor-pointer px-5 shadow-lg rounded shadow-black/20 text-zinc-200 hover:text-zinc-100 bg-[#9c8450]  hover:bg-[#867041] "
                onClick={() => handleClick(guest?.status)}
                type="submit"
              >
                <GiLoveLetter size={22} />
                Buka Undangan
              </button>
            </>
          )}
        </form>

        <div className='absolute bottom-0 right-0 w-4/6 rotate-180 -z-40 '>
          <Image
            src="/img/ornamen-2-atas.png"
            alt=""
            layout="responsive"
            width={100}
            height={75}
            objectFit="cover"
            objectPosition="top"
            priority
          />
        </div>
      </div>
    </>
  )
}

export default GetUniqueCode





// export const getStaticPaths = async () => {
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation`);
//   const invitationDataList = res.data || [];
//   const paths = invitationDataList.length
//     ? invitationDataList.map((guests) => {
//       return {
//         params: {
//           uuid: guests.unique_Code,
//         },
//       };
//     })
//     : [];
//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${params.uuid}`
//   );
//   const guest = res.data || {};
//   return {
//     props: {
//       guest,
//     },
//     revalidate: 1
//   };
// };


export const getServerSideProps = async ({ params }) => {

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${params.uuid}`
  );
  const guest = res.data || {};

  return {
    props: {
      guest,
      revalidate: 1
    },
  };
};