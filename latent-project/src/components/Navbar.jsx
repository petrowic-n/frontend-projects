import { useState } from "react";
import { nav } from "../data";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState("hidden");

  function handleMobileMenu() {
    setToggleMenu("");
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-45 bg-[rgba(20,16,14,0.8)] backdrop-blur-md border-b border-border">
        <div className="wrap flex items-center justify-between h-19">
          <div className="flex items-center gap-2.5 font-fraunces font-semibold text-xl tracking-[0.01em]">
            <span className="dot"></span>
            <a
              href="#"
              className="cursor-pointer hover:translate-y-0.5 transition  ease-in"
            >
              {nav.brand}
            </a>
          </div>
          {/* Nav Links */}
          <ul className="hidden md:flex gap-9 list-none">
            {nav.links.map((link) => (
              <li className="nav-link" key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          {/* CTA */}
          <div className="hidden md:block">
            <button className="btn-primary">
              <a href={nav.cta.href}>{nav.cta.label}</a>
            </button>
          </div>

          {/* Open Icon */}
          <div className="block md:hidden" onClick={handleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="cursor-pointer"
              fill="var(--color-text-primary)"
              viewBox="0 0 24 24"
            >
              <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path>
            </svg>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`${toggleMenu} absolute top-0 right-0 bottom-0 z-999 bg-bg-panel-2 px-4 pt-4`}
      >
        {/* Close Icon */}
        <div onClick={() => setToggleMenu("hidden")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="relative ml-auto cursor-pointer"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
          </svg>
        </div>

        {/* Mobile Nav Links */}
        <ul className="list-none mt-14">
          {nav.links.map((link) => (
            <li className="nav-link mb-6" key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button className="btn-primary">
          <a href={nav.cta.href}>{nav.cta.label}</a>
        </button>
      </div>
    </>
  );
}

export default Navbar;
