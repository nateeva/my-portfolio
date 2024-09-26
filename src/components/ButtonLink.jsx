export const ButtonLink = ({ text, icon, link, className, onClick, ...props}) => {
  return (
    <a href={link} onClick={onClick} {...props}>
      <div
        className={`flex items-center justify-center gap-2 px-4 py-2 border rounded-full font-raleway border-dark hover:border-b-2 w-full md:w-fit ${className}`}>
        {icon}{text}
      </div>
    </a>
  )
}
