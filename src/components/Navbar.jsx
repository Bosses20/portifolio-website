import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs"


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => setIsOpen(!isOpen);

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white 
    backdrop-blur md:justify-evenly">
      <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold
      transition-all duration-300 hover:opacity-100">Alexander</a>

      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Home</a>

        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Tech</a>

        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Projects</a>
        
        <button 
          onClick={scrollToContact}
          className="cursor-pointer rounded-lg border border-indigo-600 bg-black/50 px-4 py-1
          text-white shadow-md shadow-indigo-700/50 transition-all duration-300 
          hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-600/50"
        >
          Let&apos;s Chat
        </button>

          

         

        
      </ul>

      <ul className="hidden md:flex gap-5">
        <li>
          <a 
            href="https://www.instagram.com/gadgetplug.shop?igsh=ZGh1YmlkcHJjc2dw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
          >
            <BsInstagram />   
          </a>
        </li>

        <li>
          <a 
            href="https://www.linkedin.com/in/alexander-matthew-strilio-06580233b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
          >
            <BsLinkedin />   
          </a>
        </li>

        <li>
          <a 
            href="https://www.tiktok.com/@gadgetplug.rf.gd?_t=8rsGkphwvoU&_r=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
          >
            <BsTiktok />   
          </a>
        </li>

        <li>
          <a 
            href="https://github.com/Bosses20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
          >
            <BsGithub />   
          </a>
        </li>

      </ul>
        
      {isOpen ?(
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl"  onClick={menuOpen} />
      )}  


      {isOpen && (
        <div className='fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 
        bg-black/90 p-12 ${isOpen ? "block" : "hidden"}'>

        <ul className="flex flex-col gap-8"><a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Home</a>

        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Tech</a>

        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Projects</a>
        
          <button 
            onClick={scrollToContact}
            className="cursor-pointer rounded-lg border border-indigo-600 bg-black/50 px-4 py-1
            text-white shadow-md shadow-indigo-700/50 transition-all duration-300 
            hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-600/50"
          >
            Let&apos;s Chat
          </button>
        </ul>

        <ul className="flex flex-wrap gap-5">
        <li>
          <a 
            href="https://www.instagram.com/gadgetplug.shop?igsh=ZGh1YmlkcHJjc2dw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
          >
            <BsInstagram />   
          </a>
        </li>

        <li>
          <a 
            href="https://www.linkedin.com/in/alexander-matthew-strilio-06580233b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
          >
            <BsLinkedin />   
          </a>
        </li>

        <li>
          <a 
            href="https://www.tiktok.com/@gadgetplug.rf.gd?_t=8rsGkphwvoU&_r=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
          >
            <BsTiktok />   
          </a>
        </li>

        <li>
          <a 
            href="https://github.com/Bosses20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
          >
            <BsGithub />   
          </a>
        </li>

      </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar