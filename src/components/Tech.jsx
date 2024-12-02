import { BiLogoTypescript, BiLogoReact, BiLogoDocker, BiLogoTailwindCss, BiLogoNodejs } from "react-icons/bi"
import { SiNextdotjs, SiWebflow, SiWordpress, SiShopify, SiSquarespace, SiWix } from "react-icons/si"
import {motion} from "framer-motion"

const Tech = () => {
  const variants = {
    hidden: { opacity: 0 , y: 50},
    visible: { opacity: 1 , y: 0},
  }
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-slide">
          <div className="flex min-w-full justify-around gap-4 p-5 md:gap-8 lg:gap-10">
            <BiLogoTypescript className="cursor-pointer text-[40px] text-sky-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <BiLogoReact className="cursor-pointer text-[40px] text-orange-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <SiNextdotjs className="cursor-pointer text-[40px] text-white transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <BiLogoDocker className="cursor-pointer text-[40px] text-blue-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <BiLogoTailwindCss className="cursor-pointer text-[40px] text-sky-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <BiLogoNodejs className="cursor-pointer text-[40px] text-green-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
          </div>
          {/* First set duplicate */}
          <div className="flex min-w-full justify-around gap-4 p-5 md:gap-8 lg:gap-10">
            <BiLogoTypescript className="cursor-pointer text-[40px] text-sky-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <BiLogoReact className="cursor-pointer text-[40px] text-orange-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <SiNextdotjs className="cursor-pointer text-[40px] text-white transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <BiLogoDocker className="cursor-pointer text-[40px] text-blue-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <BiLogoTailwindCss className="cursor-pointer text-[40px] text-sky-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <BiLogoNodejs className="cursor-pointer text-[40px] text-green-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
          </div>
        </div>

        {/* Second row */}
        <div className="flex animate-slide2 mt-8">
          <div className="flex min-w-full justify-around gap-4 p-5 md:gap-8 lg:gap-10">
            <SiWebflow className="cursor-pointer text-[40px] text-yellow-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <SiWordpress className="cursor-pointer text-[40px] text-blue-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <SiShopify className="cursor-pointer text-[40px] text-green-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <SiSquarespace className="cursor-pointer text-[40px] text-white transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <SiWix className="cursor-pointer text-[40px] text-yellow-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
          </div>
          {/* Second set duplicate */}
          <div className="flex min-w-full justify-around gap-4 p-5 md:gap-8 lg:gap-10">
            <SiWebflow className="cursor-pointer text-[40px] text-yellow-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <SiWordpress className="cursor-pointer text-[40px] text-blue-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <SiShopify className="cursor-pointer text-[40px] text-green-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <SiSquarespace className="cursor-pointer text-[40px] text-white transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
            <SiWix className="cursor-pointer text-[40px] text-yellow-400 transition-all duration-300 
            hover:-translate-y-5 sm:text-[60px] md:text-[80px] lg:text-[100px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech