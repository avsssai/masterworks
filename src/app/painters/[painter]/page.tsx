import HorizontalScrollCarousel from "@/app/components/HorizontalScroll";
import { ImageCard } from "@/app/components/ImageCard";
import { paintersData } from "@/app/data/painters";
import Image from "next/image";

export default function Page({ params }: { params: { painter: string } }) {
  const {
    displayNameFirst,
    displayNameSecond,
    secondName,
    born,
    died,
    firstName,
    displayPicture,
    displayPictureAlt,
    paintings,
  } = paintersData[params.painter];
  return (
    <main>
      <section className="h-screen relative">
        <div className="h-full relative flex flex-col justify-center text-primary isolate uppercase items-center leading-[4rem] md:leading-[10rem] text-center">
          <h1 className="text-[96px] sm:text-[6rem] md:text-[14rem] lg:text-[16rem] -tracking-[10px] relative">
            <p className="absolute font-primary text-black top-2 -left-12 md:top-10 md:-left-20 text-xs md:text-sm tracking-normal">
              {born}
            </p>
            <p className="absolute font-primary text-black top-2 -right-16 md:top-10 md:-right-20 text-xs md:text-sm tracking-normal">
              {died}
            </p>
            {displayNameFirst}
          </h1>
          <h1 className="relative text-[96px] sm:text-[6rem] md:text-[14rem] z-20 lg:text-[16rem]  md:-ml-16 -tracking-[10px] before:content-['-']">
            <div className="absolute h-[50px] w-[38.5px] md:h-[150px] md:w-[115.5px] right-6 -top-2 md:right-14 md:-top-5 rotate-6 z-0">
              <Image src={displayPicture} alt={displayPicture} fill />
            </div>
            {displayNameSecond}
          </h1>
          <h2 className="md:text-[24px] leading-5 mt-4 md:mt-8">
            {secondName}
          </h2>
        </div>
      </section>
      <section>
        <HorizontalScrollCarousel data={paintings} />
        <div className="md:grid-cols-2 lg:grid-cols-4 relative divide-x-2 after:border-r-2 bg-gradient-custom hidden md:grid">
          {paintings.map((card) => (
            <ImageCard key={card.number} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
}
