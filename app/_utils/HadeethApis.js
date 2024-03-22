import { default as axiosClientHadeeth } from "./axiosClientHadeeth";
const getCategories = () =>
  axiosClientHadeeth.get("categories/list/?language=ar");
const getCategoriesHadeeth = (i) =>
  axiosClientHadeeth.get(`hadeeths/list/?language=ar&category_id=${i}`);
const getHadeethDetails = (i) =>
  axiosClientHadeeth.get(`hadeeths/one/?language=ar&id=${i}`);
export default { getCategories, getCategoriesHadeeth, getHadeethDetails };
