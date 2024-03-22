//this component return the banner-bottom of landing page
export default function Elmenator() {
  return (
    <div className="my-[80px]  ">
      <div className="h-11 w-full bg-bgThird  rotate-[358deg] overflow-hidden">
        <h1 className="text-textThird font-bold leading-10 ">
          {"رمضان كريم ✶ ".repeat(12)}
        </h1>
      </div>
      <div className="h-11 w-full bg-btnSecondary  rotate-[2deg] -z-10 relative top-[-42px] overflow-hidden"></div>
    </div>
  );
}
