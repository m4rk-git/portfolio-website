import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import { Carousel } from "react-carousel-minimal";

import { SectionWrapper } from "../hoc";

import { certificates } from "../constants";

const Certificates = () => {
  const captionStyle = {
    fontSize: "12px",
    padding: "22px",
    color: "white",
    left: "100%",
  };

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
        I completed several courses and certifications to improve my skills. The
        cybersecurity courses contain among other things: Basic Linux Commands,
        Web Application Security, Network Security and Python & Bash Scripting.
        The total duration of the cybersecurity courses was around 60 hours.
      </motion.p>
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="pt-5 pb-40"
      >
        <Carousel
          data={certificates}
          time={2000}
          radius="10px"
          height="100%"
          width="100%"
          slideNumber={false}
          captionPosition="bottom"
          automatic={false}
          captionStyle={captionStyle}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
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
