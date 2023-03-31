import { motion } from "framer-motion";
import React from "react";
import Typed from "react-typed";

import { styles } from "../styles";
import { introduction } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#fca82a]" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#fca82a]">Mark</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typed
              strings={[
                "I'm a student.",
                "I'm a student consultant.",
                "I love Software Development.",
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop={true}
            />
          </p>
        </div>
      </div>
      <div className="">
        <img
          src={introduction}
          alt="Introduction"
          style={{
            position: "absolute",
            width: "850px",
          }}
          className="sm:px-16 px-6 sm:py-16 py-10 xl:right-64 top-56 "
        />
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
