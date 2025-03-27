import { useAxios } from "@/hooks/useAxios";
import { Character } from "@/types/characters";

export const CharacterService = {
  async searchCharacters(query: string): Promise<Character[]> {
    const response = await useAxios().get(`/character/?name=${query}`);
    return response.data.results;
  },
};
