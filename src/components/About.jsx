import React from "react";
// import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
    >
      <img
        src={icon}
        alt='web-development'
        className='w-16 h-16 object-contain'
      />

      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a professional Fullstack Developer with over 5 years of experience across Frontend, and Fullstack
        developer, I bring a deep and adaptable expertise to every project. My technical proficiency
        spans the MEAN and MERN stacks, enriched by a solid foundation in AWS, which enables me to design,
        develop, and deploy robust applications on scalable, modern architectures.
        <br className='sm:block hidden' />
        <br className='sm:block hidden' />
        Throughout my career, I’ve demonstrated versatility, thriving in diverse environments, from launching
        Minimum Viable Products (MVPs) and fueling startup initiatives to contributing within large-scale
        enterprise frameworks and successfully delivering on freelance projects. My journey is marked by a
        solution-oriented mindset, with a focus on seamless adaptability to project needs, which has consistently
        resulted in efficient, high-quality outcomes.
        <br className='sm:block hidden' />
        <br className='sm:block hidden' />
        One of my core strengths is my ability to communicate complex technical concepts clearly and foster
        alignment across multidisciplinary teams. I prioritize creating an environment of collaboration and
        empowerment, ensuring that every team member feels valued and motivated to deliver their best. My
        leadership style combines technical guidance with a proactive approach, enabling teams to navigate
        challenges and drive projects forward effectively.

        Whether guiding a startup through its initial stages or integrating seamlessly into established enterprise
        structures, I’m committed to delivering excellence and value. My portfolio reflects a proven track record
        of success, characterized by technical proficiency, strong leadership, and an unwavering commitment to
        innovation and project success.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <div className="w-full sm:w-1/2 lg:w-[47%]" key={`project-${index}`}>
            <ServiceCard key={service.title} index={index} {...service} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
