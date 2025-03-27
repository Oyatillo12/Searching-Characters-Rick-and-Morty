import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const useLandingAnimation = () => {
  const [fadeIn, setFadeIn] = useState(true);
  const [showPortal, setShowPortal] = useState(false);
  const [showCharacters, setShowCharacters] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const sequence = setTimeout(() => {
      setShowPortal(true);
    }, 1000);

    const charactersTimeout = setTimeout(() => {
      setShowCharacters(true);
    }, 1500);

    const fadeOutTimeout = setTimeout(() => {
      setFadeIn(false);
    }, 2500);

    const redirectTimeout = setTimeout(() => {
      router.push("/characters");
    }, 3500);

    return () => {
      clearTimeout(sequence);
      clearTimeout(charactersTimeout);
      clearTimeout(fadeOutTimeout);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return { fadeIn, showPortal, showCharacters };
};