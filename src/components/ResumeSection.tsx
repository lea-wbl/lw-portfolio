import { trad } from "../lang/trad";
import { useLanguage } from "../contexts/LanguageContext";
import Brick from "../components/Brick";
import { useEffect, useState } from "react";

const ResumeSection = () => {
  const { lang } = useLanguage();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const animatedSection: any = document.querySelector("#resume");
    let timeoutId: any = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !prefersReducedMotion) {
            timeoutId = setTimeout(() => setAnimate(true), 500);
            setTimeout(() => setAnimate(false), 2000);
          } else {
            clearTimeout(timeoutId);
          }
        });
      },
      { threshold: 1.0 }
    );

    observer.observe(animatedSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="resume"
      className="flex px-12 py-8 flex-wrap justify-around items-center"
    >
      <div className="flex flex-col content-between items-center w-full sm:w-3/4 lg:w-1/3">
        <h3 className="self-start title sm:ms-[-4rem] mb-5 md:mb-14">
          {trad[lang].resume.experience}
        </h3>
        <Brick
          title="FRONT-END DEVELOPER"
          subtitle="Wobee - Paris, FR"
          startDate="déc. 2023"
          endDate="mars 2024"
          animate={animate}
          position="top"
        />
        <Brick
          title="FULLSTACK DEVELOPER"
          subtitle="UMI - Lyon, FR"
          startDate="mars 2022"
          endDate="nov. 2023"
          animate={animate}
          position="bottom"
        />
      </div>

      <div className="flex flex-col items-center w-full sm:w-3/4 lg:w-1/3">
        <h3 className="self-start title sm:ms-[-4rem] mb-5 md:mb-14">
          {trad[lang].resume.education}
        </h3>
        <Brick
          title={trad[lang].resume.apprenticeship}
          subtitle="Wild Code School"
          startDate="mars 2022"
          endDate="mars 2023"
          animate={animate}
          position="top"
        />
        <Brick
          title={trad[lang].resume.initialCourse}
          subtitle="Wild Code School"
          startDate="sept. 2021"
          endDate="fév. 2022"
          animate={animate}
          position="bottom"
        />
      </div>
    </section>
  );
};

export default ResumeSection;
