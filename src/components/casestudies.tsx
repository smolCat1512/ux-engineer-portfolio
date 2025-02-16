import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  {
    title: "Project Shelter",
    description:
      "A redesign of a major e-commerce platform to improve UX and conversion rates.",
    year: "2024",
    image: "/images/project-alpha.jpg",
    slug: "../casestudies/shelter",
  },
  {
    title: "Project NFCC",
    description:
      "Optimizing a SaaS dashboard for better usability and efficiency.",
    year: "2023",
    image: "/images/project-beta.jpg",
    slug: "../casestudies/nfcc",
  },
];

export default function CaseStudies() {

  return (
    <section id="case-studies" className="space-y-12 p-8 hi-screen flex-1">
      {caseStudies.map((study) => (
        <div
          key={study.slug}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        >
          {/* Left Side - Text */}
          <div>
            <h2 className="text-3xl font-bold">{study.title}</h2>
            <p className="text-gray-300">{study.description}</p>
            <p className="text-gray-400 mt-2">{study.year}</p>
            <Link
              href={`/case-studies/${study.slug}`}
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              View Case Study
            </Link>
          </div>
          {/* Right Side - Image */}
          <div>
            <Image
              src={study.image}
              alt={study.title}
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </section>
  );

  // <section className="hi-screen flex-1 p-4">Case Studies</section>;
}
