'use client';

import axios from 'axios';
import { motion } from 'framer-motion';
import { BsFillCheckCircleFill, BsPeopleFill, BsStars } from 'react-icons/bs';
import { FaBook, FaGraduationCap, FaStripe, FaTrophy } from 'react-icons/fa';

export default function Pricing() {
    
  const features = [
    {
      id: 1,
      icon: <FaBook size={25} />,
      name: 'Courses',
    },
    {
      id: 2,
      icon: <BsStars size={25} />,
      name: 'AI Tools',
    },
    {
      id: 3,
      icon: <FaGraduationCap size={25} />,
      name: 'In-Depth Tutorials',
    },
    {
      id: 4,
      icon: <BsPeopleFill size={25} />,
      name: 'Community',
    },
    {
      id: 5,
      icon: <FaTrophy size={25} />,
      name: 'No Experience Required',
    },
  ];

  const handleSubscription = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { data } = await axios.post(
      '/api/payment',
      // {
      //     priceId: 'price_1OQDteJVAR9FxLkw3SLA8UZv',
      //     promoId: 'promo_1OQDw8JVAR9FxLkwrpCHI1xO'
      // },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    window.location.assign(data);
  };
  
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <>
      <div className="max-w-8xl mx-auto pt-40 pb-10 flex flex-col items-center gap-6">
        <h1 className="text-5xl font-semibold text-center">
          Lets get you started.
        </h1>
        {/* <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">Empower your creative journey with our state-of-the-art platform, offering a 24/7 AI support system to guide you at every step. Easily convert videos for major social media platforms with our specialized tools. Dive into a rich resources library, providing all the assets you need for seamless editing. Whether you're utilizing our AI support, video converters, or resource library, our platform ensures you have the powerful yet familiar tools to craft your ultimate content.</p> */}
        <p className="w-[50vw] text-center font-medium text-2xl text-[#898989]">
          Lock-in this price before it increases.
        </p>
      </div>

      <div className="max-w-8xl mx-auto flex items-center justify-center">
        <motion.div
          className=" border border-[#1C1C1D] w-[450px] rounded-3xl p-8 flex flex-col items-center gap-2 bg-gradient-to-tl from-[white]/5"
          custom={1}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-2xl uppercase">Upgrade to premium</h1>
          </div>

          <h1 className="text-4xl text-[--upgrade] pb-5 flex flex-col items-center font-medium">
            <mark className="bg-transparent text-xl text-gray-500 line-through">
              $99.99
            </mark>
            $49.99
          </h1>

          {features.map((feature) => (
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              key={feature.id}
              custom={feature.id}
              variants={fadeInAnimationVariants}
              className="flex justify-between items-center gap-1 w-full p-2 rounded-md border border-[#1C1C1D]"
            >
              <div className="flex items-center">
                <div
                  className="text-[--upgrade] p-2 rounded-lg"
                  style={{ backgroundColor: `rgba(var(--upgrade), 0.1)` }}
                >
                  {feature.icon}
                </div>
                <h1 className="px-2 font-medium">{feature.name}</h1>
              </div>

              <BsFillCheckCircleFill className="text-[--upgrade]" />
            </motion.div>
          ))}
          <motion.button
            className="upgrade mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleSubscription}
          >
            UPGRADE
          </motion.button>

          <div className="flex items-center gap-1 border border-[--border] px-2 rounded-lg mt-6">
            <p className="text-sm">Secured by</p>
            <FaStripe size={35} />
          </div>
        </motion.div>
      </div>
    </>
  );
}
