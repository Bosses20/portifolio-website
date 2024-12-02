import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] w-full items-center justify-center px-4 py-16 md:py-24">
      <motion.div 
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className="flex max-w-[600px] flex-col items-center justify-center gap-8 text-center"
      >
        <h1 className="text-4xl font-light sm:text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Wanna Chat?
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
          Feel free to reach out! I&apos;m always open to discussing new projects,
          creative ideas, or opportunities to be part of your visions.
        </p>
        <a 
          href="mailto:alexandermatthewstrilio6@gmail.com" 
          className="rounded-lg border border-indigo-600 bg-black/50 px-6 py-3
          text-base sm:text-lg font-semibold text-white shadow-lg shadow-indigo-700/50 
          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl 
          hover:shadow-indigo-600/50"
        >
          Send me an email
        </a>
      </motion.div>
    </div>
  )
}

export default Contact