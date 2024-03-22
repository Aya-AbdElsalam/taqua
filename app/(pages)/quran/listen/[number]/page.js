"use client";
import React, { useEffect, useRef, useState } from "react";
import { quran } from "@/app/data/surah_audio_edition";
import QuranApis from "@/app/_utils/QuranApis";
import Player from "@/app/_component/common/Player";
export default function page({ params }) {
  const selectOption = useRef();
  const [activeEdition, setActiveEdition] = useState();
  const [title, setTitle] = useState();
  useEffect(() => {
    QuranApis.getSurah().then((res) =>
      setTitle(res.data.data.find((i) => i.number === +params.number).name)
    );
    setActiveEdition(
      quran && quran.find((i) => selectOption.current.value === i.identifier)
    );
  }, [quran === undefined, title === undefined, activeEdition]);
  return (
    <div className="pt-20 w-[300px] grow md:sticky md:h-fit md:top-0">
      <select
        className=" bg-[#d0dbd1] border-black border rounded-md w-full h-20"
        ref={selectOption}
        onChange={(e) =>
          setActiveEdition(quran.find((i) => i.identifier === e.target.value))
        }
      >
        {quran &&
          quran.map((i) => {
            return (
              <option
                key={i.identifier}
                value={i.identifier}
                className="p-5 rounded-xl text-xl bg-[darkslategrey]/90 hover:bg-bgThird font-bold text-textThird"
              >
                {i.name}
              </option>
            );
          })}
      </select>
      <Player
        src={`https://cdn.islamic.network/quran/audio-surah/128/${activeEdition?.identifier}/${params.number}.mp3`}
        title={title}
        secondaryText={activeEdition?.name}
        nextRoute={`../../quran/listen/`}
        prevRoute={`../../quran/listen/`}
        number={params.number}
      />
    </div>
  );
}
