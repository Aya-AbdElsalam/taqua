//this component return the banner of landing page
import quran1 from "../../../_assets/quran1.webp";
import quran2 from "../../../_assets/quran2.webp";
import Link from "next/link";
export default function Banner() {
  return (
    <div className={`pt-[100px] container `}>
      <h1
        className={` font-bold my-4 text-[36px] sm:text-[39px] md:text-[65px] border-b-2 pt-6 border-t-2 border-bgThird`}
      >
        "كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِّيَدَّبَّرُوا آيَاتِهِ
        وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ"
      </h1>
      <div className="flex mt-9 gap-9 flex-wrap items-center">
        <div className="w-96 flex gap-3 grow">
          <div
            className=" w-2/4 h-[350px]  rounded-xl bg-cover"
            role="img"
            rel="preload"
            style={{ backgroundImage: `url(${quran1.src})` }}
          />
          <div
            role="img"
            rel="preload"
            className="  w-2/4 h-[350px]  rounded-xl bg-cover"
            style={{ backgroundImage: `url(${quran2.src})` }}
          />
        </div>
        <div className="w-96 grow-[.5] text-xl font-medium">
          <p>
            أهلاً وسهلاً في منصتنا لقراءة القرآن، حيث يمكنكم استكشاف وتفسير
            كلمات الله والاستفادة منها في رحلتكم الروحية.
          </p>
          <Link
            href={"quran/reading"}
            className="bg-btnPrimary text-textThird w-full mt-5 p-2 rounded-3xl inline-block"
          >
            📖 اقرأ القرآن{" "}
          </Link>
          <Link
            href={"quran/listen"}
            className="bg-btnSecondary text-textPrimary w-full mt-5 p-2 rounded-3xl inline-block"
          >
            🔊 استمع إلى القرآن{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
