'use client'
import Image from "next/image";
import Link from "next/link";

const navigationItems = ["About", "Gallery", "Pricing", "Blog", "Contact"]; 
export default function Navbar() {
  return (
    <main>
      <header>
        <nav
          className="flex justify-between px-5 md:px-10 lg:px-18 py-4"
        >
          <Link
            href="/"
          >
            <Image
              src="/logo.png"
              alt="Auto Works"
              className="w-29"
              width={100}
              height={48}
            />
          </Link>

          <div className="hidden items-center gap-6 text-sm text-white sm:flex lg:gap-12">
            {navigationItems.map((item) => (
              <Link
                key={item}
                href={`${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
            <button
              className="size-10 cursor-pointer text-white"
              type="button"
              aria-label="Search"
            >
             <svg
      className='size-6'
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
            </button>
          </div>

          <details className="relative z-100 sm:hidden">
            <summary
              className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-[#292929] text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/10 [&::-webkit-details-marker]:hidden"
              aria-label="Open navigation menu"
            >
              <svg
      className="size-6"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.7"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
            </summary>
            <div className="absolute right-0 top-13 z-10 w-52.5 border border-[#292929] bg-[#0f0f0f] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
              {navigationItems.map((item) => (
                <a
                  className="block w-full px-3 py-3.25 text-left text-xs text-white"
                  key={item}
                  href={`${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
              <button
                className="flex w-full cursor-pointer items-center gap-2 border-0 border-t border-[#292929] bg-transparent px-3 py-3.25 text-left text-xs  tracking-[0.08em] text-white"
                type="button"
              >
                <svg
      className='size-6'
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
                <span>Search</span>
              </button>
            </div>
          </details>
        </nav>
      </header>
    </main>
  );
}
