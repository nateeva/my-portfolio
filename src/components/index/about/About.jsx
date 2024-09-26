import { motion } from 'framer-motion';
import fotoPerfil from "../../../assets/images/foto_perfil.png";
import { Title } from "../Title";
import { Tecnologias } from "./Tecnologias";
import { useTranslation } from 'react-i18next';

export const About = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <div id="sobre-mi" className="text-white bg-dark">
        <div className="max-w-5xl 2xl:max-w-7xl md:flex mx-auto lg:h-[100vh] items-center px-6 md:px-12 lg:px-0 py-20 gap-12">
          <div>
            
            {/* Animación en el título y texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Title>{t('about_me.hello')}</Title>
              <p className="mt-4 font-raleway">{t('about_me.intro')}</p>
              <p className="mt-4 font-raleway">{t('about_me.passion')}</p>
              <p className="mt-4 font-raleway">{t('about_me.goal')}</p>
              <p className="mt-4 font-raleway">{t('about_me.invitation')}</p>
            </motion.div>
          </div>

          <div className="flex justify-center mt-12 md:justify-end md:w-3/4">
          
            {/* Animación en la imagen */}
            <motion.img
              src={fotoPerfil}
              className="max-w-60"
              alt={t('about_me.profile_picture_alt')}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>
      </div>

      <Tecnologias />
    </>
  );
}
