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
    <section className="min-h-screen max-w-[1200px] mx-auto p-8 flex flex-col md:flex-row md:gap-16 md:mt-8">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-7xl table-caption mt-16 leading-[3.2rem] uppercase">
            {currentPainting?.name}
          </h1>
          <p className="mt-4 font-primary text-sm">{currentPainting?.year}</p>
        </div>
        <div className="hidden md:block text-primary md:text-[256px]">
          {currentPainting?.number}
        </div>
      </div>
      <div className="md:flex md:flex-col md:w-full">
        <div className="relative h-[300px] md:h-[400px] w-full mt-8">
          {currentPainting?.imageURI ? (
            <Image
              src={currentPainting?.imageURI}
              alt={currentPainting?.alt}
              fill
              className="object-contain"
              loading="lazy"
            />
          ) : null}
        </div>
        <div className="mt-8 sm:mt-16 flex">
          <div className="w-fit self-center">
            <div className="hidden leading-3 text-5xl md:leading-5 md:text-7xl rotate-[270deg]">
              <h2>Descr</h2>
              <h2>-iption</h2>
            </div>
          </div>
          <p className="text-xs font-primary max-w-sm mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum
            expedita itaque, aspernatur assumenda recusandae neque impedit in
            voluptates, obcaecati numquam? Expedita ipsum commodi, obcaecati
            ipsam necessitatibus facilis corporis culpa.
          </p>
        </div>
      </div>
    </section>
  );
}
