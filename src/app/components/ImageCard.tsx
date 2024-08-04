import Image from "next/image";

interface IProps {
  imageURI: string;
  name1: string;
  name2?: string;
  alt: string;
  number: number;
}

export const ImageCard = ({ imageURI, name1, name2, alt, number }: IProps) => {
  return (
    <div className="h-screen p-4 relative isolate group">
      <h2 className="text-black text-6xl z-10">{name1}</h2>
      {name2 ? <h2 className="text-black text-6xl z-10">{name2}</h2> : ""}

      <p className="absolute left-10 bottom-0 text-primary text-[156px]">
        {number}
      </p>

      <Image
        src={imageURI}
        alt={alt}
        // width={1280}
        // height={1667}
        fill
        objectFit="cover"
        className="-z-10 opacity-60 group-hover:opacity-50 group-hover:transition-transform overflow-hidden"
      />
    </div>
  );
};
