import HeaderSectionPages from "@/app/_component/common/HeaderSectionPages";
import OptionBox from "@/app/_component/specific/quranPage/OptionBox";
import QuranApis from "@/app/_utils/QuranApis";
export async function generateMetadata({ params }) {
  const res = await QuranApis.getSpecificSurah(params.number);
  const title = await res.data.data.name;
  return {
    title: title,
    description: " قراءة سوره " + title + "مع تفسير كل آية",
  };
}
export default async function page({ params }) {
  const res = await QuranApis.getSpecificSurah(params.number);
  const title = await res.data.data.name;
  return (
    <>
      <HeaderSectionPages title={title} />
      <div className="container py-[10px]">
        <OptionBox number={params.number} />
      </div>
    </>
  );
}
