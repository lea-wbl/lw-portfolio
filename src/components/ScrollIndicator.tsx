import "../styles/ScrollIndicator.css";
import { trad } from "../lang/trad";
import { useLanguage } from "../contexts/LanguageContext";
import { sections } from "../data/sections";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const { lang } = useLanguage();
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.8 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="scroll-indicator" role="navigation">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          aria-label={trad[lang].general[section]}
          className={`${activeSection === section && "active"}`}
        ></a>
      ))}
    </div>
  );
};

export default ScrollIndicator;
