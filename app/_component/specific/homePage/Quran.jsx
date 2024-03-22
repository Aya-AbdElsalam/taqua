//this component return the container of Quran in landing page
import HeaderSection from "../../common/HeaderSection";
import QuranApis from "../../../_utils/QuranApis";
import Link from "next/link";
export default async function Quran() {
  const res = await QuranApis.getSurah();
  const data = await res.data.data;

  return (
    <div className="my-[80px]">
      <div className="container text-center">
        <HeaderSection title={"القرآن الكريم"} />
        <div className="flex flex-wrap gap-5 justify-center items-start mt-8 font-bold ">
          {Array.isArray(data) &&
            data.slice(0, 12).map((i) => {
              return (
                <div className="group relative  ">
                  <span className="absolute inset-0 border-2 rounded-md border-textPrimary border-dashed"></span>
                  <div className="grow w-44  justify-around border  group leading-9 cursor-pointer hover:bg-bgThird hover:text-textThird relative flex h-full transform items-end   transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="transition-opacity group-hover:absolute group-hover:opacity-0 grow w-44 flex justify-around border-textPrimary border py-6 rounded-md group leading-9 cursor-pointer hover:bg-bgThird hover:text-textThird ">
                      <span className="bg-bgThird/60 rounded-md w-[35px] h-[35px] inline-block group-hover:bg-textThird group-hover:text-bgSecondary">
                        {i.number}
                      </span>
                      {i.name}
                    </div>
                    <div className="absolute  opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-1">
                      <h1 className=" font-medium ">{i.name}</h1>
                      <Link
                        className="bg-btnSecondary mx-1 inline-block p-1 rounded-md"
                        href={`quran/listen/${i.number}`}
                      >
                        استماع
                      </Link>
                      <Link
                        className="bg-btnSecondary p-1 rounded-md"
                        href={`quran/reading/${i.number}`}
                      >
                        قراءة
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <Link
          href={"quran"}
          className="bg-btnSecondary rounded-3xl px-10 mt-9 font-bold py-2 inline-block"
        >
          المزيد
        </Link>
      </div>
    </div>
  );
}
