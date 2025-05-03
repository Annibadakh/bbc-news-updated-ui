// components/BoxCard.jsx
import { motion } from "framer-motion";

const BoxCard = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                 transition duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center space-x-4">
        <div className="text-4xl text-indigo-500">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BoxCard;
