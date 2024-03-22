import HeaderSectionPages from "@/app/_component/common/HeaderSectionPages";
import React from "react";
import { azkar } from "@/app/data/azkar";
import AzkarComponent from "../../../_component/specific/azkarPage/AzkarComponent";
export async function generateMetadata({ params }) {
  return {
    title: Object.keys(azkar)[params.title],
    description: "تحتوي الصفحة علي  " + Object.keys(azkar)[params.title],
    keywords: Object.keys(azkar)[params.title],
  };
}
export default function page({ params }) {
  const title = Object.keys(azkar)[params.title];
  const data = azkar[title];
  return (
    <>
      <HeaderSectionPages title={title} />
      <div className="container flex flex-wrap gap-8 py-20">
        {data.map((i, index) => {
          return <AzkarComponent i={i} index={index} />;
        })}
      </div>
    </>
  );
}
