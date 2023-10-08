"use client";
import styles from "./page.module.css";
import { useRef, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const url = "./audio/arte-2min.mp3";

  const audioRef = useRef(new Audio(url));

  const play = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };
  return (
    <main className={styles.main}>
      <button
        onClick={() => {
          isPlaying ? pause() : play();
        }}
      >
        {isPlaying ? "Stop" : "Play"}
      </button>
    </main>
  );
}
