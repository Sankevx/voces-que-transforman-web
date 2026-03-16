import { useAudioPlayer } from "../../context/AudioPlayerContext";

function GlobalAudioPlayer() {

  const { currentAudio, audioRef } = useAudioPlayer();

  if (!currentAudio) return null;

  const imagen =
    currentAudio.imagen_url ||
    "/src/assets/images/podcast-default.jpg";

  return (

    <div className="global-player">

      <img
        src={imagen}
        className="global-player-cover"
        alt="portada podcast"
      />

      <div className="global-player-info">

        <h4>{currentAudio.titulo}</h4>

        <audio
          ref={audioRef}
          controls
          preload="metadata"
          src={currentAudio.audio_url}
        />

      </div>

    </div>

  );

}

export default GlobalAudioPlayer;