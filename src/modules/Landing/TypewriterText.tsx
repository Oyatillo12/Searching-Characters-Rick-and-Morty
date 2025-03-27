interface TypewriterTextProps {
  fadeIn: boolean;
  showPortal: boolean;
}

export const TypewriterText = ({ fadeIn, showPortal }: TypewriterTextProps) => (
  <div className="w-max relative z-10">
    <p
      className={`typewriter text-teal-300 inline-block text-4xl font-bold text-center transition-opacity duration-500 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      Welcome to Rick and Morty Search! 🛸
    </p>

    {showPortal && (
      <p
        className={`text-center text-teal-100 mt-4 transition-opacity duration-500 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        Entering the multiverse...
      </p>
    )}
  </div>
);
