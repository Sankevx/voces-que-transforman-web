import { createContext, useContext, useState, useRef } from "react";

export const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export function AudioPlayerProvider({ children }) {

  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRef = useRef(null);

  const playAudio = (audio) => {

    setCurrentAudio(audio);

    setTimeout(() => {

      if (audioRef.current) {

        audioRef.current.src = audio.audio_url;
        audioRef.current.play();

      }

    }, 100);

  };

  return (

    <AudioPlayerContext.Provider
      value={{
        currentAudio,
        playAudio,
        audioRef
      }}
    >

      {children}

    </AudioPlayerContext.Provider>

  );

}