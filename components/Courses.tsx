import React from 'react';
import {Playfair} from "next/font/google";
import clsx from "clsx";
import {motion} from 'framer-motion'

const font = Playfair({
    subsets: ['latin'],
    weight: ['500'],
})

const MyComponent = () => {

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.08 * index,
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
    ]

    return (
        <motion.div id={'courses'} initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once:true}} className="scroll-my-20 h-full flex flex-col items-center justify-center relative max-w-8xl gap-8 mx-auto">
            <p className="text-[--description] tracking-widest">THE BEST INFORMATION</p>
            <h1 className={clsx("text-8xl font-medium", font.className)}>
                <mark className="bg-transparent text-white">What you will learn</mark>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {courses.map((course, index) => (
                    <motion.div key={index}
                                custom={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                className="rounded-lg overflow-hidden border border-[--border] flex flex-col">
                        <div className="bg-[#161616] justify-center text-center items-center p-8 flex flex-col gap-2">
                            <h1 className="text-2xl">{course.title}</h1>
                            <h2 className="text-[--gray] font-light">{course.description}</h2>
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
