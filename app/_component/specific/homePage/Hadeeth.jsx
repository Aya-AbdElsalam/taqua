//this component return the container of hadeeth in landing page
"use client";
import React, { useEffect, useState } from "react";
import HeaderSection from "../../common/HeaderSection";
import HadeethApis from "../../../_utils/HadeethApis";
import Link from "next/link";
export default function Hadeeth() {
  //set categories of hadeeth
  const [Categories, setCategories] = useState();
  //set the selected category
  const [tabActive, setTabActive] = useState();
  //set the data of hadeeth
  const [data, setData] = useState();
  const [idCategory, setIdCategory] = useState();
  useEffect(() => {
    HadeethApis.getCategories().then((res) => {
      setCategories(res.data);
    });
    if (Categories) {
      setIdCategory(Categories[0].id);
      setTabActive(Categories[0].title);
      HadeethApis.getCategoriesHadeeth(Categories[0].id).then((res) => {
        setData(res.data.data);
      });
    }
  }, [Categories == undefined, data == undefined]);
  return (
    <div className="my-[80px]">
      <div className="container text-center">
        <HeaderSection title={"الحديث الشريف"} />
        <div className="flex gap-2 font-bold w-fit p-1 rounded-3xl border border-textPrimary leading-6">
          {Categories?.slice(0, 3).map((i) => {
            return (
              <p
                key={i.title}
                className={` cursor-pointer hover:bg-btnSecondary px-6 py-2 rounded-3xl ${
                  tabActive === i.title && "bg-btnSecondary"
                }`}
                onClick={(e) => {
                  setTabActive(i.title);
                  HadeethApis.getCategoriesHadeeth(i.id).then((res) => {
                    setData(res.data.data);
                    setIdCategory(i.id);
                  });
                }}
              >
                {i.title}
              </p>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-5 justify-start mt-8 font-bold ">
          {Array.isArray(data) &&
            data.slice(0, 4).map((i, index) => {
              return (
                <div
                  key={index}
                  className="grow w-full flex gap-5 h-full p-5 border-textPrimary border py-6 rounded-md group leading-9 cursor-pointer hover:bg-bgThird hover:text-textThird "
                >
                  <span className="bg-bgThird/60 rounded-md w-[35px] h-[35px] inline-block group-hover:bg-textThird group-hover:text-bgSecondary">
                    {index + 1}
                  </span>
                  <Link href={`hadeeth/${idCategory}/${i.id}`}>{i.title}</Link>
                </div>
              );
            })}
        </div>
        <Link
          href={"hadeeth"}
          className="bg-btnSecondary inline-block rounded-3xl px-10 mt-9 font-bold py-2"
        >
          المزيد
        </Link>
      </div>
    </div>
  );
}
