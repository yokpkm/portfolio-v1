// import { AboutSection } from "./about";
// import { ProjectSection } from "./project";
// import { ContactSection } from "./contact";
import FadeIn from "react-fade-in";

const AllSection = () => {
  return (
    <>
      <FadeIn transitionDuration={800} delay={100}>
        <a href="/PremkamonResume.pdf" target={"_blank"}>
          <button>Open</button>
        </a>
      </FadeIn>
    </>
  );
};

export default AllSection;
