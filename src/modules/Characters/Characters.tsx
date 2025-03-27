"use client";

import React, { useState } from "react";
import { Character } from "@/types/characters";
import { SearchBar } from "@/components/ui/SearchBar";
import { SearchForm } from "@/components/ui/SearchForm";
import { Loading } from "@/components/ui/Loading";
import { ErrorState } from "@/components/ui/ErrorState";
import { CharacterGrid } from "@/modules/Characters/CharactersGrid";
import { CharacterService } from "@/services/characterService";

export const Characters = () => {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const results = await CharacterService.searchCharacters(query);
      setCharacters(results);
    } catch (err) {
      setCharacters(null);
      setError("No characters found 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 pt-8 pb-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SearchBar />

        <SearchForm
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          loading={loading}
        />

        <div className="space-y-8">
          {loading && <Loading />}
          {error && <ErrorState />}
          {characters && <CharacterGrid characters={characters} />}
        </div>
      </div>
    </div>
  );
};
