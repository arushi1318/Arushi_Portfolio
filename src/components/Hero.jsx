import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {

  
  return (
    <section className={`relative w-full mx-auto py-20`}>
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-28 md:mt-5 lg:5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey there! I'm <span className='text-[#915EFF]'>Arushi Gupta</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            B.Tech IT ’26 | RLHF Code Specialist | AI/ML & Aspiring Software Engineer
          </p>
          <p className="mt-2 text-secondary text-lg max-w-2xl">
          Building reliable software systems and integrating practical AI/ML solutions to enhance user experience and automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
