import Image from "next/image";
import Link from "next/link";
import { ImageCard } from "./components/ImageCard";
import HorizontalScrollCarousel from "./components/HorizontalScroll";
import { landingPageData } from "@/app/data/landingData";
import { CustomDrawer } from "./components/Drawer";

export default function Home() {
  return (
    <main>
      <section className="h-screen relative">
        <div className="h-full relative flex flex-col justify-center text-primary isolate uppercase items-center leading-[4rem] md:leading-[10rem] text-center">
          <h1 className="text-[96px] sm:text-[6rem] md:text-[14rem] lg:text-[16rem] -tracking-[10px] relative z-20">
            Master
          </h1>
          <h1 className="relative text-[96px] sm:text-[6rem] md:text-[14rem] z-20 lg:text-[16rem]  md:-ml-16 -tracking-[10px] before:content-['-']">
            <div className="absolute h-[50px] w-[38.5px] md:h-[150px] md:w-[115.5px] right-6 -top-2 md:right-14 md:-top-5 rotate-6 z-0">
              <Image
                src={"/leonardo/leonardo-display.png"}
                alt={"Self potrait of Leonardo Da Vinci"}
                fill
                priority
              />
            </div>
            Works
          </h1>
        </div>
      </section>

      <HorizontalScrollCarousel data={landingPageData} />
      <section className="md:grid-cols-2 lg:grid-cols-4 relative divide-x-2 after:border-r-2 bg-gradient-custom hidden md:grid">
        {landingPageData.map((card) => (
          <ImageCard key={card.number} {...card} />
        ))}
      </section>
    </main>
  );
}
