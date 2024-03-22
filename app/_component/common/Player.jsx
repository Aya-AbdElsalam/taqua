//this component return audio player
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FaVolumeHigh, FaVolumeLow, FaVolumeXmark } from "react-icons/fa6";
import { MdSkipPrevious } from "react-icons/md";
import { CgPlayTrackNext } from "react-icons/cg";
import { FaPause, FaPlay, FaVolumeUp } from "react-icons/fa";
export default function Player({
  src,
  title,
  secondaryText,
  nextRoute,
  prevRoute,
  number,
}) {
  const router = useRouter();
  const [duration, setDeuration] = useState();
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(Number(40));
  const [showVolume, setShowVolume] = useState(false);
  const [play, setPlay] = useState(false);
  const audioRef = useRef();
  /**
   *@param {*} time =>time in seconds
   *@returns min:sec => Time in minutes and seconds
   */
  function timer(time) {
    const min = 0 + Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (sec < 10) {
      sec = 0 + sec;
    }
    return `${min}:${sec}`;
  }
  /**
   * @param {*} e
   * creates a new Audio object using the source URL  (e.nativeEvent.srcElement.src). This URL is used to load an audio file.
   * When the audio is loaded, it checks if the audio is ready to play (audio.readyState > 0), and if so, it sets the duration of the audio (setDuration(audio.duration)).
   */
  function handleLoadStart(e) {
    const audio = new Audio(e.nativeEvent.srcElement.src);
    audio.onloadedmetadata = () => {
      if (audio.readyState > 0) setDeuration(audio.duration);
    };
  }
  /**
   *creat a play/pause toggle functionality for an audio element
   *play is true ==> it calls audioRef.current.pause() to pause the audio playback.
   *play is false ==> it calls audioRef.current.play() to play the audio.
   */
  function handlePlayingAudio() {
    setPlay((prev) => !prev);
    play ? audioRef.current.pause() : audioRef.current.play();
  }
  /**
   *updating the current time of an audio element during playback
   */
  function handleTimeUpdate() {
    setCurrentTime(audioRef.current.currentTime);
  }
  /**
   *
   * @param {*} e
   * Updates the current time of audio when the input range changes
   */
  function changeCurrentTime(e) {
    const currentTime = Number(e.target.value);
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime);
  }
  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);
  return (
    <>
      <div className="card flex flex-col gap-8 text-center shadow-2xl rounded-lg p-5 mt-5">
        <div className="w-full">
          <p className="text-[60px]">{title}</p>
          <p className="text-[20px]">{secondaryText}</p>
        </div>
        <div className="w-full">
          <input
            type="range"
            className="block w-full bg-transparent"
            dir="ltr"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(e) => changeCurrentTime(e)}
          />
          <div className="flex justify-between gap-2 text-[14px] flex-row-reverse">
            <span>{timer(currentTime)}</span>
            <span>
              {timer(duration) !== "NaN:NaN" ? timer(duration) : "00:00"}
            </span>
          </div>
        </div>
        <div className="w-full flex gap-8 text-[22px] justify-between items-center">
          {/* volume */}
          <div className="relative">
            <i
              onClick={() => setShowVolume((prev) => !prev)}
              className="cursor-pointer"
            >
              {volume < 1 && <FaVolumeXmark />}
              {volume >= 1 && volume < 50 && <FaVolumeLow />}
              {volume > 50 && volume <= 100 && <FaVolumeHigh />}
            </i>
            {showVolume && (
              <div
                dir="ltr"
                className="absolute inset-[1] w-[250px] bg-[#d0dbd1] p-[16px] h-[28px] gap-4 items-center text-xl rounded-3xl top-7 border flex justify-between"
              >
                <FaVolumeUp />

                <input
                  type="range"
                  min={0}
                  max={100}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  value={volume}
                  className="bg-transparent"
                />
                <span>{volume}</span>
              </div>
            )}
          </div>

          <div className="flex gap-3 justify-center text-[50px]">
            <CgPlayTrackNext
              className="cursor-pointer"
              onClick={() =>
                router.push(`${nextRoute}${+number === 114 ? 114 : ++number}`)
              }
            />
            <div onClick={handlePlayingAudio} className="cursor-pointer">
              {play ? <FaPause /> : <FaPlay />}
            </div>
            <MdSkipPrevious
              className="cursor-pointer"
              onClick={() =>
                router.push(`${prevRoute}${+number === 0 ? --number : 1}`)
              }
            />
          </div>
          <p className="invisible">ss</p>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={src}
        hidden
        onTimeUpdate={handleTimeUpdate}
        onLoadStart={handleLoadStart}
      />
    </>
  );
}
