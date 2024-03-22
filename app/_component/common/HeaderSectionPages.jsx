//this component return bottom-header of  pages
//import images
import bg from "../../_assets/bgSection.webp";
export default function HeaderSectionPages({ title }) {
  return (
    <div
      className="pt-[120px] text-center relative h-[400px] text-bgPrimary leading-[200px] bg-cover bg-bottom border-b-2"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <h1
        className={` font-bold my-4 text-[30px] sm:text-[45px] md:text-[65px] text-textPrimary`}
      >
        {title}
      </h1>
    </div>
  );
}
