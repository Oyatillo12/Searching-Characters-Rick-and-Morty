export const ErrorState = () => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center max-w-md mx-auto shadow-lg transition-all duration-300 hover:scale-[1.02]">
    <div className="text-6xl mb-4">😢</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      No characters found
    </h3>
    <p className="text-gray-600">Try searching for someone else</p>
  </div>
);
