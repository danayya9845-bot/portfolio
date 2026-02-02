import { motion } from "framer-motion";

export default function ServiceOptimization({ title, description, includes = [], bestFor }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-6 flex flex-col justify-between md:col-span-3">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <ul className="mb-4 list-disc list-inside text-gray-600 dark:text-gray-400">
        {includes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="font-semibold text-gray-800 dark:text-gray-200">Best for: {bestFor}</p>
    </div>
  );
}
