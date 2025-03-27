import { MagnifyingGlassIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

interface SearchFormProps {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: (event: React.MouseEvent<HTMLFormElement>) => void;
  loading: boolean;
}

export const SearchForm = ({
  query,
  setQuery,
  handleSearch,
  loading,
}: SearchFormProps) => (
  <form
    onSubmit={handleSearch}
    className="relative rounded-full overflow-hidden flex items-center justify-between w-full bg-white shadow-lg px-6 py-3 mb-12 mx-auto max-w-2xl transition-all duration-300 hover:shadow-xl"
  >
    <div className="flex w-full items-center gap-3">
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 transition-colors duration-300" />
      <input
        placeholder="Search characters..."
        type="text"
        value={query}
        className="outline-none w-full text-lg placeholder-gray-400 bg-transparent"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
    <button
      type="submit"
      disabled={loading}
      className={`absolute right-2 flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 ${
        loading
          ? "bg-gray-300"
          : "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
      }`}
    >
      {loading ? (
        <ArrowPathIcon className="h-5 w-5 text-white animate-spin" />
      ) : (
        <MagnifyingGlassIcon className="h-5 w-5 text-white transition-transform hover:scale-110" />
      )}
    </button>
  </form>
);
