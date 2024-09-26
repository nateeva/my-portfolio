import { useNavigate } from "react-router-dom";

export const CardWork = ({ slug, name, image, tecnologias }) => {
  const navigate = useNavigate();

  // Navegar a la página de detalle del trabajo
  const handleClick = () => {
    navigate(`/works/${slug}`);
  };

  return (
    <div
      className="relative w-full h-[50vh] cursor-pointer md:h-72 group transform transition-transform duration-300 hover:-translate-y-3"
      onClick={handleClick}
    >
      {/* Imagen de fondo */}
      <img
        src={image}
        alt={`Imagen de proyecto ${name}`}
        className="object-cover object-top w-full h-full transition-opacity duration-300 opacity-50 group-hover:opacity-100"
      />

      {/* Descripción */}
      <div className="absolute inset-0 flex items-center justify-center p-4 text-center transition-opacity duration-300 text-dark font-raleway bg-accent bg-opacity-80 group-hover:opacity-0">
        <div>
          <h3 className="mb-2 text-xl font-bold">{name}</h3>
          <p className="font-medium">{tecnologias}</p>
        </div>
      </div>
    </div>
  );
};
