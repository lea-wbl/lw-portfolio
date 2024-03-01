import { trad } from "../lang/trad";
import { useLanguage } from "../contexts/LanguageContext";

function Luv() {
  const { lang } = useLanguage();
  return (
    <span className="text-xl text-red-600 font-black ">
      {trad[lang].home.title}
    </span>
  );
}

export default Luv;
