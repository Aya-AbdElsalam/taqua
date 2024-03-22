import React from "react";
import Surah from "@/app/_component/specific/quranPage/surah";
import QuranApis from "@/app/_utils/QuranApis";
import HeaderSectionPages from "@/app/_component/common/HeaderSectionPages";
export const metadata = {
  title: "الاستماع الي القرآن الكريم",
  description:
    " الاستماع للقرآن الكريم بواسطة مشغل صوتي متقدم، مع إمكانية اختيار السورة و القارئ ",
};
export default async function layout({ children }) {
  const res = await QuranApis.getSurah();
  const quran = await res.data?.data;
  return (
    <>
      <HeaderSectionPages title={"الاستماع الى القرآن الكريم"} />
      <div className="flex gap-8 flex-wrap container">
        {children}

        <div className="w-[350px] grow">
          <Surah quran={quran} />
        </div>
      </div>
    </>
  );
}
