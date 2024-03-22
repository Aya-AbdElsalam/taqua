//this component return header of pages
import Image from "next/image";
import Link from "next/link";
//import images
import logo from "../../_assets/logo.webp";
export default function Header() {
  return (
    <header className="fixed w-full font-bold bg-bgPrimary z-50  shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block" href="/">
              <Image
                src={logo}
                alt="logo"
                width={64}
                height={64}
                placeholder="empty"
                priority
                fetchPriority="high"
              />
            </Link>
          </div>

          <nav aria-label="Global ">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-textPrimary transition hover:text-textPrimary/80"
                  href="/quran"
                >
                  القرآن
                </Link>
              </li>

              <li>
                <Link
                  className="text-textPrimary transition hover:text-textPrimary/80"
                  href="/hadeeth"
                >
                  الأحاديث
                </Link>
              </li>

              <li>
                <Link
                  className="text-textPrimary transition hover:text-textPrimary/80"
                  href="/azkar"
                >
                  الاذكار
                </Link>
              </li>

              <li>
                <Link
                  className="text-textPrimary transition hover:text-textPrimary/80"
                  href="/#prayer-times"
                >
                  مواقيت الصلاه
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
