import { trad } from "../lang/trad";
import { useLanguage } from "../contexts/LanguageContext";
import { FaQuoteRight, FaLinkedin } from "react-icons/fa";

export interface IReference {
  name: string;
  job: string;
  company: string;
  linkedIn: string;
  picture: string;
  backgroundColor: string;
  classes: string;
  gender: string;
}

const RefCard = ({
  name,
  job,
  company,
  linkedIn,
  picture,
  backgroundColor,
  classes,
  gender,
}: IReference) => {
  const { lang } = useLanguage();

  return (
    <div key={name} className={`${backgroundColor} ref-card`}>
      <FaQuoteRight className="size-10" aria-hidden={true} />
      <div className="flex justify-between mt-4">
        <div>
          <h4 className="text-xl font-semibold">{name}</h4>
          <h5 className="flex gap-x-2">
            {job} at {company}
            <a
              rel="noopener noreferrer"
              href={linkedIn}
              target="_blank"
              className="md:hidden"
            >
              <FaLinkedin className="size-5" />
            </a>
          </h5>
        </div>
        <img
          src={picture}
          alt={name}
          className={`size-16 rounded-full grayscale mt-[-40px] border-2 ${classes}`}
        />
      </div>
      <p className="hidden md:block mt-4">
        {gender === "M"
          ? trad[lang].references.contactHim
          : trad[lang].references.contactHer}
        <a
          href={linkedIn}
          target="_blank"
          className="font-semibold underline underline-offset-4 decoration-2 leading-7 motion-safe:hover:text-lg duration-300"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
};

export default RefCard;
