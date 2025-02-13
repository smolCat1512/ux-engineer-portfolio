// Mark this file as a Client Component
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for the menu toggle
import Logo from "./logo";

const navItems = [
  { title: "Case Studies", href: "#case-studies" },
  { title: "About + CV", href: "#about" },
  { title: "What and How", href: "#what-how" },
  { title: "Connect", href: "#connect" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg p-4 flex items-center justify-between z-50">
      <Link href="/">
        <Logo />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-white text-lg hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-6 flex flex-col items-center space-y-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white text-lg hover:underline"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
