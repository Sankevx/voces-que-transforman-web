import { useEffect, useState } from "react";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { supabase } from "../../lib/supabaseClient";


function GlobalAudioPlayer() {

  const { currentAudio, isPlaying, toggleAudio, audioRef } = useAudioPlayer();

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [likes, setLikes] = useState(0);
  const [reproducciones, setReproducciones] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !currentAudio) return;

    audio.src = currentAudio.audio_url;
    audio.currentTime = 0;

    setLikes(currentAudio.likes || 0);
    setReproducciones(currentAudio.reproducciones || 0);

    audio.play().catch(() => {});

    // 🔥 sumar reproducción
    supabase
      .from("audios")
      .update({ reproducciones: (currentAudio.reproducciones || 0) + 1 })
      .eq("id", currentAudio.id);

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

  const handleLike = async () => {

    const newLikes = likes + 1;
    setLikes(newLikes);

    await supabase
      .from("audios")
      .update({ likes: newLikes })
      .eq("id", currentAudio.id);
  };

  const formatTime = (time) => {
    if (!time) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  if (!currentAudio) return null;

  return (
    <div className="global-player">

      {/* 🎧 INFO */}
      <div className="global-player-info">

        <img
          src={currentAudio.imagen}
          alt=""
          className="global-player-cover"
        />

        <div>
          <p><strong>{currentAudio.titulo}</strong></p>
          <p style={{ fontSize: "12px", color: "#ccc" }}>
            {currentAudio.autor || "Autor desconocido"}
          </p>

          <p style={{ fontSize: "11px", color: "#888" }}>
            👁 {reproducciones} • ❤️ {likes}
          </p>
        </div>

      </div>

      {/* 🎮 CONTROLES */}
      <div className="player-controls">

        <button onClick={toggleAudio}>
          {isPlaying ? "⏸" : "▶"}
        </button>

        <span>{formatTime(currentTime)}</span>

        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          className="progress-bar"
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
          }}
        />

        <span>{formatTime(duration)}</span>

      </div>

      {/* ❤️ LIKE */}
      <button
        onClick={handleLike}
        style={{
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          color: "#ff4fa3"
        }}
      >
        ❤️
      </button>

      <audio ref={audioRef} />

    </div>
  );
}

export default GlobalAudioPlayer;