import React from "react";
import PropTypes from "prop-types";

const NavLink = ({ children, isActive, href }) => {
  return isActive ? (
    <a
      className="bg-green-200 hover:bg-green-300 px-4 py-2 rounded-full transition"
      href={href}
    >
      {children}
    </a>
  ) : (
    <a className="hover:text-green-300 transition" href={href}>
      {children}
    </a>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

export default NavLink;
