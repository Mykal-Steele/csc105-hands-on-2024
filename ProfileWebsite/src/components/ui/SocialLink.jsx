import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = ({ icon, href, label }) => {
  return (
    <a
      href={href}
      className="w-15 h-15 border border-black rounded-full flex items-center justify-center hover:bg-gray-100 transition"
      aria-label={label}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </a>
  );
};

SocialLink.propTypes = {
  icon: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SocialLink;
