import { Title } from "../Title";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <div id="contacto" className="text-white bg-dark">
        <div className="max-w-5xl py-20 2xl:max-w-7xl flex mx-auto justify-end lg:h-[50vh] items-center">
          <motion.div
            className="px-6 md:px-12 md:w-1/2 text-end lg:px-0"
            initial={{ opacity: 0, x: 50 }}  // Cambiar a desplazamiento desde la derecha
            whileInView={{ opacity: 1, x: 0 }} // Animación en vista
            transition={{ duration: 0.5 }} // Duración de la animación
            viewport={{ once: true }} // Ejecuta una vez
          >
            <Title>{t(`contact-me.intro`)}</Title>
            <p className="mt-4 font-raleway">{t(`contact-me.text`)}</p>
          </motion.div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 py-3 bg-accent text-dark">
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 200 }}>
          <a href="mailto:nataliaemerlo@magil.com"><IoMdMail size={26} className="cursor-pointer" /></a>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 200 }}>
          <a href="https://github.com/nateeva" target="_blank"><FaGithub size={26} className="cursor-pointer" /></a>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 200 }}>
          <a href="https://www.linkedin.com/in/nataliaemerlo/" target="_blank"><FaLinkedin size={26} className="cursor-pointer" /></a>
        </motion.div>
      </div>
    </>
  );
};
