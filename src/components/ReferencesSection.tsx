import { trad } from "../lang/trad";
import { useLanguage } from "../contexts/LanguageContext";
import arrow from "../assets/arrow.png";
import { references } from "../data/references";
import RefCard, { IReference } from "./RefCard";

const ReferencesSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="references" className="px-6 md:px-12 py-8 grid">
      <h3 className="title self-start md:self-center">
        {trad[lang].references.title}
      </h3>
      <div>
        <div className="hidden min-[820px]:flex flex-col justify-end items-center ms-[50%] mb-2">
          <span className="rotate-[6deg] text-4xl handwritten me-[-1rem] cursor-default">
            {trad[lang].references.firstTip}
          </span>
          <img
            src={arrow}
            alt={trad[lang].general.arrowDown}
            className="size-16 rotate-[-90deg]"
          />
        </div>
        <div className="flex justify-evenly flex-wrap gap-y-6 md:gap-y-14 gap-x-8">
          {references.map((reference: IReference) => {
            return (
              <RefCard
                key={reference.name}
                name={reference.name}
                job={reference.job}
                company={reference.company}
                linkedIn={reference.linkedIn}
                picture={reference.picture}
                backgroundColor={reference.backgroundColor}
                classes={reference.classes}
                gender={reference.gender}
              />
            );
          })}
        </div>
        <div className="hidden min-[820px]:flex flex-col justify-end items-center me-[25%] mt-4">
          <img
            src={arrow}
            alt={trad[lang].general.arrowUp}
            className="size-16 rotate-90"
          />
          <span className="rotate-[6deg] text-4xl handwritten me-[-2rem] cursor-default">
            {trad[lang].references.secondTip}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
