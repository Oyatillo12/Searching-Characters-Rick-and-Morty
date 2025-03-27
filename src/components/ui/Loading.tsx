export const Loading = () => (
  <div className="flex flex-col items-center justify-center space-y-8">
    <div className="relative w-40 h-40 flex items-center justify-center">
      <div
        className="absolute w-full h-full rounded-full border-4 border-teal-300 border-t-transparent animate-spin"
        style={{ animationDuration: "1.5s" }}
      ></div>
      <div
        className="absolute w-3/4 h-3/4 rounded-full border-4 border-purple-300 border-b-transparent animate-spin"
        style={{ animationDuration: "2s", animationDirection: "reverse" }}
      ></div>
      <div className="absolute w-1/2 h-1/2 rounded-full bg-teal-400 opacity-20 animate-pulse"></div>
      <div className="text-teal-300 font-bold text-lg">
        WUBBA LUBBA DUB DUB!
      </div>
    </div>
  </div>
);
