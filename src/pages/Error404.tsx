import { trad } from "../lang/trad";
import { useLanguage } from "../contexts/LanguageContext";

function Error404() {
  const { lang } = useLanguage();
  return (
    <div>
      <span className="text-xl font-black ">{trad[lang].error404.title}</span>
    </div>
  );
}

export default Error404;
