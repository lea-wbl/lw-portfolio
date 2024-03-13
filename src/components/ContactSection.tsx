import { trad } from "../lang/trad";
import { useLanguage } from "../contexts/LanguageContext";
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from "react-icons/fa";
import contact from "../assets/contact.webp";

const ContactSection = () => {
  const { lang } = useLanguage();

  return (
    <section
      id="contact"
      className="px-6 sm:px-24 py-8 bg-orange-100 flex justify-around md:items-center flex-wrap-reverse relative"
    >
      <div className="rounded-full md:size-96 md:bg-white grid content-center justify-items-center md:border-4 aspect-square">
        <img
          src={contact}
          alt={trad[lang].general.happyTeam}
          className="w-4/5 absolute md:static bottom-4 right-0"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-5xl pb-3 title w-[9ch] md:w-fit">
          {trad[lang].contact.title}
        </h2>
        <p className="text-xl md:leading-8">{trad[lang].contact.paragraph}</p>
        <div className="flex mt-4 gap-4 items-end">
          <a
            rel="noopener noreferrer"
            href="mailto:lwbl.portfolio@gmail.com"
            title="Send me an email"
          >
            <FaEnvelopeSquare className="size-10 md:size-8 motion-safe:hover:scale-125 duration-300" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/léa-weibel/"
            target="_blank"
            title="Connect on LinkedIn"
          >
            <FaLinkedin className="size-10 md:size-8 motion-safe:hover:scale-125 duration-300" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://github.com/lea-wbl"
            target="_blank"
            title="Check out my code blocks"
          >
            <FaGithubSquare className="size-10 md:size-8 motion-safe:hover:scale-125 duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
