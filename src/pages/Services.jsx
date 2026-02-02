import ServiceCard from "../components/cards/ServiceCards";
import ServiceOptimization from "../components/cards/ServiceOptimization";
import FadeWrapper from "../components/animations/FadeWrapper";

// Normal service cards
const servicesData = [
  {
    title: "🚀 SaaS Development",
    description:
      "I design and develop scalable SaaS applications from idea to launch, focusing on performance, security, and usability.",
    includes: [
      "SaaS MVP & full product development",
      "Dashboards & admin panels",
      "User authentication & role management",
      "Subscription & payment systems",
      "API & third-party integrations",
    ],
    bestFor: "Startups, founders, and growing businesses.",
    fade: { direction: "up", duration: "700", delay: "100" },
  },
  {
    title: "📄 Landing Page Development",
    description:
      "High-converting landing pages built to capture leads and drive sales with clear messaging and fast performance.",
    includes: [
      "Product launch pages",
      "Lead generation pages",
      "Sales funnels",
      "Marketing & campaign pages",
      "Conversion-focused layouts",
    ],
    bestFor: "Startups, marketers, and online businesses.",
    fade: { direction: "left", duration: "700", delay: "200" },
  },
  {
    title: "💻 Website Development",
    description:
      "Professional, responsive websites that represent your brand clearly and build trust with your audience.",
    includes: [
      "Business & corporate websites",
      "Personal & freelance portfolios",
      "Blogs & content websites",
      "Service-based websites",
      "Mobile-friendly & responsive design",
    ],
    bestFor: "Small businesses, professionals, and brands.",
    fade: { direction: "right", duration: "700", delay: "300" },
  },
];


export default function Services() {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        WHAT I BUILD
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Check out the solutions I offer to help businesses and startups grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Normal Service Cards */}
        {servicesData.map((service, idx) => (
          <FadeWrapper
            key={idx}
            direction={service.fade.direction}
            duration={service.fade.duration}
            delay={service.fade.delay}
          >
            <ServiceCard {...service} />
          </FadeWrapper>
        ))}

      </div>
    </section>
  );
}
