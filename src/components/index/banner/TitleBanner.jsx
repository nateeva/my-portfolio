import { useTranslation } from 'react-i18next';

export const TitleBanner = ({ className }) => {
  // lenguaje
  const [t, i18n] = useTranslation("global")
  return (
    <div className={`font-sora text-dark ${className}`}>
      <h1 className="mb-8 text-5xl font-semibold md:text-7xl">{t("banner.portfolio")}</h1>
      <div className="text-xl">
        <p>{t("banner.frontend_developer")}</p> 
        <p>{t("banner.web_designer")}</p> 
      </div>
    </div>
  )
}
