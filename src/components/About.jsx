import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import oishi from "../assets/oishi.jpg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
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
  </Tilt>
);

const About = () => {
  return (
    <>
   
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-[17px] max-w-6xl leading-[30px]  '
      >
<div class="flex flex-wrap -mx-2 w-full  m-auto p-4  inset-0 top-[10px]  ">
      <div class="w-full lg:w-1/2 px-2 ">
         <div class=" text-grey-dark flex items-center justify-center">
         I worked as a Trainee Software Engineer in Era Infotech.I am expertise in full-stack JavaScript
            development with experience using Node.js and Next.js. That's a valuable skill set in today's technology industry,
            as JavaScript continues to be one of the most popular programming languages for both front-end and back-end web development.
            As a full-stack developer, I have the ability to work on both the server-side and client-side of web applications, which makes me a valuable asset to any team. Node.js is a popular runtime environment that allows you to use JavaScript on the server side, while Next.js is a popular framework for building server-rendered React applications.
            Overall, my skills and experience in full-stack JavaScript development make me a valuable and versatile member of the tech community.

         </div>
      </div>

      
      <div class="w-full lg:w-1/2 px-2">
         <div class="text-grey-dark flex items-center justify-center">
         <img
              src={oishi}
              // alt='web-development'
              className='w-15 h-15 '
            />
         </div>
      </div>
   </div>



        {/* <div class="flex flex-wrap relative inset-0 top-[10px]  mx-auto">
          <div class="w-1/2 ">
            I worked as a Trainee Software Engineer in Era Infotech.I am expertise in full-stack JavaScript
            development with experience using Node.js and Next.js. That's a valuable skill set in today's technology industry,
            as JavaScript continues to be one of the most popular programming languages for both front-end and back-end web development.
            As a full-stack developer, I have the ability to work on both the server-side and client-side of web applications, which makes me a valuable asset to any team. Node.js is a popular runtime environment that allows you to use JavaScript on the server side, while Next.js is a popular framework for building server-rendered React applications.
            Overall, my skills and experience in full-stack JavaScript development make me a valuable and versatile member of the tech community.

          </div>
          <div class="w-1/2 ">
            <img
              src={oishi}
              // alt='web-development'
              className='w-15 h-15 '
            />
          </div>
        </div> */}


      </motion.p>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
