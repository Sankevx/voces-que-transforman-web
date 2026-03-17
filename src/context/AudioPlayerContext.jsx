import { createContext, useContext, useState, useRef } from "react";

export const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export function AudioPlayerProvider({ children }) {

  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const playAudio = (audio) => {
    setCurrentAudio(audio);
  };

  const toggleAudio = () => {

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
    <AudioPlayerContext.Provider
      value={{
        currentAudio,
        isPlaying,
        playAudio,
        toggleAudio,
        audioRef
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );

}