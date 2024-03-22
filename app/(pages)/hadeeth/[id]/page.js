import HeaderSectionPages from "@/app/_component/common/HeaderSectionPages";
import HadeethApis from "@/app/_utils/HadeethApis";
import Link from "next/link";
export async function generateMetadata({ params }) {
  const Categories = await HadeethApis.getCategories();
  const CategoriesData = await Categories.data;
  const title = CategoriesData.find((i) => {
    return params.id == i.id;
  });
  return {
    title: title.title,
    description:
      "تحتوي الصفحة على مجموعة من الأحاديث النبوية المأثورة عن النبي محمد صلى الله عليه وسلم، والتي تتعلق ب" +
      title.title,
  };
}

export default async function page({ params }) {
  const hadeeth = await HadeethApis.getCategoriesHadeeth(params.id);
  const data = await hadeeth.data;
  //find name of category
  const Categories = await HadeethApis.getCategories();
  const CategoriesData = await Categories.data;
  const title = CategoriesData.find((i) => {
    return params.id == i.id;
  });
  return (
    <>
      <HeaderSectionPages title={title.title} />
      <div className="container flex flex-wrap gap-8 py-20 font-serif">
        {data &&
          data.data.map((i, index) => {
            return (
              <Link
                href={`${params.id}/${i.id}`}
                key={index}
                className=" p-5  text-textThird   bg-[darkslategrey]/90 hover:bg-bgThird font-bold w-full grow text-[20px]"
              >
                {i.title}
              </Link>
            );
          })}
      </div>
    </>
  );
}
