import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonAnimation from './../animations/ButtonAnimation';
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Modern UI/UX, Build Faster",
    subtitle: "I create websites, landing pages, and SaaS products that help businesses grow.",
  },
  {
    title: "Scalable & Secure Development",
    subtitle: "Helping startups and businesses turn ideas into fast, user-friendly digital products.",
  },
  {
    title: "Business-Focused Solutions",
    subtitle: "Clean design, strong performance, and solutions that solve real business problems.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">

      {/* Floating shapes */}
      <motion.div
        className="absolute w-32 h-32 bg-purple-600 rounded-full opacity-20 top-10 left-10 pointer-events-none"
        animate={{ y: [0, 20, 0], rotate: [0, 360, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-blue-500 rounded-full opacity-15 bottom-20 right-20 pointer-events-none"
        animate={{ y: [0, -15, 0], rotate: [0, -360, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-16 h-16 bg-pink-500 rounded-full opacity-10 top-1/2 left-1/3 pointer-events-none"
        animate={{ y: [0, 10, 0], x: [0, -10, 0], rotate: [0, 360, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle particle overlay */}
      <motion.div
        className="absolute w-full h-full pointer-events-none"
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute w-1 h-1 bg-white rounded-full top-10 left-20 opacity-30"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-32 right-10 opacity-20"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full bottom-20 left-1/4 opacity-25"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full bottom-32 right-1/3 opacity-15"></div>
      </motion.div>

      {/* Hero content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug mb-4 md:mb-6">
            {slides[current].title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8">
            {slides[current].subtitle}
          </p>
          <ButtonAnimation onClick={() => navigate("/process")}>
            View My Work
          </ButtonAnimation>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
