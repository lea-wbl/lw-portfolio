import Header from "../components/Header";
import ScrollIndicator from "../components/ScrollIndicator";
import IntroductionSection from "../components/IntroductionSection";
import ResumeSection from "../components/ResumeSection";
import ReferencesSection from "../components/ReferencesSection";
import ContactSection from "../components/ContactSection";
import SkillsSection from "../components/SkillsSection";

function Home() {
  return (
    <div className="main-container">
      <Header />

      <ScrollIndicator />

      <IntroductionSection />

      <ResumeSection />

      <SkillsSection />

      <ReferencesSection />

      <ContactSection />
    </div>
  );
}

export default Home;
