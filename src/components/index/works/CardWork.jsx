import { useNavigate } from "react-router-dom";

export const CardWork = ({ slug, name, image, tecnologias }) => {
  const navigate = useNavigate();

  // Navegar a la página de detalle del trabajo
  const handleClick = () => {
    navigate(`/works/${slug}`);
  };

  return (
    <div
      className="relative w-full transition-transform duration-300 transform cursor-pointer group md:hover:-translate-y-3 md:h-72"
    >
      <div  onClick={handleClick} className="block md:hidden">
        {/* Imagen en la parte superior para mobile */}
        <img
          src={image}
          alt={`Imagen de proyecto ${name}`}
          className="object-cover object-top w-full h-48"
        />

        {/* Descripción visible debajo de la imagen */}
        <div className="p-4 text-dark font-raleway bg-accent">
          <h3 className="font-bold ">{name}</h3>
          <p className="text-sm">{tecnologias}</p>
        </div>
      </div>

      {/* Card original para pantallas más grandes */}
      <div
        className="relative hidden w-full h-full cursor-pointer md:block group"
        onClick={handleClick}
      >
        <img
          src={image}
          alt={`Imagen de proyecto ${name}`}
          className="object-cover object-top w-full h-full transition-opacity duration-300 opacity-50 group-hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center transition-opacity duration-300 text-dark font-raleway bg-accent bg-opacity-80 group-hover:opacity-0">
          <div>
            <h3 className="mb-2 text-xl font-bold">{name}</h3>
            <p className="font-medium">{tecnologias}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
