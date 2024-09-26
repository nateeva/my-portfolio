import { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

import { useTranslation } from 'react-i18next';


export const Navbar = ({ className }) => {
  // lenguaje
  const [t, i18n] = useTranslation("global")

  // Menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`font-raleway flex justify-between items-center ${className}`}>

      {/* Icono de hamburguesa o cerrar en mobile */}
      <div className="z-50 p-6 md:hidden">
        <button onClick={toggleMenu} className="relative text-3xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menú de navegación */}
      <ul
        className={`pt-20 pl-4 flex-col gap-4 absolute top-0 left-0 h-screen w-full bg-white transition-transform duration-300 ease-in-out transform  ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:static md:flex md:flex-row md:bg-transparent md:p-0 md:h-auto md:translate-x-0 z-40`}>

        <li className='mb-5'>
          <Link
            to="sobre-mi"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className='p-2 px-4 text-lg border border-transparent rounded-full cursor-pointer hover:border-dark md:text-base'
          >{t("banner.about")}
          </Link>
        </li>
        <li className='mb-5'>
          <Link
            to="trabajos"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className='p-2 px-4 text-lg border border-transparent rounded-full cursor-pointer hover:border-dark md:text-base'
          >{t("banner.works")}
          </Link>
        </li>
        <li className='mb-5'>
          <Link
            to="contacto"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className='p-2 px-4 text-lg border border-transparent rounded-full cursor-pointer hover:border-dark md:text-base'
          >{t("banner.contact")}
          </Link>
        </li>
        <div className='flex gap-2 px-4 mt-6 md:hidden'>
          <div
            onClick={() => i18n.changeLanguage("en")}
            className='cursor-pointer hover:font-bold'>EN</div>/
          <div
            onClick={() => i18n.changeLanguage("es")}
            className='cursor-pointer hover:font-bold'>ES</div>
        </div>

      </ul>

      <div className='hidden gap-2 -mt-4 md:flex'>
        <div
          onClick={() => i18n.changeLanguage("en")}
          className='cursor-pointer hover:font-bold'>EN</div>/
        <div
          onClick={() => i18n.changeLanguage("es")}
          className='cursor-pointer hover:font-bold'>ES</div>
      </div>

    </nav>
  );
};
