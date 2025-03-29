import { ICharacter } from "@/types/characters";
import { CheckCircleIcon, QuestionMarkCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

interface CharacterCardProps {
  char: ICharacter;
}

const CharacterCard = ({ char }: CharacterCardProps) => {
  return (
    <div
      className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:-translate-y-1"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={char?.image}
          alt={char?.name}
          sizes=""
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h2 className="text-xl font-bold text-white">{char?.name}</h2>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-600">Status:</span>
          {char?.status === "Alive" ? (
            <span className="flex items-center text-green-500 font-medium">
              <CheckCircleIcon className="h-5 w-5 mr-1" /> Alive
            </span>
          ) : char?.status === "Dead" ? (
            <span className="flex items-center text-red-500 font-medium">
              <XCircleIcon className="h-5 w-5 mr-1" /> Deceased
            </span>
          ) : (
            <span className="flex items-center text-gray-500 font-medium">
              <QuestionMarkCircleIcon className="h-5 w-5 mr-1" /> Unknown
            </span>
          )}
        </div>
        <div>
          <span className="font-medium text-gray-600">Species:</span>
          <span className="ml-2 text-gray-800">{char?.species}</span>
        </div>
        <div>
          <span className="font-medium text-gray-600">Location:</span>
          <span className="ml-2 text-gray-800">{char?.location?.name || ""}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
