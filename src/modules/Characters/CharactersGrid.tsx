import { ICharacter } from "@/types/characters";
import CharacterCard from "./CharacterCard";

interface CharacterGridProps {
  characters: ICharacter[];
}

export const CharacterGrid = ({ characters }: CharacterGridProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {characters.map((char) => (
      <CharacterCard char={char} />
    ))}
  </div>
);
