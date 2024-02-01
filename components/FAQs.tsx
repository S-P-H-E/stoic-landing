'use client';
import clsx from 'clsx'
import { Playfair } from 'next/font/google'
import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'Do I need money to start?',
    answer:
      'No. We will teach you how to start with $0. The only money you need is for the subscription.',
  },
  {
    question: 'Do I need to know how to edit?',
    answer:
      'We will teach you how to edit if you have an editing software, if not you can always use an AI video editor which requires no editing on your end.',
  },
  {
    question: 'Does my age matter?',
    answer:
      'Of course not, we believe that age should never be a barrier to learning and pursuing your passions. Whether you are a teenager or an adult our program is designed to cater to learners of all ages.',
  },
  {
    question: 'How quickly will I get views?',
    answer:
      'The quicker you implement the lessons we teach the sooner you will see results, that coupled with the effort you put in.',
  },
  {
    question: 'I do not have a lot of time available, can I still join?',
    answer:
      'Absolutely! We understand everyone has different time constraints and we considered this when making the program therefore we can work with the hours you have.',
  },
  {
    question: 'I live in X country, is it a problem?',
    answer:
      'We welcome participants from all countries, including your country! Our course is designed to be accessible and beneficial to individuals worldwide. Regardless of your location, the results will be the same',
  },
];

const font = Playfair({
  subsets: ['latin'],
  weight: ['500'],
})

export default function FAQs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const fadeInBox = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        delay: 3.05 * index,
      },
    }),
  };

  return (
    <>
      <div className="pt-40 pb-10 flex flex-col items-center gap-6 max-w-8xl mx-auto">
        <div>
          <p className="text-[--description] tracking-widest text-center">
            STILL UNSURE?
          </p>
          <h1 className={clsx("text-8xl font-medium text-center", font.className)}>Frequently Asked<br /><mark className="bg-transparent text-white italic">Questions</mark></h1>
        </div>
      </div>

      <div className="w-3/4 mx-auto max-w-8xl bg-[#191919] rounded-2xl px-5 pt-1">
        {faqs.map((faq, index) => (
          <motion.div
            initial="initial"
            variants={fadeInBox}
            whileInView="animate"
            viewport={{
              once: true,
            }}
            key={index}
            onClick={() => toggleExpanded(index)}
            className={clsx("my-4 p-7 cursor-pointer", index === faqs.length - 1 && "border-none", "border-b border-[#2C2B2A]")}
          >
            <button
              className="font-bold md:font-medium text-[14px] md:text-2xl flex justify-between w-full items-center"
            >
              <p>{faq.question}</p>
              <div
                className={`icon ${expandedIndex === index ? 'up' : 'down'}`}
              >
                {expandedIndex === index ? <BiChevronUp /> : <BiChevronDown />}
              </div>
            </button>
            <div
              className={`answer-container ${expandedIndex === index ? 'expanded' : ''
                }`}
            >
              <p className="my-3 text-[#858585]">{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

