'use client';

import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { usePortalStore } from "@stores";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AiOutlineSound, AiOutlineMuted } from "react-icons/ai";

const MusicToggle = () => {
  const musicToggleRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const isActive = usePortalStore((state) => state.activePortalId);
  const [isPlaying, setIsPlaying] = useState(true);

  useGSAP(() => {
    gsap.to(musicToggleRef.current, {
      opacity: isActive ? 0 : 1,
      duration: 1,
      delay: isActive ? 0 : 1,
    });
  }, [isActive]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/icons/audio.mp3"
        autoPlay
        loop
        preload="auto"
      />
      <div
        ref={musicToggleRef}
        style={{
          position: "fixed",
          top: isMobile ? "2.5rem" : "4rem",
          left: "4rem",
          opacity: 0,
          zIndex: 2,
        }}
      >
        <button
          onClick={toggleMusic}
          className="px-6 py-6 text-white font-semibold rounded-mg bg-black hover:bg-black/80 transition ">
        {isPlaying ? <AiOutlineSound /> : <AiOutlineMuted />  }
        </button>
      </div>
    </>
  );
};

export default MusicToggle;
