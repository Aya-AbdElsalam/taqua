//this component return the container of surah in quran page
"use client";
import Link from "next/link";
import quranIcon from "../../../_assets/quran.webp";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaDownload, FaPlay } from "react-icons/fa6";

export default function Surah({ quran }) {
  const pathname = usePathname();
  const [quranFilter, setQuranFilter] = useState(quran);
  return (
    <div
      className={`container flex flex-col gap-3  ${
        pathname.includes("listen") ? "md:py-20" : "py-20"
      }`}
    >
      <div className="relative text-textThird">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="Search"
          placeholder="البحث بأسم السورة"
          className="w-full rounded-md bg-bgThird  shadow-sm  p-5 text-textThird"
          onInput={(e) => {
            setQuranFilter(
              quran.filter((q) => {
                //لتجاهل التشكيل عند البحث
                var s = q.name
                  .split("")
                  .filter((i) => i.match(/[أ-ي]|\s/))
                  .join("");
                return s.includes(e.target.value);
              })
            );
          }}
        />
        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button">
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
      {quranFilter.map((i) => {
        return pathname.includes("listen") ? (
          <div
            key={i.number}
            className="p-5 rounded-xl text-xl bg-[darkslategrey]/90 hover:bg-bgThird font-bold text-textThird flex justify-between"
          >
            <div>
              <Image
                alt="quran icon"
                width={50}
                height={50}
                src={quranIcon}
                fetchPriority="low"
                className="inline-block"
              />
              {i.name}
            </div>

            <div className="flex gap-6 text-textPrimary text-center">
              <Link
                href={`../../quran/listen/${i.number}`}
                className="rounded-full bg-bgPrimary w-10 h-10 text-[29px] flex justify-center items-center"
              >
                <FaPlay />
              </Link>
              <Link
                className="rounded-full bg-bgPrimary w-10 h-10 text-[29px] flex justify-center items-center"
                href={`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${i.number}.mp3`}
              >
                <FaDownload />
              </Link>
            </div>
          </div>
        ) : (
          <Link
            key={i.number}
            href={`reading/${i.number}`}
            className="p-5 rounded-xl text-xl bg-[darkslategrey]/90 hover:bg-bgThird font-bold text-textThird flex justify-between"
          >
            <div>
              <Image
                alt="quran icon"
                width={50}
                height={50}
                src={quranIcon}
                fetchPriority="low"
                className="inline-block"
              />
              {i.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
