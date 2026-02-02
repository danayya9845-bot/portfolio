import { motion } from "framer-motion";

export default function ServiceCards({ title, description, includes, bestFor }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col justify-between cursor-pointer"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <ul className="mb-4 list-disc list-inside text-gray-600 dark:text-gray-400">
        {includes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="font-semibold text-gray-800 dark:text-gray-200">Best for: {bestFor}</p>
    </motion.div>
  );
}
