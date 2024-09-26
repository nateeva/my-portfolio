import { IconTecnologia } from './IconTecnologia'

import { FaCss3Alt, FaHtml5, FaLaravel, FaWordpress, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";


export const Tecnologias = () => {
  const tecnologias = [
    { icon: <FaCss3Alt size={30} />, text: "CSS" },
    { icon: <IoLogoJavascript size={30} />, text: "JavaScript" },
    { icon: <FaHtml5 size={30} />, text: "html" },
    { icon: <RiTailwindCssFill size={30} />, text: "Tailwind" },
    { icon: <FaLaravel size={30} />, text: "Laravel" },
    { icon: <FaWordpress size={30} />, text: "Wordpress" },
    { icon: <FaReact size={30} />, text: "React.js" },
    { icon: <FaGitAlt size={32} />, text: "Git" },
    { icon: <FaFigma size={30} />, text: "Figma" },
    { icon: <SiAdobeillustrator size={30} />, text: "Illustrator" },
    { icon: <SiAdobephotoshop size={30} />, text: "Photoshop" },
  ]

  // scroll infinito de tecnologias
  const tecnologiasInfinito = [...tecnologias, ...tecnologias, ...tecnologias];
  
  return (
    <div className='py-8 overflow-hidden md:py-12 bg-accent'>
      <div className='flex items-center justify-center gap-16 scroll-horizontal'>
        {tecnologiasInfinito.map((tecnologia, index) => (
          <IconTecnologia
            key={index}
            icon={tecnologia.icon}
            text={tecnologia.text}
          />
        ))}   
      </div>
    </div>
  )
}
