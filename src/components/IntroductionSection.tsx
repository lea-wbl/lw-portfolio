import { trad } from "../lang/trad";
import { useLanguage } from "../contexts/LanguageContext";
import me from "../assets/me.png";
import arrow from "../assets/arrow.png";

const IntroductionSection = () => {
  const { lang } = useLanguage();

  return (
    <section
      id="introduction"
      className="bg-orange-300 flex justify-around items-center px-6 sm:px-24 py-8 flex-wrap"
    >
      <div className="flex gap-4">
        <div className="size-40 md:size-80">
          <img
            src={me}
            alt={trad[lang].introduction.alt}
            className="scale-x-[-1] border-4 rounded-full"
          />
        </div>
        <div className="hidden sm:flex flex-col justify-end">
          <img
            src={arrow}
            alt={trad[lang].general.arrowLeft}
            className="size-24"
          />
          <span className="rotate-[-6deg] text-4xl handwritten me-[-2rem] cursor-default">
            {trad[lang].introduction.tip}
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-5xl pb-3 title w-[9ch] md:w-fit">
          {trad[lang].introduction.title}
        </h2>
        <p className="text-xl md:leading-8">
          {trad[lang].introduction.firstParagraph}
          <br />
          {trad[lang].introduction.secondParagraph}
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection;
