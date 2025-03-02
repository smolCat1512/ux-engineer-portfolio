import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import WhatAndHow from "@/components/What";
import Connect from "@/components/Connect";
import Me from "@/components/Me";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <>
    <Header />
    <section id="me" className="h-screen flex items-start justify-center pt-36">
        <Me />
      </section>
      <section id="case-studies" className="h-screen flex items-start justify-center">
        <CaseStudies />
      </section>
      <section id="about" className="h-screen flex items-start justify-center">
        <About />
      </section>
      <section id="what-how" className="h-screen flex items-start justify-center">
        <WhatAndHow />
      </section>
      <footer id="connect" className="h-screen flex items-start justify-center">
        <Connect />
      </footer>
    </>
  );
}
