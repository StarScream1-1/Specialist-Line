import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-600/20 ring-1 ring-slate-200 transition duration-300 hover:scale-105">
            <span className="text-lg font-black">S</span>
          </div>

          <div className="leading-tight">
            <p className="text-lg font-extrabold tracking-tight text-slate-900">
              Specialist <span className="text-sky-600">Line</span>
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Your 2nd Office
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
          >
            Home
          </Link>
          <Link
            href="/#why-us"
            className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
          >
            About
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
          >
            Our Services
          </Link>
          <Link
            href="/#why-us"
            className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
          >
            Why Us
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
          >
            Contacts
          </Link>
        </nav>

        <Link
          href="/book-appointment"
          className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700"
        >
          Schedule a Meeting
        </Link>
      </div>
    </header>
  );
}