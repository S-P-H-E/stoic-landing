"use client"

import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

const MyComponent = () => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let currentTarget = event.currentTarget as HTMLDivElement;
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(event.clientX - left);
        mouseY.set(event.clientY - top);
    }

    let mouseX2 = useMotionValue(0);
    let mouseY2 = useMotionValue(0);

    function handleMouseMove2(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
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
            link: 'https://player.vimeo.com/video/901189185?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
        },
        {
            title: 'Short Form Masterclass',
            description: 'Get the best lessons on Short Form Content',
            link: 'https://player.vimeo.com/video/866449243?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
        }
    ];

    return (
        <motion.div id={'courses'} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="pb-24 scroll-my-20 h-full flex flex-col items-center justify-center relative max-w-8xl gap-8 mx-auto">
            <div className="text-center items-center justify-center flex flex-col gap-2 px-6">
                <p className="text-description tracking-widest leading-3">THE BEST INFORMATION</p>
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-medium">
                    <mark className="bg-transparent text-white">What you will learn</mark>
                </h1>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8"
            >
                {courses.map((course, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        className="relative rounded-lg overflow-hidden border border-border flex flex-col"
                    >
                        <div onMouseMove={index > 0 ? handleMouseMove2 : handleMouseMove} className="bg-light-gray justify-center text-center group items-center px-4 py-8 flex flex-col gap-2">
                            <h1 className="text-2xl">{course.title}</h1>
                            <h2 className="text-gray font-light">{course.description}</h2>
                            <motion.div
                                className="md:block hidden pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                                style={{
                                    background: useMotionTemplate`
                                    radial-gradient(
                                    650px circle at ${index > 0 ? mouseX2 : mouseX}px ${index > 0 ? mouseY2 : mouseY}px,
                                    var(--glow),
                                    transparent 75%
                                    )
                                `,
                                }}
                            />
                        </div>
                        <div className="relative h-[110%] aspect-video w-full">
                            <iframe
                                src={course.link}
                                allow="autoplay; fullscreen; picture-in-picture;"
                                style={{width: '100%', height: '100%'}}
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
