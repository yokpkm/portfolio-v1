import FadeIn from "react-fade-in";
import { AboutSection } from "./about";
import { ProjectSection } from "./project";
import { ContactSection } from "./contact";

const AllSection = () => {
  return (
    <>
      <FadeIn transitionDuration={800} delay={100}>
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </FadeIn>
    </>
  );
};

export default AllSection;
