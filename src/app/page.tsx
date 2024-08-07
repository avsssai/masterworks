import Image from "next/image";
import Link from "next/link";
import { ImageCard } from "./components/ImageCard";
import HorizontalScrollCarousel from "./components/HorizontalScroll";

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
      <HorizontalScrollCarousel />
      <section className="md:grid-cols-2 lg:grid-cols-4 relative divide-x-2 after:border-r-2 bg-gradient-custom hidden md:grid">
        <ImageCard
          name1="Rembrandt"
          number={1}
          imageURI="/rembrandt/rembrandt-athena.jpg"
          alt="Painting of Athena the goddess of war by Rembrandt."
          painter="rembrandt"
        />

        <ImageCard
          name1="Leonardo Da Vinci"
          number={2}
          alt="Painting of Mona List by Leonardo Da Vinci."
          imageURI="/leonardo/Leonardo-Mona-Lisa.jpg"
          painter="leonardo-da-vinci"
        />

        <ImageCard
          name1="Michelangelo"
          number={3}
          imageURI="/michelangelo/michelangelo-david.jpg"
          alt="A photo of the statue David by Michelangelo"
          painter="michelangelo"
        />

        <ImageCard
          name1="Vincent Van Gogh"
          number={4}
          imageURI="/vangogh/van-gogh-starry-night.jpg"
          alt="A photo of the painting starry night by Van Gogh"
          painter="vincent-van-gogh"
        />
      </section>
    </main>
  );
}
