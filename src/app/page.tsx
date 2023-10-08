"use client";
import AudioPlayer from "@/components/AudioPlayer";
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
      <AudioPlayer audioUrl="./audio/arte-2min.mp3"></AudioPlayer>
    </main>
  );
}
