import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

export default function Connect() {
      const iconSize = 35;


  return (
    <div className="fixed bottom-4 bg-tertary rounded-3xl py-1 px-2 right-3 flex justify-between items-center">
      <div className="bg-accent/10 rounded-full m-1 flex justify-center items-center w-[60px] h-[60px]">
        <a  href="https://www.linkedin.com/in/stephanelubendo/" target="_blank">
        <IoLogoLinkedin size={iconSize} color="white" />
        </a>
      </div>
      <div className="bg-accent/10 rounded-full m-1 flex justify-center items-center w-[55px] h-[55px]">
        <a  href="https://github.com/slubendo" target="_blank">
          <IoLogoGithub size={iconSize} color="white" />
        </a>
      </div>
      <div className="bg-accent/10 rounded-full m-1 flex justify-center items-center w-[55px] h-[55px]">
        <a  href="https://www.instagram.com/stephanelubendo/" target="_blank">
           <IoLogoInstagram size={iconSize} color="white" />
        </a>
      </div>


    </div>
    )
} 