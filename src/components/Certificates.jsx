import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import { Carousel } from "react-carousel-minimal";

import { SectionWrapper } from "../hoc";

import { certificates } from "../constants";
import { badges } from "../constants";

const Badge = ({ index, title, image }) => {
  return (
    <Tilt className="xs:w-[300px] w-full" options={{ max: 18 }}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full pink-orange-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary py-2 rounded-[20px] flex justify-evenly items-center flex-col"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </Tilt>
  );
};

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I additionally learned</p>
        <h2 className={styles.sectionHeadText}>Certificates</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <span className={styles.sectionTopic}> Process Mining - </span>
        The courses by Celonis covered the topics of process mining, which I
        attended additionally to my university course in "Business Process
        Intelligence". The courses contained an introduction to Process Mining,
        Execution Management System, and PQL. Furthermore, I learned how to use
        Celonis and its tools through different examples and finished the course
        with an example case study. The total duration of the Process Mining
        courses was around 11 hours.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-20">
        {badges.map((badge, index) => (
          <Badge key={badge.name} index={index} {...badge} />
        ))}
      </div>

      <motion.p
        variants={fadeIn("", "", 1, 1)}
        className="mt-24 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <span className={styles.sectionTopic}> Cyber Security - </span> The
        cybersecurity courses contain among other things: Basic Linux Commands,
        Web Application Security, Network Security, Industry standard
        penetration testing tools, Identifying and exploiting different network
        services and Python & Bash Scripting. The total duration of the courses
        was around 60 hours.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "", 1, 0.75)}
        className="pt-1 pb-32 flex justify-center items-center"
      >
        <Carousel
          data={certificates}
          time={2000}
          radius="10px"
          height="100%"
          width="800px"
          slideNumber={false}
          captionPosition="bottom"
          automatic={false}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="#050816"
          slideImageFit="contain"
          thumbnails={true}
          thumbnailWidth="150px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Certificates, "");
