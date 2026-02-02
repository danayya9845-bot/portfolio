import { motion } from "framer-motion";

export default function ButtonAnimation({ children, onClick, type = "button" }) {
  return (
    <motion.button 
    type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    className="bg-eclipse-accent text-white px-4 py-2 rounded-md
           transition-transform duration-150
           hover:-translate-y-1 hover:scale-105 active:translate-y-1 font-medium">

      {children}
    </motion.button>
  );
}
