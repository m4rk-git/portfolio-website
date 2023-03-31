import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl h-auto"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact:</h3>
        <div className="text-white font-medium mb-8 ">
          <h3> Name </h3>
          <p className="bg-tertiary py-4 px-6 xl:w-[400px] placeholder:text-secondary text-white rounded-lg font-medium">
            Mark Domgörgen
          </p>
        </div>
        <div className="text-white font-medium mb-8">
          Email
          <p className="bg-tertiary py-4 px-6 xl:w-[400px] placeholder:text-secondary text-white rounded-lg font-medium">
            domgoergen.mark@gmail.com
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[400px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
