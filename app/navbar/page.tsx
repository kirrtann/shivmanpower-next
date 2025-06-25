"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ApplyNowModal from "../common/applyfrom";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-[#466DA8] fixed top-0 w-full z-50">
        <div className="max-w-[1250px] mx-auto py-[23px] px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex w-[350px] items-center space-x-2 px-[15px]">
            <img src="/logo.jpg" alt="Shiv Man Power" className="object-contain" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-4 text-[15px] text-white">
            <Link
              href="/"
              prefetch={true}
              onClick={toggleMenu}
              className={`hover:bg-white hover:rounded-md hover:text-[#466DA8] px-5 py-2 transition ${pathname === "/" ? "bg-white text-[#466DA8] rounded-md" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/services"
              prefetch={true}
              onClick={toggleMenu}
              className={`hover:bg-white hover:rounded-md hover:text-[#466DA8] px-5 py-2 transition ${pathname === "/services" ? "bg-white text-[#466DA8] rounded-md" : ""}`}
            >
              Services
            </Link>
            <Link
              href="/job"
              prefetch={true}
              onClick={toggleMenu}
              className={`hover:bg-white hover:rounded-md hover:text-[#466DA8] px-5 py-2 transition ${pathname === "/job" ? "bg-white text-[#466DA8] rounded-md" : ""}`}
            >
              Job Opening
            </Link>
            <Link
              href="/contact"
              prefetch={true}
              onClick={toggleMenu}
              className={`hover:bg-white hover:rounded-md hover:text-[#466DA8] px-5 py-2 transition ${pathname === "/contact" ? "bg-white rounded-md text-[#466DA8] " : ""}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Apply Button + Hamburger */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowApply(true)}
              className="bg-white text-[#466DA8] hidden sm:block px-5 py-2 rounded-full shadow hover:bg-[#466DA8] hover:text-white border border-white transition"
            >
              + Apply Now
            </button>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-white pl-4">
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-96 min-h-[300px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <ul className="px-4 pb-4 pt-2 w-[92%] mx-auto mt-2 rounded-xl shadow-md bg-[#466DA8] text-white space-y-2">
            <li>
              <div className="border-b pb-2">
                <button
                  onClick={() => setShowApply(true)}
                  className="bg-white text-[#466DA8] sm:hidden px-7 py-2 rounded-full shadow hover:bg-[#466DA8] hover:text-white border border-[#466DA8] transition"
                >
                  + Apply Now
                </button>
              </div>
            </li>
            <li>
              <Link
                href="/"
                className={`block py-3 px-4 text-xl rounded-lg hover:bg-white hover:rounded-md hover:text-[#466DA8] transition ${pathname === "/" ? "bg-white text-[#466DA8] rounded-md" : ""
                  }`}
                onClick={toggleMenu}
                prefetch={true}
              >
                Home
              </Link>
            </li>
            <li>
              <div className="border-t border-white/20 my-1" />
              <Link
                href="/services"
                className={`block py-3 px-4 text-xl rounded-lg hover:bg-white  hover:rounded-md hover:text-[#466DA8] transition ${pathname === "/services" ? "bg-white text-[#466DA8] rounded-md" : ""
                  }`}
                onClick={toggleMenu}
                prefetch={true}
              >
                Services
              </Link>
            </li>
            <li>
              <div className="border-t border-white/20 my-1" />
              <Link
                href="/job"
                className={`block py-3 px-4 text-xl rounded-lg hover:bg-white  hover:rounded-md hover:text-[#466DA8] transition ${pathname === "/job" ? "bg-white text-[#466DA8] rounded-md" : ""
                  }`}
                onClick={toggleMenu}
                prefetch={true}
              >
                Job Opening
              </Link>
            </li>
            <li>
              <div className="border-t border-white/20 my-1" />
              <Link
                href="/contact"
                className={`block py-3 px-4 text-xl rounded-lg hover:bg-white hover:rounded-md hover:text-[#466DA8] transition ${pathname === "/contact" ? "bg-white text-[#466DA8] rounded-md" : ""
                  }`}
                onClick={toggleMenu}
                prefetch={true}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ApplyNowModal open={showApply} onClose={() => setShowApply(false)} />
    </>
  );
};

export default Navbar;