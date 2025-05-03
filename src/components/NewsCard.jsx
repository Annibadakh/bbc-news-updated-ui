import { motion } from "framer-motion";

const NewsCard = ({ image, title, summary, time, category }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:shadow-2xl h-full flex flex-col"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div className="flex flex-col gap-3">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
          >
            {title}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-4">
            {summary}
          </p>
        </div>

        {/* Footer pinned to bottom */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{time}</span>
          <span>{category}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;
