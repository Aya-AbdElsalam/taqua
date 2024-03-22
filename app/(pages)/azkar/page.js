import HeaderSectionPages from "@/app/_component/common/HeaderSectionPages";
import Link from "next/link";
import dua from "../../_assets/dua.webp";
import Image from "next/image";
import { azkar } from "@/app/data/azkar";
export const metadata = {
  title: "اذكار",
  description:
    "تحتوي الصفحة على مجموعة من الأذكار التي يُنصح بترديدها في الصباح والمساء، مثل أذكار الصباح وأذكار المساء وأذكار النوم والاستيقاظ، وغيرها من الأذكار التي تعزز الايمان وتحافظ على الذكر الله",
  keywords: Object.keys(azkar).join(" , "),
};
export default async function page() {
  return (
    <>
      <HeaderSectionPages title={"الأذكار"} />
      <div className="container flex flex-col gap-3 py-20">
        {azkar &&
          Object.keys(azkar).map((a, index) => {
            return (
              <Link
                key={a}
                href={`azkar/${index}`}
                className="p-5 rounded-xl text-xl bg-[darkslategrey]/90 hover:bg-bgThird font-bold text-textThird"
              >
                <Image
                  alt={a}
                  width={50}
                  height={50}
                  src={dua}
                  className="inline-block"
                />
                {a}
              </Link>
            );
          })}
      </div>
    </>
  );
}
