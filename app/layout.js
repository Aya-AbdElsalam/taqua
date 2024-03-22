import { Amiri } from "next/font/google";
import "./globals.css";
import Header from "./_component/common/Header";
import Footer from "./_component/common/Footer";
const inter = Amiri({ subsets: ["arabic"], weight: "400" });
export const metadata = {
  title: "تقوى",
  description:
    "النقوى لقراءة القرآن والأذكار والأدعية يوفر تجربة ممتازة للمستخدمين، حيث يمكنهم الوصول إلى نصوص القرآن الكريم بسهولة ويسر، مع إمكانية تحديد السور بسرعة ودقة. كما يتيح الموقع قسمًا مخصصًا للأذكار والأدعية، حيث يمكن للمستخدمين الاستفادة من مجموعة متنوعة من الأذكار والأدعية بحسب الحاجة والوقت، مما يسهم في تعزيز الروحانية والاتصال الدائم بالله.",
  keywords: "أحاديث , أدعية , قرآن كريم , مواقيت الصلاة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.className} bg-bgPrimary text-textPrimary leading-[2] text-[22px]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
