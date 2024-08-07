"use client";
import { useRef } from "react";
import { ImageCard } from "./ImageCard";
import { useTransform, useScroll, motion } from "framer-motion";

interface IProps {
  name: string;
  number: number;
  link: string;
  imageURI: string;
  alt: string;
}

export default function HorizontalScrollCarousel({ data }: { data: IProps[] }) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);
  return (
    <section className="relative h-[300vh] md:hidden" ref={targetRef}>
      <div className="h-screen sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 divide-x-2">
          {data
            ? data.map((card) => <ImageCard key={card.number} {...card} />)
            : null}
        </motion.div>
      </div>
    </section>
  );
}
