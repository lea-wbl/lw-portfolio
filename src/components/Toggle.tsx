import "../styles/toggle.css";
import { useLanguage } from "../contexts/LanguageContext";

const Toggle = () => {
  const { lang, storeLang } = useLanguage();

  const changeLang = () => {
    storeLang(lang === "fr" ? "en" : "fr");
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={lang === "fr"}
        onChange={() => changeLang()}
      />
      <span className="slider"></span>
      <span className="labels" data-left="FR" data-right="EN"></span>
    </label>
  );
};

export default Toggle;
