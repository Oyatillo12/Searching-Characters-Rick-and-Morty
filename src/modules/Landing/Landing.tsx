"use client";
import { PortalAnimation } from "./PortalAnimation";
import { FloatingCharacters } from "./FloatingCharacters";
import { TypewriterText } from "./TypewriterText";
import { useLandingAnimation } from "@/hooks/useLoadingAnimation";

export const Landing = () => {
  const { fadeIn, showPortal, showCharacters } = useLandingAnimation();

  return (
    <div className="h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center overflow-hidden relative">
      {showPortal && <PortalAnimation />}
      {showCharacters && <FloatingCharacters />}
      <TypewriterText fadeIn={fadeIn} showPortal={showPortal} />
    </div>
  );
};
