'use client';

import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { motion } from 'framer-motion';
import clsx from 'clsx';

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
        <h1 className="text-5xl font-semibold text-center">
          Still unsure wether to upgrade?
        </h1>
        <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">
          Here are some commonly asked questions.
        </p>
      </div>

      <div className="w-3/4 mx-auto max-w-8xl">
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
            className="bg-[#191919] hover:bg-[#151515] my-4 p-4 rounded-2xl transition duration-200 cursor-pointer"
          >
            <button
              className="font-bold md:font-medium text-[14px] md:text-2xl flex justify-between w-full items-center"
            >
              <p className={clsx('transition duration-300', expandedIndex === index && 'scale-110 translate-x-[5%]')}>{faq.question}</p>
              <div
                className={`icon ${expandedIndex === index ? 'up' : 'down'}`}
              >
                {expandedIndex === index ? <BiChevronUp /> : <BiChevronDown />}
              </div>
            </button>
            <div
              className={`answer-container ${
                expandedIndex === index ? 'expanded' : ''
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
