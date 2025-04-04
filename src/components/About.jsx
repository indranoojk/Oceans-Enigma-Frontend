import React from "react";
import { motion } from "framer-motion";
import { textUp, textLeft, textRight } from "../utils/motion";
import useScrollToTop from "./useScrollToTop";

const About = () => {

  useScrollToTop();

  return (
    <>
      <div className="p-32 bg-black text-white">
        <motion.div
          variants={textLeft()}
          initial="hidden"
          whileInView="show"
          // viewport={{ once: true, amount: 0.25 }}
          className="text-4xl font-bold py-4"
        >
          <h2>About Ocean's Enigma</h2>
        </motion.div>
        <motion.div
        variants={textRight()}
        initial="hidden"
        whileInView="show"
        // viewport={{ once: true, amount: 0.25 }}
        className="py-5">
          <h3 className="text-2xl font-semibold">
            Discover, Learn, and Protect Marine Life
          </h3>
          <p>
            Welcome to Ocean's Enigma, a cutting-edge initiative dedicated to
            identifying and understanding marine biodiversity using AI-powered
            computer vision and machine learning. Our platform enables
            researchers, marine enthusiasts, and conservationists to accurately
            recognize and classify wildlife and aquatic species in real time.
          </p>
        </motion.div>
        <motion.div 
        variants={textLeft()}
        initial="hidden"
        whileInView="show"
        // viewport={{ once: true, amount: 0.25 }}
        className="py-5">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p>
            Our mission is to empower marine conservation efforts through
            technology by providing an advanced species detection system. We aim
            to:
          </p>
          <ul className="list-disc px-10">
            <li>
              Facilitate marine research by providing an AI-driven
              identification tool.
            </li>
            <li>
              Support conservation efforts by tracking species diversity and
              population trends.
            </li>
            <li>
              Educate individuals about the rich biodiversity of ocean life and
              the importance of marine ecosystems.
            </li>
          </ul>
        </motion.div>
        <motion.div 
        variants={textRight()}
        initial="hidden"
        whileInView="show"
        // viewport={{ once: true, amount: 0.25 }}
        className="py-5">
          <h3 className="text-2xl font-semibold">How It Works</h3>
          <p>
            Our platform leverages computer vision and deep learning algorithms
            to analyze underwater images and videos, identifying species based
            on unique features such as shape, color, and movement. Users can:
          </p>
          <ul className="list-disc px-10">
            <li>Upload images of marine life.</li>
            <li>Receive instant species identification results.</li>
            <li>
              Access detailed insights about the detected species, including
              habitat, conservation status, and behavioral traits.
            </li>
          </ul>
        </motion.div>
        <motion.div 
        variants={textLeft()}
        initial="hidden"
        whileInView="show"
        // viewport={{ once: true, amount: 0.25 }}
        className="py-5">
          <h3 className="text-2xl font-semibold">Why Choose Our Platform?</h3>
          <ul className="list-disc px-10">
            <li>
              Accuracy & Speed: Our AI models are trained on extensive datasets,
              ensuring precise and fast identification.
            </li>
            <li>
              User-Friendly Interface: A seamless experience for both beginners
              and experts.
            </li>
            <li>
              Contribution to Science: By using our platform, you help enhance
              marine species databases and contribute to global conservation
              efforts.
            </li>
          </ul>
        </motion.div>
        <motion.div 
        variants={textRight()}
        initial="hidden"
        whileInView="show"
        // viewport={{ once: true, amount: 0.25 }}
        className="py-5">
          <h3 className="text-2xl font-semibold">
            Join Us in Protecting Marine Life
          </h3>
          <p>
            Be part of the movement to explore and safeguard ocean biodiversity.
            Whether you are a researcher, diver, or ocean enthusiast, our
            platform is here to assist you in learning more about the
            fascinating world beneath the waves. <br />
          </p>
        </motion.div>
        <motion.div 
        variants={textUp()}
        initial="hidden"
        whileInView="show"
        // viewport={{ once: true, amount: 0.25 }}
        className="text-center p-10">
          <span className="font-bold text-2xl uppercase">
            Start detecting species today and make a difference in marine
            conservation!
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default About;
