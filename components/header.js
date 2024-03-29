import Link from "next/link";
export default function Header() {
  return (
    <>
      <nav className="flex items-center flex-wrap mb-20 mt-8 tracking-tight md:tracking-tighter leading-tight justify-between border-b border-gray-300">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold ">
            <Link href="/">
              <a className="hover:underline">Arabuluculuk</a>
            </Link>
            .
          </h2>
        </div>
        <div>
          <div className="text-md md:text-2xl space-x-5 ml-auto">
            <Link href="/">
              <a className="hover:underline">Ana Sayfa</a>
            </Link>

            <Link href="/blog">
              <a className="hover:underline">Blog</a>
            </Link>
            <Link href="/contact">
              <a className="hover:underline">İletişim</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
