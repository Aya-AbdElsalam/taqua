//this component return the container of each Dhikr
"use client";
import React from "react";
export default function AzkarComponent({ index, i }) {
  return (
    <div
      key={index}
      className="flex cursor-pointer flex-col p-5 gap-4 rounded-2xl text-textThird font-bold  bg-[darkslategrey]/90 hover:bg-bgThird w-[300px] grow text-[25px]"
      onClick={(e) => {
        //Reducing the number of repetitions when clicking on a div
        let count = e.currentTarget.children[0].textContent;
        count--;
        e.currentTarget.children[0].textContent = count;
        if (count === 0) e.currentTarget.style.display = "none";
      }}
    >
      <div className="relative w-full h-20 text-center leading-[80px] mx-auto  border">
        {i.count}
      </div>
      <div>
        {i.content.split(".").map((c) => (
          <p key={c}>{c}</p>
        ))}{" "}
      </div>
      <span className="italic text-bgPrimary text-[17px] font-thin">
        [أضغط للعد التنازلي]
      </span>
    </div>
  );
}
