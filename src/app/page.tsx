import CaseStudies from "@/components/casestudies";
import About from "@/components/about";
import WhatAndHow from "@/components/what";
import Connect from "@/components/connect";
import Header from "@/components/header";

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
