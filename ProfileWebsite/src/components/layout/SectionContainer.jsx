import React from "react";
import PropTypes from "prop-types";

const SectionContainer = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

SectionContainer.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SectionContainer;
