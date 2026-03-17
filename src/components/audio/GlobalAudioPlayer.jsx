import { useEffect, useState } from "react";
import { useAudioPlayer } from "../../context/AudioPlayerContext";

function GlobalAudioPlayer() {

  const { currentAudio, isPlaying, toggleAudio, audioRef } = useAudioPlayer();

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio || !currentAudio) return;

    audio.src = currentAudio.audio_url;
    audio.currentTime = 0;

    audio.play().then(() => {}).catch(()=>{});

  }, [currentAudio]);

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setMeta = () => setDuration(audio.duration || 0);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMeta);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMeta);
    };

  }, []);

  if (!currentAudio) return null;

  return (
    <div className="global-player">

      <h4>{currentAudio.titulo}</h4>

      <button onClick={toggleAudio}>
        {isPlaying ? "⏸" : "▶"}
      </button>

      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={(e)=>{
          audioRef.current.currentTime = e.target.value;
          setCurrentTime(e.target.value);
        }}
      />

      <audio ref={audioRef} />

    </div>
  );

}

export default GlobalAudioPlayer;