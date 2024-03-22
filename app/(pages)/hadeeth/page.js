import HeaderSectionPages from "@/app/_component/common/HeaderSectionPages";
import HadeethApis from "@/app/_utils/HadeethApis";
import Image from "next/image";
import React from "react";
import img from "../../_assets/star.webp";
import Link from "next/link";
export const metadata = {
  title: "احاديث",
  description:
    "تحتوي الصفحة على مجموعة من الأحاديث النبوية المأثورة عن النبي محمد صلى الله عليه وسلم، والتي تتعلق بمختلف الجوانب الدينية والحياتية. تشمل هذه الأحاديث نصائح وتوجيهات للمسلمين في شؤون العبادات والأخلاق والسلوكيات اليومية",
  keywords: "سيدنا محمد صلي الله عليه و سلم , حديث ",
};
export default async function page() {
  const data = await HadeethApis.getCategories();
  const hadeeth = await data.data;
  return (
    <>
      <HeaderSectionPages title={"احاديث"} />
      <div className="container flex flex-col gap-3 py-20">
        {hadeeth &&
          hadeeth.map((a) => {
            return (
              <Link
                key={a.id}
                href={`hadeeth/${a.id}`}
                className="p-5 rounded-xl text-xl bg-[darkslategrey]/90 hover:bg-bgThird font-bold text-textThird"
              >
                <Image
                  alt={a}
                  width={50}
                  height={50}
                  src={img}
                  className="inline-block"
                />{" "}
                {a.title}
              </Link>
            );
          })}
      </div>
    </>
  );
}
