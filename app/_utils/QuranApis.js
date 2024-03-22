import { default as axiosClientQuran } from "./axiosClientQuran";
const getSurah = () => axiosClientQuran.get("/surah");
const getSpecificSurah = (number) => axiosClientQuran.get(`/surah/${number}`);
const getEditionText = () =>
  axiosClientQuran.get("/edition/type/quran?language=ar&&format=text");
export default { getSurah, getEditionText, getSpecificSurah };
