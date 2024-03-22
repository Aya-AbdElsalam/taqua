//this component return section of azkar in landing page
import Link from "next/link";
//import images
import azkar from "../../../_assets/azkar.webp";
export default async function Azkar() {
  return (
    <section
      className=" text-textThird my-[80px] relative overflow-hidden bg-cover"
      style={{ backgroundImage: `url(${azkar.src})` }}
    >
      <div className="absolute bg-black/70 inset-[1] w-full h-full "></div>
      <div className="bg-fixed mx-auto max-w-xl text-center py-[120px] flex flex-col gap-9 relative z-10 container items-center">
        <h1 className="text-3xl font-extrabold leading-[2]">
          أن الذكر سدٌّ بين العبد وبين جهنم فإذا كانت له إلى جهنم طريق من عمل من
          الأعمال كان الذكر سدا في تلك الطريق فإذا كان ذكرا دائما كاملا كان سدا
          محكما لا منفذ فيه و إلا فبحسبه
        </h1>
        <Link
          className=" w-fit rounded bg-btnSecondary px-12 py-3 text-xl  text-textPrimary font-bold shadow hover:bg-btnSecondary/70 focus:outline-none focus:ring active:bg-btnSecondary "
          href="azkar"
        >
          الاذكار ⬅
        </Link>
      </div>
    </section>
  );
}
