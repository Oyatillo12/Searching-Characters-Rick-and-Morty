export const FloatingCharacters = () => (
  <>
    <div
      className="absolute animate-float"
      style={{
        animationDuration: "8s",
        top: "25%",
        left: "25%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-400 rounded-full"></div>
      <div className="w-5 h-6 md:w-8 md:h-12 bg-blue-400 rounded-t-full -mt-1 md:-mt-2 ml-2 md:ml-4"></div>
    </div>

    <div
      className="absolute animate-float"
      style={{
        animationDuration: "10s",
        animationDelay: "1s",
        bottom: "25%",
        right: "25%",
        transform: "translate(50%, 50%)",
      }}
    >
      <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-300 rounded-full"></div>
      <div className="w-4 h-5 md:w-6 md:h-8 bg-yellow-300 rounded-t-full -mt-0.5 md:-mt-1 ml-1.5 md:ml-3"></div>
    </div>
  </>
);