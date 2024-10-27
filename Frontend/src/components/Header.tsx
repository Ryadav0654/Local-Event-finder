import React, { useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for mobile menu
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const navLinks = [
  { id: 1, slug: "/", name: "Home" },
  { id: 2, slug: "/events", name: "Events" },
  { id: 3, slug: "/about", name: "About" },
  { id: 4, slug: "/contact", name: "Contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap justify-between items-center px-5 py-4 md:px-16 md:py-4 bg-white dark:bg-[#0a0a0a] z-50 w-full sticky top-0">
      {/* Logo and ModeToggle */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          Eventify
        </h1>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Links - Responsive */}
      <nav
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row items-center w-full md:w-auto gap-4 md:gap-x-8 mt-4 md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.slug}
                className="hover:underline text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Only display these in the mobile menu */}
        <div className="flex flex-col items-center gap-4 md:hidden mt-4">
          <Link to="/create-event" className="font-medium text-lg">
            Create Event
          </Link>
          <ModeToggle />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button>Login</Button>
          </SignedOut>
        </div>
      </nav>

      {/* Desktop Only - Create Event and Login */}
      <div className="hidden md:flex justify-center items-center gap-4 mt-4 md:mt-0">
        <Link to="/create-event" className="font-medium text-lg">
          Create Event
        </Link>
        <ModeToggle />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button onClick={() => {navigate("/sign-in")}}>Login</Button>
          </SignedOut>
      </div>
    </header>
  );
};

export default Header;
