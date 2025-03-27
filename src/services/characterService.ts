import { useAxios } from "@/hooks/useAxios";
import { ICharacter } from "@/types/characters";

export const CharacterService = {
  async searchCharacters(query: string): Promise<ICharacter[]> {
    const response = await useAxios().get(`/character/?name=${query}`);
    return response.data.results;
  },
};
