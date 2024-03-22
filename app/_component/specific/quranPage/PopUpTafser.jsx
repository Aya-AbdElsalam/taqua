//this component return the pop up contains tafser of selected ayah
"use client";
import React, { useEffect, useState } from "react";
export default function PopUpTafser({ ayah, ayahText, setTafser }) {
  //set editions of tafser
  const [tafserEditions, setTafserEditions] = useState();
  //set tafser selected
  const [tafserEditionSelected, setTafserEditionSelected] = useState();
  //set text of tafser
  const [tafserText, setTafserText] = useState();
  useEffect(() => {
    fetch(
      "https://api.alquran.cloud/v1/edition?language=ar&&type=tafsir&&format=text"
    )
      .then((res) => res.json())
      .then((res) => setTafserEditions(res.data));
    tafserEditions && setTafserEditionSelected(tafserEditions[0].identifier);
    tafserEditionSelected &&
      fetch(
        `https://api.alquran.cloud/v1/ayah/${ayah}/editions/${tafserEditionSelected}`
      )
        .then((res) => res.json())
        .then((res) => setTafserText(res.data));
  }, [
    tafserEditions === undefined,
    tafserEditionSelected,
    tafserText === undefined,
  ]);

  return (
    <div className="fixed w-full h-full bg-black/50 z-[5000] top-0 left-0 ">
      <section className=" rounded-lg shadow-2xl  left-2/4 top-2/4  -translate-x-2/4 -translate-y-2/4 bg-[#d0dbd1] text-textThird  absolute w-[100%] md:w-[700px]">
        <button
          className="absolute   p-1 bg-bgSecondary/50"
          onClick={() => setTafser(false)}
        >
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div className=" overflow-auto h-[70vh] p-5">
          <select
            className="text-textPrimary rounded-md text-[17px]"
            onChange={(e) => setTafserEditionSelected(e.target.value)}
          >
            {tafserEditions &&
              tafserEditions.map((i) => {
                return (
                  <option value={i.identifier} key={i.identifier}>
                    {i.name}
                  </option>
                );
              })}
          </select>
          <p className="bg-bgSecondary/50 p-4">{ayahText}</p>
          {tafserText && (
            <p className="bg-bgPrimary text-textPrimary mt-6 p-5">
              {tafserText[0].text}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
