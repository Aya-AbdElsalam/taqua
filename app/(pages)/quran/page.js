import HeaderSectionPages from "@/app/_component/common/HeaderSectionPages";
import reading from "../../_assets/reading.webp";
import audio from "../../_assets/audio.webp";
import Link from "next/link";
export const metadata = {
  title: "القرآن الكريم",
  description:
    "الصفحة تحتوي علي عناصر تحكم واضحة وسهلة الاستخدام تمكن المستخدم من الاختيار بين الاستماع للقرآن الكريم أو قراءته",
};

export default async function page() {
  return (
    <>
      <HeaderSectionPages title={"القرآن الكريم"} />
      <div
        className="w-full h-[40vh] my-9 bg-cover bg-center relative bg-fixed text-[#d8e9df] font-bold text-center text-6xl hover:shadow-2xl"
        style={{ backgroundImage: `url(${reading.src})` }}
      >
        <div className="bg-black/50 absolute inset-[1] w-full h-full " />
        <Link
          href={"../quran/reading"}
          className="w-full h-full inline-block z-10 relative"
        >
          <h2 className="relative top-[40%] border-t-4 border-b-4 p-2 border-[#d8e9df]">
            القراءة
          </h2>
        </Link>
      </div>
      <div
        className="w-full h-[40vh] my-9 bg-cover bg-center md:bg-fixed relative text-center text-6xl text-[#d8e9df] hover:shadow-2xl "
        style={{ backgroundImage: `url(${audio.src})` }}
      >
        <div className="bg-black/50 absolute inset-[1] w-full h-full " />
        <Link
          href={"../quran/listen"}
          className="w-full h-full inline-block z-10 relative "
        >
          <h2 className=" top-[40%] relative border-t-4 border-b-4 border-[#d8e9df] p-2">
            الأستماع
          </h2>
        </Link>
      </div>
    </>
  );
}
