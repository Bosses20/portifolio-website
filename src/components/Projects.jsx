import PropTypes from 'prop-types'
import image1 from "/public/1.jpg"
import image2 from "/public/2.jpg"
import image3 from "/public/3.jpg"
import image4 from "/public/4.jpg"
import image5 from "/public/5.png"
import { motion } from "framer-motion"

const projectsData = [
  {
    image: image1,
    title: "Merchworks e-commerce website",
    description: "A fully functional e-commerce website built with webflow, Stripe, and custom CSS.",
    link: "https://www.merchworks.co/",
    technologies: ["Webflow", "Stripe", "CSS"]
  },
  {
    image: image2,
    title: "Apple Watch Landing Page",
    description: "A landing page for the Apple Watch built with webflow, shopify, and custom CSS showcasing Apples sleek and minimalistic designs.",
    link: "https://apple-watch-collection.webflow.io/",
    technologies: ["Webflow", "Shopify", "CSS"]
  },
  {
    image: image3,
    title: "Driftwood Portifolio Landing Page",
    description: "A responsive landing page for a local business built with webflow, showcasing the beauty of their services.",
    link: "https://www.driftwoodhtx.com/",
    technologies: ["Webflow", "CSS"]
  },
  {
    image: image4,
    title: "Curnon Watch e-commerce website",
    description: "A fully functional e-commerce website built with shopify, featuring a sleek and minimalistic design for a watch company.",
    link: "https://curnonwatch.com/",
    technologies: ["Shopify", "CSS"]
  },
  {
    image: image5,
    title: "Yoda Bike e-commerce website",
    description: "A fully functional e-commerce website built with webflow, detailed product pages, secure payment integration, and a sleek and minimalistic responsive design tailored for cycling enthusiasts.",
    link: "https://yoda-bike.webflow.io/",
    technologies: ["Webflow", "CSS"]
  }
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{opacity:0, y:100}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.8}}
    >
      {children}
    </motion.div>
  )
}

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired
}

const ProjectCard = ({projects}) => {
  return (
    <ScrollReveal>
    <a 
      href={projects.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="cursor-pointer no-underline text-white w-full"
    >
      <div className="flex flex-col items-center gap-8 p-4 md:flex-row md:gap-12 lg:gap-16">
        <img 
          src={projects.image} 
          alt="" 
          className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] cursor-pointer rounded-2xl 
          transition-all duration-300 hover:scale-105" 
        />
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{projects.title}</div>
            <p className="text-gray-400">{projects.description}</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {projects.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black/50 px-3 py-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
    </ScrollReveal>
  );
};

ProjectCard.propTypes = {
  projects: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired
  }).isRequired
};

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen flex-col items-center justify-center gap-16 p-4 md:px-14
     md:py-24">
      <ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>
      
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} projects={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects