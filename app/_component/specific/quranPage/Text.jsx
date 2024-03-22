//this component return the text of surah
"use client";
import React, { useState } from "react";
import Image from "next/image";
import icon from "../../../_assets/pngwing.com.webp";
import PopUpTafser from "./PopUpTafser";
export default function Text({ quran }) {
  const [tafser, setTafser] = useState(false);
  const [ayah, setAyah] = useState();
  const [ayahText, setAyahText] = useState();
  return (
    <div className="text-[28px] md:text-4xl leading-[2] mt-11 md:leading-[2]   shadow-[0px_0px_40px_rgb(128,128,128,0.15)] rounded-sm p-4 ">
      {tafser && (
        <PopUpTafser ayah={ayah} ayahText={ayahText} setTafser={setTafser} />
      )}
      {quran &&
        quran.ayahs.map((i) => {
          return (
            <span key={i.number}>
              <span
                className="hover:bg-bgThird/10 cursor-pointer"
                onClick={() => {
                  setAyah(i.number);
                  setAyahText(i.text);
                  setTafser(true);
                }}
              >
                {i.text}
              </span>
              <div className="inline-block relative text-center w-[32px] h-[38px]  md:w-[38px] md:h-[42px] text-[15px] md:text-[17px] ml-4 leading-[2.9] md:leading-[2.7] top-2">
                <p className="absolute inset-[1] z-10 w-full">
                  {i.numberInSurah}
                </p>
                <Image
                  alt="aya end"
                  width={30}
                  height={30}
                  src={icon}
                  className="absolute inset-[1] w-full h-full"
                />
              </div>
            </span>
          );
        })}
    </div>
  );
}
