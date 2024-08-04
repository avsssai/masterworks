import Image from "next/image";
import Link from "next/link";
import { ImageCard } from "./components/ImageCard";

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
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative m-4 gap-2 after:border-r-2 bg-gradient-custom">
        <ImageCard
          name1="Rem"
          name2="-Brandt"
          number={1}
          imageURI="/rembrandt/rembrandt-athena.jpg"
          alt="Painting of Athena the goddess of war by Rembrandt."
        />

        <ImageCard
          name1="Leonardo"
          name2="Da Vinci"
          number={2}
          alt="Painting of Mona List by Leonardo Da Vinci."
          imageURI="/leonardo/Leonardo-Mona-Lisa.jpg"
        />

        <ImageCard
          name1="Miche"
          name2="-langelo"
          number={3}
          imageURI="/michelangelo/michelangelo-david.jpg"
          alt="A photo of the statue David by Michelangelo"
        />

        <ImageCard
          name1="VIncent"
          name2="Van Gogh"
          number={4}
          imageURI="/vangogh/van-gogh-starry-night.jpg"
          alt="A photo of the painting starry night by Van Gogh"
        />
      </section>
    </main>
  );
}
