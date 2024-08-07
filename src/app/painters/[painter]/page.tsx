import { paintersData } from "@/app/data/painters";

export default function Page({ params }: { params: { painter: string } }) {
  const {
    displayNameFirst,
    displayNameSecond,
    secondName,
    born,
    died,
    firstName,
  } = paintersData[params.painter];
  return (
    <section className="h-screen relative">
      <div className="h-full relative flex flex-col justify-center text-primary uppercase items-center leading-[4rem] md:leading-[10rem] text-center">
        <h1 className="text-[96px] sm:text-[6rem] md:text-[14rem] lg:text-[16rem] -tracking-[10px] relative">
          <p className="absolute font-primary text-black top-2 -left-12 md:top-10 md:-left-20 text-xs md:text-sm tracking-normal">
            {born}
          </p>
          <p className="absolute font-primary text-black top-2 -right-16 md:top-10 md:-right-20 text-xs md:text-sm tracking-normal">
            {died}
          </p>
          {displayNameFirst}
        </h1>
        <h1 className="relative text-[96px] sm:text-[6rem] md:text-[14rem] lg:text-[16rem]  md:-ml-16 -tracking-[10px] before:content-['-']">
          {displayNameSecond}
        </h1>
        <h2 className="md:text-[24px] leading-5 mt-4 md:mt-8">{secondName}</h2>
      </div>
    </section>
  );
}
