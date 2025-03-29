interface TypewriterTextProps {
  fadeIn: boolean;
  showPortal: boolean;
}

export const TypewriterText = ({ fadeIn, showPortal }: TypewriterTextProps) => (
  <div className="w-full max-w-max relative z-10 px-4 sm:px-0">
    <p
      className={`typewriter text-teal-300 inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-center transition-opacity duration-500 ${
        fadeIn ? "opacity-100" : "opacity-0"
      } whitespace-nowrap overflow-hidden border-r-2 border-teal-300 animate-cursor`}
      style={{ 
        animation: fadeIn ? 
          "typing 3.5s steps(30, end), blink-caret .75s step-end infinite" : 
          "none" 
      }}
    >
      Welcome to Rick and Morty Search! 🛸
    </p>

    {showPortal && (
      <p
        className={`text-center text-teal-100 mt-2 sm:mt-4 text-sm sm:text-base transition-opacity duration-700 delay-300 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        Entering the multiverse...
      </p>
    )}
  </div>
);