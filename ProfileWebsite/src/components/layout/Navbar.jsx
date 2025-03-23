import React from "react";
import Button from "../ui/Button";
import NavLink from "../ui/NavLink";

const Navbar = () => {
  const navLinks = [
    { title: "Home", isActive: true, href: "#" },
    { title: "About Me", isActive: false, href: "#" },
    { title: "Gallery", isActive: false, href: "#" },
  ];

  return (
    <header className="flex justify-between items-center px-12 py-4">
      <a className="text-2xl font-bold" href="#">
        Artist John
      </a>

      <nav>
        <ul className="flex items-center list-none gap-9 font-medium text-sm">
          {navLinks.map((link) => (
            <li key={link.title}>
              <NavLink isActive={link.isActive} href={link.href}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Button variant="primary">Contact</Button>
    </header>
  );
};

export default Navbar;
