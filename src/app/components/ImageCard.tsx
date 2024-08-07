import Image from "next/image";
import Link from "next/link";

interface IProps {
  imageURI: string;
  name: string;
  alt: string;
  number: number;
  link: string;
}

export const ImageCard = ({ imageURI, name, alt, number, link }: IProps) => {
  return (
    <Link href={link}>
      <div className="h-screen p-4 relative isolate group [&:not(:last-child)]:border-r border-stone-500 flex-grow group">
        <h2 className="text-black text-6xl z-10 leading-10 mt-10 md:mt-16 md:group-hover:text-white break-words max-w-[6ch] hyphens-auto">
          {name}
        </h2>
        <p className="mt-4 md:group-hover:text-white font-primary text-sm">
          MDCVI - MDCLXIX
        </p>
        {/* {name2 ? <h2 className="text-black text-4xl z-10">{name2}</h2> : ""} */}

        <p className="absolute left-1/2 -translate-x-1/2 bottom-0 text-primary text-[196px] md:text-[256px] md:group-hover:text-white">
          {number}
        </p>

        <Image
          src={imageURI}
          alt={alt}
          // width={1280}
          // height={1667}
          fill
          objectFit="cover"
          className="-z-10 md:group-hover:block overflow-hidden hidden"
        />
      </div>
    </Link>
  );
};
