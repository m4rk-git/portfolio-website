import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-10 flex flex-row flex-wrap justify-center gap-10"
      >
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <div className="text-center text-secondary text-[16px]">
              {technology.name}
            </div>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
