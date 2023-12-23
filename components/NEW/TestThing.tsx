'use client'

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const TestThing = () => {
  return (
    <HorizontalScrollCarousel />
  );
};

const fadeInAnimationVariants = { 
    initial: {
        opacity: 0,
        y: 200,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.08 * index,
        }
    })
}


const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-45%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, index) => {
            return <Card index={index} card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, index }: { card: CardType, index:number}) => {
  return (
    <motion.div
      key={card.id}
      initial="initial"
      variants={fadeInAnimationVariants}
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </motion.div>
  );
};

export default TestThing;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/landing.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/landing.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/landing.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/landing.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/landing.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/landing.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/landing.png",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/landing.png",
    title: "Title 8",
    id: 8,
  },
];