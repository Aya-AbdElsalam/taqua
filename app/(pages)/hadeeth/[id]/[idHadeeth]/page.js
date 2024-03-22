import HadeethApis from "@/app/_utils/HadeethApis";
import React from "react";
export async function generateMetadata({ params }) {
  const hadeeth = await HadeethApis.getHadeethDetails(params.idHadeeth);
  const data = await hadeeth.data;
  return {
    title: data.title,
    description: " تفسير حديث " + data.title,
  };
}
export default async function page({ params }) {
  const hadeeth = await HadeethApis.getHadeethDetails(params.idHadeeth);
  const data = await hadeeth.data;
  return (
    <div className="container pt-[120px] flex flex-col gap-5">
      <div className="bg-[#f7e5b2] text-2xl p-6 leading-[2] border border-black font-serif">
        {data.hadeeth}
      </div>
      <div>
        <p>
          <span className=" font-bold">الاسناد: </span>
          {data.attribution}
        </p>
        <p>
          <span className=" font-bold">الدرجة: </span>
          {data.grade}
        </p>
        <p>
          <span className=" font-bold">المصدر: </span>
          {data.reference}
        </p>
      </div>
      <div className="bg-bgThird/20 text-xl p-6 leading-[1.5]  ">
        <p className="font-bold text-center">التفسير</p>
        <p> {data.explanation}</p>
      </div>
    </div>
  );
}
