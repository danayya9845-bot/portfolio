import { useEffect } from "react";
import FadeWrapper from "../components/animations/FadeWrapper";

// Client project screenshots
const clientImages = [
  { src: "/images/saas.png", title: "SaaS Platform" },
  { src: "/images/edumeeting.png", title: "Education Website" },
  { src: "/images/kidkinder.png", title: "Startup Landing Page" },
];

// Process steps
const processSteps = [
  { title: "Discovery", description: "Understanding your business, goals, and users", fade: { direction: "up", delay: "100" } },
  { title: "Planning", description: "Architecture, roadmap, and tech stack decisions", fade: { direction: "left", delay: "200" } },
  { title: "Design", description: "Modern UI/UX focused on clarity and conversions", fade: { direction: "right", delay: "300" } },
  { title: "Development", description: "Clean, scalable, and performance-driven code", fade: { direction: "up", delay: "400" } },
  { title: "Testing", description: "Cross-device testing and performance optimization", fade: { direction: "left", delay: "500" } },
  { title: "Launch & Support", description: "Smooth deployment and long-term support", fade: { direction: "right", delay: "600" } },
];

// Why work with me
const reasons = [
  "Agency-quality work without agency overhead",
  "Clear communication & transparent process",
  "Conversion-focused UI & performance-first code",
  "Reliable timelines & professional delivery",
  "Long-term partnership mindset",
];

export default function Process() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          How I Turn Ideas Into High-Impact Products
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A proven, agency-level process focused on business goals, clean design, and scalable development.
        </p>
      </div>

      {/* Client Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-24">
        {clientImages.map((project, idx) => (
          <FadeWrapper key={idx} direction="up" duration="700" delay={`${idx * 150}`}>
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              
              {/* Browser Top Bar */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700">
                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              </div>

              {/* Screenshot */}
              <div className="relative">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>

                {/* Hover Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-sm uppercase tracking-wide"></p>
                  <p className="text-lg font-semibold">{project.title}</p>
                </div>
              </div>
            </div>
          </FadeWrapper>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mb-24">
        <p className="text-xl font-semibold text-gray-800 dark:text-white">
          Your project could be the next success story.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Let’s build something impactful together.
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
        {processSteps.map((step, idx) => (
          <FadeWrapper
            key={idx}
            direction={step.fade.direction}
            duration="700"
            delay={step.fade.delay}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-full">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          </FadeWrapper>
        ))}
      </div>

      {/* Why Work With Me */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Why Clients Choose Me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reasons.map((reason, idx) => (
          <FadeWrapper key={idx} direction="up" duration="700" delay={`${idx * 150}`}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <p className="font-semibold text-gray-800 dark:text-white">
                {reason}
              </p>
            </div>
          </FadeWrapper>
        ))}
      </div>

    </section>
  );
}
