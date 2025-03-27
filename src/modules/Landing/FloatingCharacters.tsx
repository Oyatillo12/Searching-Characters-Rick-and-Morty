export const FloatingCharacters = () => (
  <>
    <div
      className="absolute top-1/4 left-1/4 animate-float"
      style={{ animationDuration: "8s" }}
    >
      <div className="w-16 h-16 bg-blue-400 rounded-full"></div>
      <div className="w-8 h-12 bg-blue-400 rounded-t-full -mt-2 ml-4"></div>
    </div>
    <div
      className="absolute bottom-1/4 right-1/4 animate-float"
      style={{ animationDuration: "10s", animationDelay: "1s" }}
    >
      <div className="w-12 h-12 bg-yellow-300 rounded-full"></div>
      <div className="w-6 h-8 bg-yellow-300 rounded-t-full -mt-1 ml-3"></div>
    </div>
  </>
);
