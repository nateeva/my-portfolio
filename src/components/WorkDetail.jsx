import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

// data
import works from "../data/works.json";

// librerías
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useTranslation } from "react-i18next";
import { BiWorld } from "react-icons/bi";
import { FiX } from 'react-icons/fi';
import { motion } from 'framer-motion'; // Importar motion

// componentes
import { ButtonLink } from "./ButtonLink";

// ---------

export const WorkDetail = () => {
  const { t } = useTranslation("global");
  const { slug } = useParams();
  const navigate = useNavigate();

  const work = works.find((work) => work.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = () => {
    navigate("/");
    setTimeout(() => {
      const trabajosSection = document.getElementById("trabajos");
      if (trabajosSection) {
        trabajosSection.scrollIntoView();
      }
    }, 0);
  }

  return (
    <div className="py-16 bg-light min-h-[100vh] px-6 md:px-12">
      {
        work ? (
          <div className="max-w-6xl mx-auto md:flex">
            <div className="md:w-1/2">
              <div className="justify-end hidden w-full -mt-6 cursor-pointer md:flex">
                <FiX
                  size={26}
                  onClick={handleClose}
                />
              </div>
              <motion.div
                className="sticky top-0 space-y-5 md:pt-10 md:mt-8 md:pl-16 bg-light"
                initial={{ y: -40, opacity: 0 }} // Cambiado a 40px arriba y opacidad 0
                whileInView={{ y: 0, opacity: 1 }} // Vuelve a su posición original y opacidad 1
                transition={{ duration: 0.7 }} // Duración de la animación aumentada
                viewport={{ once: true }} // Ejecuta una vez
              >
                <h2 className="text-4xl font-bold md:text-5xl font-sora">{work.name}</h2>
                <p className="inline-block px-5 italic font-medium font-sora bg-accent">
                  {work.tecnologias}
                </p>
                <p className="font-raleway">{t(`works.${slug}.paragraph1`)}</p>
                <p className="font-raleway">{t(`works.${slug}.paragraph2`)}</p>

                <div className="flex flex-col gap-4 mt-8 md:flex-row">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }} // Efecto de rebote en hover
                    transition={{ duration: 0.2 }}
                  >
                    <ButtonLink
                      text={t(`buttons.view-project`)}
                      icon={<BiWorld size={27} />}
                      link={work.link}
                      target="_blank" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col gap-8 mt-12 md:w-1/2 md:order-first md:mt-0">
              {
                Object.values(work.imageDetail).map((image, index) => (
                  <Zoom key={index}>
                    <motion.div
                      className="relative overflow-hidden transition-transform transform rounded-lg shadow-2xl hover:scale-105"
                      initial={{ scale: 0.8, opacity: 0 }} // Escala inicial y opacidad
                      whileInView={{ scale: 1, opacity: 1 }} // Escala final y opacidad
                      transition={{ duration: 0.5, delay: index * 0.2 }} // Retraso basado en el índice
                      viewport={{ once: true }}
                    >
                      {/* Marco simulado */}
                      <img
                        src={image}
                        alt={t(`works.${slug}.alt`)}
                        className="object-cover w-full h-[45vh] md:h-[60vh] object-top cursor-pointer"
                      />
                      <div className="absolute inset-0 bg-white rounded-lg pointer-events-none opacity-10"></div> {/* Reflejo */}
                    </motion.div>
                  </Zoom>
                ))
              }
            </div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }} // Efecto de rebote en hover
              transition={{ duration: 0.2 }}
            >
              <ButtonLink
                text="Volver a Inicio"
                onClick={handleClose}
                className="mt-8 text-lg cursor-pointer md:hidden" />
            </motion.div>

          </div>
        ) : (
          <div className="max-w-5xl mx-auto font-sora">
            <div className="space-y-4">
              <p className="text-4xl font-semibold">Ups!</p>
              <p className="text-xl">{t(`works.not-found`)}</p>
            </div>

            <ButtonLink
              text={t(`buttons.back-home`)}
              link="/"
              className="mt-4 text-lg cursor-pointer"
            />
          </div>
        )
      }
    </div>
  );
};
