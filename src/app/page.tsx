import Image from "next/image";
import Link from "next/link";
import { ImageCard } from "./components/ImageCard";
import HorizontalScrollCarousel from "./components/HorizontalScroll";
import { landingPageData } from "@/app/data/landingData";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen flex-col items-center justify-center text-primary">
        <h1 className="text-7xl sm:text-9xl">Master</h1>
        <h1 className="text-7xl sm:text-9xl mt-[-24px]">Works</h1>
        <div className="flex gap-2">
          <Link href={`/renaissance`} className="underline hover:no-underline">
            Renaissance
          </Link>
          <Link href={`/contemporary`} className="underline hover:no-underline">
            Contemporary
          </Link>
          <Link href={`/abstract`} className="underline hover:no-underline">
            Abstract
          </Link>
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
