import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse-based parallax for floating shapes
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // max 20px offset
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative bg-gray-100 text-gray-900 py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      
      {/* Floating shapes */}
      <motion.div
        className="absolute w-24 h-24 bg-eclipse-accent rounded-full opacity-20 top-10 left-10 pointer-events-none"
        animate={{ x: mousePos.x / 2, y: mousePos.y / 2, rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-16 h-16 bg-eclipse-mid rounded-full opacity-15 bottom-10 right-20 pointer-events-none"
        animate={{ x: -mousePos.x / 2, y: -mousePos.y / 2, rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-12 h-12 bg-eclipse-light rounded-full opacity-10 top-1/2 left-1/3 pointer-events-none"
        animate={{ x: -mousePos.x / 3, y: mousePos.y / 3, rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      {/* AboutMe content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-eclipse-dark">
          About Me
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed md:leading-loose">
          I’m a freelance web developer specializing in building modern websites, high-converting landing pages, and scalable SaaS applications.
        </p>

        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed md:leading-loose">
          I work closely with clients to understand their goals and deliver solutions that are not only visually clean but also fast, reliable, and easy to maintain. I focus on writing clean code, creating smooth user experiences, and building products that grow with your business.
        </p>

        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed md:leading-loose">
          Whether you’re launching a startup, improving your online presence, or building a custom web application, I can help bring your idea to life.
        </p>
      </div>
    </section>
  );
}
