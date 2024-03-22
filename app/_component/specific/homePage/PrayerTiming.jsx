//this component return the container of prayerTiming in landing page
"use client";
import { useEffect, useState } from "react";
import HeaderSection from "../../common/HeaderSection";
import axios from "axios";
import { cities } from "../../../data/city";
//import images
import bg from "../../../_assets/pillar-parallex.webp";
export default function PrayerTiming() {
  //set selected city "arabic name"
  const [cityActiveAr, setCityActiveAr] = useState(cities[0].ar);
  //set selected city "english name==> identifier"
  const [cityActive, setCityActive] = useState(cities[0].en);
  //set the times of prayer for selected city
  const [timing, setTiming] = useState();
  useEffect(() => {
    axios
      .get(`https://api.aladhan.com/v1/timingsByCity`, {
        params: {
          city: cityActive,
          country: "Egypt",
        },
      })
      .then((data) => setTiming(data.data));
  }, [timing == undefined, cityActive]);
  return (
    <div
      id="prayer-times"
      className="py-[80px]  text-textThird relative my-[80px] bg-fixed "
      style={{ backgroundImage: `url("${bg.src}")` }}
    >
      <div className="absolute inset-[0] bg-black opacity-70" />
      <div className="text-center text-textThird font-bold z-10 relative">
        <HeaderSection title={"مواقيت الصلاة"} bg={"textThird"} />
        <h1 className="text-[25px]">
          "{timing && timing.data.date.gregorian.date}"
        </h1>
      </div>

      <div className="z-10 relative text-textThird text-right container">
        <div className="flex justify-between border-b-2">
          <h1 className="text-[23px] font-bold ">🌐 مصر, {cityActiveAr}</h1>
          <div>
            <select
              aria-label="select_city"
              id="select_city"
              className=" bg-transparent border mb-[2px] ml-3"
              onChange={(e) => {
                setCityActive(e.target.value.split(",")[0]);
                setCityActiveAr(e.target.value.split(",")[1]);
              }}
            >
              {cities.map((i) => {
                return (
                  <option
                    key={i.en}
                    className="text-textPrimary"
                    value={`${i.en},${i.ar}`}
                  >
                    {i.ar}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap mt-7  text-center font-bold gap-4">
          <div className="w-[150px] border-2 border-bgPrimary text-[20px] grow">
            <p className="bg-bgPrimary text-textPrimary ">الفجر</p>

            {timing && timing.data.timings["Fajr"]}
          </div>
          <div className="w-[150px] border-2 border-bgPrimary text-[20px] grow">
            <p className="bg-bgPrimary text-textPrimary ">الشروق</p>

            {timing && timing.data.timings["Sunrise"]}
          </div>
          <div className="w-[150px] border-2 border-bgPrimary text-[20px] grow">
            <p className="bg-bgPrimary text-textPrimary ">الضهر</p>
            {timing && timing.data.timings["Dhuhr"]}
          </div>
          <div className="w-[150px] border-2 border-bgPrimary text-[20px] grow">
            <p className="bg-bgPrimary text-textPrimary ">العصر</p>
            {timing && timing.data.timings["Asr"]}
          </div>
          <div className="w-[150px] border-2 border-bgPrimary text-[20px] grow">
            <p className="bg-bgPrimary text-textPrimary ">المغرب</p>
            {timing && timing.data.timings["Maghrib"]}
          </div>
          <div className="w-[150px] border-2 border-bgPrimary text-[20px] grow">
            <p className="bg-bgPrimary text-textPrimary ">العشاء</p>
            {timing && timing.data.timings["Isha"]}
          </div>
        </div>
      </div>
    </div>
  );
}
