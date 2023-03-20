import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-15 rounded-3xl xs:w-[320px] w-full'
>
    {/* <p className='text-white font-black text-[48px]'>"</p> */}

      {/* <p className='text-white tracking-wider text-[18px]'>{testimonial}</p> */}
      <div className='mt-5 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <img
          src={image}
          // alt={`feedback_by-${name}`}
          // className='w-10 h-10 rounded-full object-cover'
        />
        </div> 
      </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-4 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Achievement</h2>
        </motion.div>
      </div>
      <div className={`-mt-10 pb-14 ${styles.paddingX} flex flex-wrap gap-5`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "achievement");
