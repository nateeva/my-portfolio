import { Title } from "../Title";
import { CardWork } from "./CardWork";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import works from "../../../data/works.json";

export const Works = () => {
  const { t } = useTranslation("global");

  return (
    <div id="trabajos" className="bg-light lg:min-h-[100vh] flex flex-col justify-center items-center py-20 md:py-32 px-6 md:px-12">
      <Title style={{ textTransform: "capitalize", marginBottom:"1.5rem" }}>{t("banner.works")}</Title>
      <motion.div
        className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:justify-items-center"
        initial={{ scale: 0.8, opacity: 0 }}  // Animación inicial: escalar hacia abajo y opacidad 0
        whileInView={{ scale: 1, opacity: 1 }} // Animación en vista: escalar a tamaño normal y opacidad 1
        transition={{ duration: 0.5 }} // Duración de la animación
        viewport={{ once: true }} // Ejecuta una vez
      >
        {works.map((work, index) => (
          <CardWork 
            key={index}
            slug={work.slug}
            name={work.name}
            image={work.image}
            links={work.links}
            tecnologias={work.tecnologias}
            description={work.description} 
          />
        ))}
      </motion.div>
    </div>
  );
};
