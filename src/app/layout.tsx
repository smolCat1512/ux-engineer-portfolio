import Footer from "@/components/footer";
import "../app/globals.css";
import Header from "@/components/header";
import CaseStudies from "@/components/casestudies";
import About from "@/components/about";
import WhatAndHow from "@/components/what";
import Connect from "@/components/connect";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex-1 overflow-y-auto snap-y snap-mandatory">
          <section id="home" className="h-screen snap-start flex items-center justify-center">
            {children}
          </section>
          <section id="casestudies" className="h-screen snap-start flex items-center justify-center">
            <CaseStudies />
          </section>
          <section id="about" className="h-screen snap-start flex items-center justify-center">
            <About />
          </section>
          <section id="what-how" className="h-screen snap-start flex items-center justify-center">
            <WhatAndHow />
          </section>
          <section id="connect" className="h-screen snap-start flex items-center justify-center">
            <Connect />
          </section>
        <Footer />
        </main>
      </body>
    </html>
  );
}
