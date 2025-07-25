export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 shadow-2xl hover:shadow-blue-500/25 ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </button>
  );
}
