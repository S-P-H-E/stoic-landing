'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const TestThing = () => {
  return <HorizontalScrollCarousel />;
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
    },
  }),
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-32%']);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
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

const Card = ({ card, index }: { card: CardType; index: number }) => {
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
      className="group relative w-[600px] h-[450px] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
        <Image
          src={card.url}
          alt={card.title}
          width={600}
          height={0}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black to-transparent rounded-2xl p-8">
        <p className="text-5xl font-semibold text-white">{card.title}</p>
        <p className="text-[--gray]">{card.description}</p>
      </div>
    </motion.div>
  );
};

export default TestThing;

type CardType = {
  url: string;
  title: string;
  description: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: '/Platform/01.png',
    title: 'Courses',
    description:
      "Here you'll find detailed courses on after effects edits and short form content to increase your chances of success.",
    id: 1,
  },
  {
    url: '/Platform/02.png',
    title: 'Community',
    description:
      'Ask questions and get help from us and network with other individuals who are on the same journey.',
    id: 2,
  },
  {
    url: '/Platform/03.png',
    title: 'Resources',
    description:
      'We make and collect very high quality resources that we use ourselves then give to you.',
    id: 3,
  },
  {
    url: '/Platform/04.png',
    title: 'Converters',
    description:
      'Just to make things easier for you we also have video converters for all the major video social media platforms',
    id: 4,
  },
];
