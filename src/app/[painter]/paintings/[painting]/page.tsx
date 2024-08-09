import { paintersData } from "@/app/data/painters";
import Image from "next/image";

export default function Page({
  params,
}: {
  params: { painter: string; painting: string };
}) {
  const { painter, painting } = params;
  const { paintings } = paintersData[painter];
  const currentPainting = paintings.find((item) => item.slug === painting);
  return (
    <section className="min-h-screen p-4">
      <h1 className="text-7xl table-caption mt-16 leading-[3.2rem] uppercase">
        {currentPainting?.name}
      </h1>
      <p className="mt-4 font-primary text-sm">{currentPainting?.year}</p>
      <div className="relative h-[300px] w-full mt-8">
        {currentPainting?.imageURI ? (
          <Image
            src={currentPainting?.imageURI}
            alt={currentPainting?.alt}
            fill
            className="object-contain"
          />
        ) : null}
      </div>
      <div className="mt-8 sm:mt-16 flex">
        <div className="w-fit self-center">
          <div className="leading-3 text-5xl rotate-[270deg]">
            <h2>Descr</h2>
            <h2>-iption</h2>
          </div>
        </div>
        <p className="text-xs font-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum
          expedita itaque, aspernatur assumenda recusandae neque impedit in
          voluptates, obcaecati numquam? Expedita ipsum commodi, obcaecati ipsam
          necessitatibus facilis corporis culpa.
        </p>
      </div>
    </section>
  );
}
