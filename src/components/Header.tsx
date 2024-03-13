import { trad } from "../lang/trad";
import { useLanguage } from "../contexts/LanguageContext";
import Toggle from "../components/Toggle";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Header = () => {
  const { lang } = useLanguage();
  const { width } = useWindowDimensions();

  return (
    <header>
      <a href="#introduction" className="logo" aria-label="Logo">
        {width < 640 ? "LW" : "Léa Weibel"}
      </a>
      <div className="flex justify-between items-center">
        <Toggle />
        <button
          aria-label="Get to contact section"
          onClick={() => (window.location.href = "#contact")}
        >
          {trad[lang].general.contactBtn}
        </button>
      </div>
    </header>
  );
};

export default Header;
