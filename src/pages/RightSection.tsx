import About from "../components/about";
import Project from "../components/project";
import Contact from "./Contact";
import Footer from "./Footer";

export default function RightSection() {
  return (
    <>
      <div className="mx-auto max-w-full pt-10 lg:pl-[25%] lg:visible">
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
