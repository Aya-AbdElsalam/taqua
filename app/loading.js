import React from "react";
import icon from "./_assets/logo.webp";
import Image from "next/image";
export default function loading() {
  return (
    <div className="py-[120px] flex justify-center items-center h-[100vh] w-[100wh]">
      <div className=" relative  w-40 h-40">
        <div className="absolute inset-1  border-2 border-black  border-loading w-full h-full animate-spin-slow"></div>
        <div className="absolute inset-1  border-2 border-bgThird  border-loading w-full h-full animate-spin-slow"></div>
        <Image
          src={icon}
          width={80}
          height={80}
          alt="loading"
          className="mx-auto mt-[45px]"
        />
      </div>
    </div>
  );
}
