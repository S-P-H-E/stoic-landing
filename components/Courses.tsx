'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useInView,
} from 'framer-motion';
import clsx from 'clsx';
import Image from 'next/image';

const MyComponent = () => {
  const [muted, setMuted] = useState('&muted=true');
  const [controls, setControls] = useState('&controls=false');
  const [playing, setPlaying] = useState(false);

  const [muted2, setMuted2] = useState('&muted=true');
  const [controls2, setControls2] = useState('&controls=false');
  const [playing2, setPlaying2] = useState(false);

  const [loaded, setLoaded] = useState(false);

  const ref = useRef(null);

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setLoaded(true);
    }
  }, [isInView]);

  useEffect(() => {
    if (!loaded) {
      const timeout = setTimeout(() => {
        setLoaded(true);
      }, 2800);

      return () => clearTimeout(timeout);
    }
  }, [loaded]);

  const handlePlay = () => {
    setMuted('');
    setControls('&controls=true');
    setPlaying(!playing);

    setPlaying2(false);
    setMuted2('&muted=true');
    setControls2('&controls=false');
  };

  const handlePlay2 = () => {
    setMuted2('');
    setControls2('&controls=true');
    setPlaying2(!playing2);

    setPlaying(false);
    setMuted('&muted=true');
    setControls('&controls=false');
  };

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    let currentTarget = event.currentTarget as HTMLDivElement;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  }

  let mouseX2 = useMotionValue(0);
  let mouseY2 = useMotionValue(0);

  function handleMouseMove2(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    let currentTarget = event.currentTarget as HTMLDivElement;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX2.set(event.clientX - left);
    mouseY2.set(event.clientY - top);
  }

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
        delay: 0.15 * index,
      },
    }),
  };

  const courses = [
    {
      title: 'After Effects Crash Course',
      description: 'Learn everything you need to know about After Effects.',
      link: `https://customer-m0okwjgscx6jj5he.cloudflarestream.com/6ac48cfd3d9351c41b9ea591e5ce83eb/iframe?${controls}${muted}&preload=${loaded ? 'true' : 'false'}&loop=true&autoplay=${loaded ? 'true' : 'false'}&poster=https%3A%2F%2Fcustomer-m0okwjgscx6jj5he.cloudflarestream.com%2F6ac48cfd3d9351c41b9ea591e5ce83eb%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`,
    },
    {
      title: 'Short Form Masterclass',
      description: 'Get the best lessons on Short Form Content.',
      link: `
            https://customer-m0okwjgscx6jj5he.cloudflarestream.com/23d1f8a0e920bfb42ca8394304d44c44/iframe?${controls2}${muted2}&preload=${
        loaded ? 'true' : 'false'
      }&loop=true&autoplay=${
        loaded ? 'true' : 'false'
      }&poster=https%3A%2F%2Fcustomer-m0okwjgscx6jj5he.cloudflarestream.com%2F23d1f8a0e920bfb42ca8394304d44c44%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`,
    },
  ];

  return (
    <motion.div
      id="courses"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="pb-24 scroll-mt-40 h-full flex flex-col items-center justify-center relative max-w-8xl gap-8 mx-auto"
    >
      <div className="text-center items-center justify-center flex flex-col gap-2 px-6">
        <p className="text-description tracking-widest leading-3">
          THE BEST INFORMATION
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium">
          <mark className="bg-transparent text-white">What you will learn</mark>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            custom={index}
            ref={ref}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="relative rounded-lg overflow-hidden border border-border flex flex-col"
          >
            <div
              onMouseMove={index > 0 ? handleMouseMove2 : handleMouseMove}
              className="bg-light-gray h-auto lg:h-auto md:h-[58%] justify-center text-center group items-center px-4 py-8 flex flex-col gap-2"
            >
              <h1 className="text-2xl">{course.title}</h1>
              <h2 className="text-gray font-light">{course.description}</h2>
              <motion.div
                className="md:block hidden pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                  background: useMotionTemplate`
                                    radial-gradient(
                                    650px circle at ${
                                      index > 0 ? mouseX2 : mouseX
                                    }px ${index > 0 ? mouseY2 : mouseY}px,
                                    var(--glow),
                                    transparent 75%
                                    )
                                `,
                }}
              />
            </div>
            <div className="relative h-full w-full sm:min-h-[10svh] overflow-hidden">
              <div
                className={clsx(
                  'transition duration-300 h-full z-20 absolute w-full aspect-video bg-black/30 flex items-center justify-center cursor-pointer bg-gradient-to-t from-background via-transparent to-transparent',
                  index === 1 && playing2 && 'opacity-0 pointer-events-none',
                  index === 0 && playing && 'opacity-0 pointer-events-none'
                )}
                onClick={index > 0 ? handlePlay2 : handlePlay}
              >
                <Image
                  src="/images/play.png"
                  alt="play"
                  width={50}
                  height={0}
                />
              </div>
              <iframe
                src={course.link}
                allow="autoplay; fullscreen; picture-in-picture;"
                style={{ width: '100%', height: '100%', aspectRatio: '16 / 9' }}
                className="w-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyComponent;
