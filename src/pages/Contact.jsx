
import FadeWrapper from "../components/animations/FadeWrapper";

export default function Contact() {
 
 return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white-900 text-gray-400">
      <div className="max-w-5xl mx-auto text-center">

        {/* Small Label */}
        <FadeWrapper direction="up" duration="600">
          <p className="text-indigo-400 font-semibold tracking-wide mb-3">
            CONTACT
          </p>
        </FadeWrapper>

        {/* Heading */}
        <FadeWrapper direction="up" duration="700" delay="100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Build Something Great
          </h1>
        </FadeWrapper>

        {/* Subtext */}
        <FadeWrapper direction="up" duration="700" delay="200">
          <p className="text-gray-900 max-w-2xl mx-auto mb-14">
            Have a project in mind or need a reliable developer?
            Reach out directly — clear communication and quick responses guaranteed.
          </p>
        </FadeWrapper>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Email Card */}
          <FadeWrapper direction="up" duration="700" delay="300">
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700 hover:-translate-y-1 transition-transform duration-300">
              <p className="uppercase tracking-wide text-gray-100 text-sm mb-2">
                Email
              </p>
              <a
                href="mailto:danayyaswami9845@gmail.com"
                className="text-xl font-semibold hover:text-indigo-400 transition"
              >
                danayyaswami9845@gmail.com
              </a>
            </div>
          </FadeWrapper>

          {/* Phone Card */}
          <FadeWrapper direction="up" duration="700" delay="400">
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700 hover:-translate-y-1 transition-transform duration-300">
              <p className="uppercase tracking-wide text-gray-100 text-sm mb-2">
                Call / WhatsApp
              </p>
              <a
                href="tel:9845267050"
                className="text-xl font-semibold hover:text-indigo-400 transition"
              >
                +91 98452 67050
              </a>
            </div>
          </FadeWrapper>

        </div>

        {/* Footer Line */}
        <FadeWrapper direction="up" duration="700" delay="500">
          <p className="text-gray-500 text-sm mt-16">
            Available for freelance projects • Open to long-term collaborations
          </p>
        </FadeWrapper>

      </div>
    </section>
  );
}
