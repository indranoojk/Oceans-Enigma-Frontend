import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { easeInOut, motion } from "framer-motion";
import { fadeIn, textUp } from "../utils/motion";
import octopus from "../assets/octopus.gif";
import { SectionWrapper } from "../hoc/index";
import { slideshow, working, testimonials } from "../constants/index";
import useScrollToTop from "./useScrollToTop";

const WorkingCard = ({ index, title, desc1, desc2 }) => {
  return (
    <Tilt className="w-full lg:w-[250px] lg:pt-8 pt-3">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        initial='hidden'
        whileInView='show'
        // viewport={{ once: true, amount: 0.25 }}
        className="w-full white-gray-gradient p-[2px] rounded-[20px] shadow-xl shadow-gray-800"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#2a2929] rounded-[20px] py-5 px-5 min-h-[230px] flex justify-evenly items-center flex-col"
        >
          <h3 className="text-[20px] text-white list-disc font-bold text-center">
            {title}
          </h3>
          <ul className="text-[16px] text-[#d7d7d7] list-disc font-medium p-2">
            <li className="pb-2">{desc1}</li>
            <li>{desc2}</li>
          </ul>
        </div>
      </motion.div>
    </Tilt>
  );
};

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    initial='hidden'
    whileInView='show'
    // viewport={{ once: true, amount: 0.25 }}
    className='bg-[#191919] p-10 rounded-3xl lg:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-3 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='text-blue-400'>@</span> {name}
          </p>
          <p className='mt-1 text-[#cdcaca] text-[12px]'>
            {designation}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useScrollToTop();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshow.length); // Change slide
    }, 2000); // Change media every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slideshow.length]);

  const currentMedia = slideshow[currentIndex];

  return (
    <>
      <section className="Hero">
        <div className="relative h-screen w-full overflow-hidden select-none">
          <div className="absolute w-full overflow-hidden shadow-lg">
            <img
              src={currentMedia.src}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-screen object-cover"
            />
          </div>
          {/* Overlay for darkness */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* <div className="mt-4 text-center text-gray-500">
        Slide {currentIndex + 1} of {media.length}
      </div> */}

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-start px-6 lg:px-20">
            <div className="text-white">
              <motion.div
                animate={{
                  x: [-200, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 2,
                  ease: easeInOut,
                }}
              >
                <h3 className="uppercase text-lg font-semibold tracking-tight mb-3">
                  Introducing
                </h3>
              </motion.div>
              <motion.div
                animate={{
                  x: [-200, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 2,
                  delay: 1,
                  ease: easeInOut,
                }}
              >
                <h2 className="font-serif text-2xl lg:text-6xl font-bold leading-tight mb-4">
                  Ocean's Enigma
                </h2>
              </motion.div>
              <motion.div
                animate={{
                  x: [-120, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 2,
                  delay: 0.5,
                  ease: easeInOut,
                }}
              >
                <p className="text-lg font-light max-w-xl mb-6">
                  A new way to explore the mysterious world lying under the
                  water.
                </p>
              </motion.div>
              <motion.div
                animate={{
                  x: [-150, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 2,
                  delay: 1,
                  ease: easeInOut,
                }}
              >
                <Link
                  to="/predict"
                  className="inline-block bg-white text-black text-sm font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
                >
                  Try Ocean's Enigma Now →
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Octopus gif */}
          <motion.div
            animate={{
              y: [500, 50, 500],
              // opacity: [0, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: easeInOut,
            }}
            className="hidden lg:block float-right"
          >
            <img
              src={octopus}
              alt="octopus gif"
              className="w-24 h-24 select-none"
            />
          </motion.div>
        </div>
      </section>

      <section className="Introduction">
        <motion.div 
          variants={textUp()}
          initial='hidden'
          whileInView='show'
          // viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex flex-col m-16 justify-center text-center items-center">
            <h2 className="font-serif text-2xl lg:text-4xl max-w-2xl font-bold leading-tight mb-4">
              Welcome to Our AI-Powered Aquatic Species Prediction Platform
            </h2>
            <h3 className="font-serif text-lg lg:text-lg max-w-2xl leading-tight mb-4">
              Explore the cutting-edge technology that brings marine biology and
              artificial intelligence together. Our platform uses advanced
              machine learning algorithms to identify and predict aquatic
              species with unmatched accuracy, revolutionizing marine research
              and conservation efforts.
            </h3>
          </div>
        </motion.div>
      </section>

      <section className="Working">
        <div className="flex flex-col m-16 justify-center text-center items-center">
          <motion.div 
            variants={textUp()}
            initial='hidden'
            whileInView='show'
            // viewport={{ once: true, amount: 0.25 }}
          >
            <h1 className="font-serif text-2xl lg:text-4xl max-w-2xl font-bold leading-tight mb-4">
              How It Works
            </h1>
          </motion.div>
          <div className="mt-2 mx-16 flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-center gap-10 lg:gap-12 ">
            {working.map((working, index) => (
              <WorkingCard key={working.title} index={index} {...working} />
            ))}
          </div>
        </div>
      </section>

      <section className="Feedback">
        <div className={`mt-12 py-5 bg-black pt-10`}>
          <div className={`bg-[#464545] rounded-2xl p-10 pb-32 mx-4 text-center`}>
            <motion.div
              variants={textUp()}
              initial='hidden'
              whileInView='show'
              // viewport={{ once: true, amount: 0.25 }}
            >
              <p className={`text-white font-black text-[18px] lg:text-[20px]`}>What others say</p>
              <h2 className={`text-white font-black text-[30px] lg:text-[40px]`}>Testimonials.</h2>
            </motion.div>
          </div>
          <div
            className={`-mt-20 pb-5 px-16 flex flex-wrap lg:flex-nowrap gap-7 justify-center`}
          >
            {testimonials.map((testimonial, index) => (
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
