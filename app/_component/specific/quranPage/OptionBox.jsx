//this component return the select box that contains edition of mushaf and reurn the surah according to selected edition
"use client";
import React, { useEffect, useRef, useState } from "react";
import QuranApis from "../../../_utils/QuranApis";
import Text from "./Text";
export default function OptionBox({ number }) {
  //set quran according to selected edition
  const [quran, setQuran] = useState();
  const [surah, setSurah] = useState();
  const selectOption = useRef();
  //set selected edition
  const [activeEdition, setActiveEdition] = useState();
  var nameArray = [];
  useEffect(() => {
    QuranApis.getEditionText()
      .then((res) => setQuran(res.data?.data))
      .then(() => setActiveEdition(quran && selectOption.current.value));
    activeEdition &&
      fetch(
        ` https://api.alquran.cloud/v1/surah/${number}/${activeEdition}?format=text&language=ar`
      )
        .then((res) => res.json())
        .then((res) => setSurah(res.data));
  }, [quran === undefined, activeEdition, surah === undefined]);
  return (
    <>
      <select
        className=" bg-[#d0dbd1] border-black border rounded-md min-w-80"
        ref={selectOption}
        onChange={(e) => setActiveEdition(e.target.value)}
      >
        {quran &&
          quran.map((i) => {
            if (nameArray.indexOf(i.name) === -1) {
              nameArray.push(i.name);
              return (
                !i.name.match(/[a-zA-Z]|معاني|للأطفال|ملون/) && (
                  <option
                    key={i.identifier}
                    value={i.identifier}
                    className="p-5 rounded-xl text-xl bg-[darkslategrey]/90 hover:bg-bgThird font-bold text-textThird"
                  >
                    {i.name}
                  </option>
                )
              );
            }
          })}
      </select>
      <Text quran={surah} />
    </>
  );
}
