"use client";
import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function Pronunciation() {
  const pronunciationAudio = useRef(null); // Audio reference
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause

  // Toggle play/pause of audio
  const togglePronunciation = () => {
    if (pronunciationAudio.current.paused) {
      pronunciationAudio.current.play();
      setIsPlaying(true); // Update the state to indicate playing
    } else {
      pronunciationAudio.current.pause();
      setIsPlaying(false); // Update the state to indicate paused
    }
  };

  // Handle when audio ends
  const handleAudioEnd = () => {
    setIsPlaying(false); // Set state to false when audio ends
  };

  return (
    <span>
      <button
        role="button"
        aria-label="How to pronounce my name"
        onClick={togglePronunciation}
        className="bg-transparent border-none text-primary cursor-pointer p-0 relative top-1 transform transition-transform duration-200 ease-in-out hover:scale-110"
      >
        {/* Play/Pause Icon */}
        {isPlaying ? (
          <span>
            <Pause className="bg-slate-300 rounded-full p-1 fill-black w-5 h-5 hover:bg-white" />
          </span> // You can replace this with a pause icon if preferred
        ) : (
          <span>
            <Play className="bg-slate-300 rounded-full p-1 fill-black w-5 h-5 hover:bg-white" />
          </span> // You can replace this with a play icon if preferred
        )}

        <audio ref={pronunciationAudio} onEnded={handleAudioEnd}>
          <source
            src="https://zenorocha.com/static/audio/pronunciation.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </button>
    </span>
  );
}
