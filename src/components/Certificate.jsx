import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({
  index,
  name,
  image,
  link,
  live_url

}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="relative w-full h-[230px] rounded-2xl overflow-hidden">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
        <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
          {live_url && (
            <div
              onClick={() => window.open(live_url, "_blank")}
              className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md transform hover:scale-110 transition-transform"
            >
              <img
                src="https://img.icons8.com/ios/452/link.png" // Link icon (can be replaced with your choice)
                alt="live_url"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
      </div>
    </motion.div>
  );
};

const Certificate = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following certifications highlight my expertise and dedication to continuous learning. Each certification is briefly described, showcasing the skills and knowledge gained. These credentials reflect my ability to adapt to new challenges, master diverse technologies, and uphold professional standards in my field.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {certificates.map((project, index) => (
          <div className="w-full sm:w-1/2 lg:w-[48%]" key={`project-${index}`}>
            <CertificateCard index={index} {...project} />
          </div>
        ))}
      </div>


    </>
  );
};

export default SectionWrapper(Certificate, "certificate");
