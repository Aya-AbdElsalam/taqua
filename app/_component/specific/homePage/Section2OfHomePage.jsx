//this component return the third section of landing page
import Image from "next/image";
import React from "react";
import quran3 from "../../../_assets/quran3.webp";
export default function Section2OfHomePage() {
  return (
    <div className="container">
      <div className="flex gap-9  mb-[80px] flex-wrap">
        <div className="w-96 grow">
          <Image
            src={quran3}
            alt="quran"
            fetchPriority="low"
            placeholder="blur"
            blurDataURL="../_assets/quran3.webp"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="w-96 grow">
          <h1
            className={` font-bold my-4 text-[39px] md:text-[54px] leading-[1.5]`}
          >
            مصدركم للهداية الإلهية والحكمة
          </h1>
          <p>
            نزلت أولى آيات القران الكريم على النبي محمد صلى الله عليه وسلم في
            مكة المكرمة. استمرت عملية نزول القرآن على مدار حياة النبي صلى الله
            عليه وسلم، وتم تجميع الآيات وترتيبها في صورته النهائية في عهد
            الخليفة الراشد أبي بكر الصديق رضي الله عنه، وهذا الإجماع ثابت عند
            جميع المسلمين
          </p>
        </div>
      </div>
    </div>
  );
}
