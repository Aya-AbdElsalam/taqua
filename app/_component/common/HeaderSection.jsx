//this component return header of sections in landing page
import { Reem_Kufi } from "next/font/google";
const inter = Reem_Kufi({ subsets: ["latin"] });
export default function HeaderSection({ title, bg }) {
  return (
    <div className="z-10 relative">
      <span className="flex items-center">
        <span
          className={`h-px flex-1 ${bg ? `bg-${bg}` : `bg-bgThird`}`}
        ></span>
        <span
          className={`shrink-0 px-6  text-4xl ${inter.className} mb-7 ${
            bg ? `text-${bg}` : `text-bgThird`
          }`}
        >
          {title}
        </span>
        <span
          className={`h-px flex-1 ${bg ? `bg-${bg}` : `bg-bgThird`}`}
        ></span>
      </span>
    </div>
  );
}
