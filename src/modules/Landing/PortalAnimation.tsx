export const PortalAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
    <div
      className="absolute w-32 h-32 sm:w-44 sm:h-44 xl:w-64 xl:h-64 rounded-full bg-teal-400 opacity-20 animate-ping"
      style={{ animationDuration: "3000ms" }}
    ></div>

    <div
      className="absolute w-56 h-56 sm:w-74 sm:h-74 xl:w-96 xl:h-96 rounded-full border-2 sm:border-4 border-teal-300 opacity-30 animate-spin"
      style={{ animationDuration: "20000ms" }}
    ></div>

    <div
      className="absolute w-48 h-48 sm:w-60 sm:h-60 xl:w-80 xl:h-80 rounded-full border-4 sm:border-8 border-teal-200 opacity-40 animate-spin"
      style={{ 
        animationDuration: "15000ms", 
        animationDirection: "reverse" 
      }}
    ></div>
  </div>
);