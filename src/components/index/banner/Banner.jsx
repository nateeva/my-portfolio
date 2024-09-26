import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { TitleBanner } from './TitleBanner';
import { useTranslation } from 'react-i18next';

export const Banner = () => {
  const [t] = useTranslation("global");

  return (
    <div className="md:flex justify-between md:h-[100vh] border-b-8 border-dark">
      
      <div className="flex flex-col justify-between w-full md:py-12 bg-light h-[60vh] md:h-full">
        {/* Navbar sin animación en el contenedor */}
        {/* <motion.div
         
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        > */}
          <Navbar   className="md:w-[80%] md:mx-auto"/>

        {/* TitleBanner con animación en el texto */}
        <motion.div
          className="md:w-[80%] md:mx-auto px-6 pb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <TitleBanner />
        </motion.div>
      </div>

      <div className="h-[40vh] md:h-full md:w-1/2 md:order-first">
        <img
          src="/assets/images/background_2.png"
          alt={t("banner.background_shapes")}
          className='object-cover object-right-top w-full h-full'
        />
      </div>
    </div>
  );
}
