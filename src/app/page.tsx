import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import WhatAndHow from "@/components/What";
import Connect from "@/components/Connect";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <>
    <Header />
      <section id="case-studies" className="h-screen flex items-center justify-center pt-16">
        <CaseStudies />
      </section>
      <section id="about" className="h-screen flex items-center justify-center">
        <About />
      </section>
      <section id="what-how" className="h-screen flex items-center justify-center">
        <WhatAndHow />
      </section>
      <footer id="connect" className="h-screen flex items-center justify-center">
        <Connect />
      </footer>
    </>
  );
}
