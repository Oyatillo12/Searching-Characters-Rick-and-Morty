export const PortalAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div
      className="absolute w-64 h-64 rounded-full bg-teal-400 opacity-20 animate-ping"
      style={{ animationDuration: "3000ms" }}
    ></div>
    <div
      className="absolute w-96 h-96 rounded-full border-4 border-teal-300 opacity-30 animate-spin"
      style={{ animationDuration: "20000ms" }}
    ></div>
    <div
      className="absolute w-80 h-80 rounded-full border-8 border-teal-200 opacity-40 animate-spin"
      style={{ animationDuration: "15000ms", animationDirection: "reverse" }}
    ></div>
  </div>
);
