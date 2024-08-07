"use client";
import { useRef } from "react";
import { ImageCard } from "./ImageCard";
import { useTransform, useScroll, motion } from "framer-motion";

export default function HorizontalScrollCarousel() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);
  return (
    <section className="relative h-[300vh] md:hidden" ref={targetRef}>
      <div className="h-screen sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 divide-x-2">
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
        </motion.div>
      </div>
    </section>
  );
}
