import HeaderSectionPages from "@/app/_component/common/HeaderSectionPages";
import Surah from "@/app/_component/specific/quranPage/surah";
import QuranApis from "@/app/_utils/QuranApis";
import React from "react";
export const metadata = {
  title: "قراءة القرآن الكريم",
  description:
    "تحتوي الصفحة على قائمة تحوي جميع السور مرتبة بشكل منظم، مما يتيح للمستخدمين اختيار السور بسرعة ودقة. كما يوفر الموقع أدوات متقدمة مثل البحث لتعزيز تجربة المستخدم ",
};

export default async function page() {
  const res = await QuranApis.getSurah();
  const quran = await res.data?.data;
  return (
    <div>
      <HeaderSectionPages title={"قراءة القرآن الكريم"} />
      <Surah quran={quran} />
    </div>
  );
}
