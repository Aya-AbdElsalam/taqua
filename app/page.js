import Image from "next/image";
import Banner from "./_component/specific/homePage/Banner";
import Elmenator from "./_component/specific/homePage/elmenator";
import Section2OfHomePage from "./_component/specific/homePage/Section2OfHomePage";
import Quran from "./_component/specific/homePage/Quran";
import Hadeeth from "./_component/specific/homePage/Hadeeth";
import Azkar from "./_component/specific/homePage/Azkar";
import PrayerTiming from "./_component/specific/homePage/PrayerTiming";

export default function Home() {
  return (
    <>
      <Banner />
      <Elmenator />
      <PrayerTiming />

      <Section2OfHomePage />
      <Quran />
      <Hadeeth />
      <Azkar />
    </>
  );
}
