import React from "react";
import AudioList from "./AudioList";
import "../../styles/audioCategoryPage.css";

function AudioCategoryPage({ title, description, backgroundClass, categoria, isAdmin }) {

  return (
    <div className={`audio-category-page ${backgroundClass}`}>
      
      <div className="audio-category-overlay">
        
        <div className="audio-category-content">

          <h1 className="audio-category-title">
            {title}
          </h1>

          <p className="audio-category-description">
            {description}
          </p>

          {/* Lista de audios */}
          <AudioList 
          categoria={categoria}
          isAdmin={isAdmin} 
          />

        </div>

      </div>

    </div>
  );
}

export default AudioCategoryPage;