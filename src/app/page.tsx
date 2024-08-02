import Image from "next/image";
import Link from "next/link";

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
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
        <div className="h-screen p-4 relative isolate group">
          <h2 className="text-black text-6xl z-10">Rem</h2>
          <h2 className="text-black text-6xl z-10">-Brandt</h2>

          <p className="absolute left-10 bottom-0 text-primary text-[156px] hover:text-white">
            1
          </p>
          <Image
            src={"/rembrandt/rembrandt-athena.jpg"}
            alt="Painting of Athena the goddess of war by Rembrandt."
            // width={1280}
            // height={1667}
            fill
            objectFit="cover"
            className="-z-10 opacity-60 group-hover:opacity-50 group-hover:scale-105 group-hover:transition-transform"
          />
        </div>
        <div className="h-screen p-4 relative">
          <h2 className="text-black text-6xl">Leonardo</h2>
          <h2 className="text-black text-6xl">Da Vinci</h2>

          <p className="absolute left-10 bottom-0 text-primary text-[156px]">
            2
          </p>
        </div>
        <div className="h-screen p-4 relative">
          <h2 className="text-black text-6xl">Miche</h2>
          <h2 className="text-black text-6xl">-langelo</h2>

          <p className="absolute left-10 bottom-0 text-primary text-[156px]">
            3
          </p>
        </div>
        <div className="h-screen p-4 relative">
          <h2 className="text-black text-6xl">Pablo</h2>
          <h2 className="text-black text-6xl">Picasso</h2>

          <p className="absolute left-10 bottom-0 text-primary text-[156px]">
            4
          </p>
        </div>
      </section>
    </main>
  );
}
