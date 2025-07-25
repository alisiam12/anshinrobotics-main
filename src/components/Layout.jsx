import Threads from "./Threads";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Threads Animation */}
      <div className="absolute inset-0 w-full h-full">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      {/* Main Content */}
      {children}

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
    </div>
  );
}
