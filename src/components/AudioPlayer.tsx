"use client";
import { useRef, useState } from "react";
type Props = {
  audioUrl: string;
};

export default function AudioPlayer({ audioUrl }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(audioUrl));

  const play = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const reset = () => {
    setIsPlaying(false);
    audioRef.current.currentTime = 0;
    pause();
  };

  return (
    <main className="main-player">
      <button
        onClick={() => {
          isPlaying ? pause() : play();
        }}
      >
        {isPlaying ? "Stop" : "Play"}
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset audio
      </button>
    </main>
  );
}
