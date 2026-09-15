import PageBox from "@/components/core/PageBox";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

const Home = () => {
  return (
    <PageBox>
      <Hero id="hero" />
      <About id="about" />
      <Experience id="experience" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </PageBox>
  );
};

export default Home;
