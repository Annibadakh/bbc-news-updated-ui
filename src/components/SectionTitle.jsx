
export default function SectionTitle({ title }) {
    return (
    <div className="flex items-center mb-8">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-lg font-medium text-gray-700 dark:text-white">
        {title}
      </span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>     
    );
  }
  