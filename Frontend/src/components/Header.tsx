import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const navLinks = [
  {
    id: 1,
    slug: "/",
    name: "Home",
  },
  {
    id: 2,
    slug: "/events",
    name: "Events",
  },

  {
    id: 3,
    slug: "/about",
    name: "About",
  },
  {
    id: 4,
    slug: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  return (
    <div className="flex justify-around items-center p-4 w-full">
      <div>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl ">
          Eventify
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex justify-right items-center gap-x-8">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.slug} className="hover:underline font-semibold">{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex justify-center items-center gap-x-4">
        <Link to="/create-event" className="font-semibold">Create Event</Link>
        <ModeToggle />
        <Button>Login</Button>
        {/* <Button>Register</Button> */}
      </div>
    </div>
  );
};

export default Header;
