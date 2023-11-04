import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full" options={{ max: 18 }}>
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full pink-orange-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />{" "}
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.3, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Hi, I am Mark. I am currently a student at the RWTH Aachen
                University. I am studying Computer Science for a bachelor's
                degree. Furthermore, I am part of my university consulting
                initiative, aixsolution e.V. As a consultant, I perform
                interesting projects in different fields, like IIot and industry
                4.0. As part of the digital resort at aixsolution, I am
                passionate about digitization and software development. I am
                also working on a few personal projects to learn and grow.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10 justify-between">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
