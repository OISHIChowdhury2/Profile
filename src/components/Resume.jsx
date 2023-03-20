import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import oishi from "../assets/oishi.jpg";


const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I worked as a Trainee Software Engineer in Era Infotech.I am expertise in full-stack JavaScript development with experience using Node.js and Next.js. That's a valuable skill set in today's technology industry, as JavaScript continues to be one of the most popular programming languages for both front-end and back-end web development. As a full-stack developer, I have the ability to work on both the server-side and client-side of web applications, which makes me a valuable asset to any team. Node.js is a popular runtime environment that allows you to use JavaScript on the server side, while Next.js is a popular framework for building server-rendered React applications.
        Overall, my skills and experience in full-stack JavaScript development make me a valuable and versatile member of the tech community.
        <img
        src={oishi}
        // alt='web-development'
       className=' h-15 object-contain'
      />
      </motion.p>

  
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "Resume");
