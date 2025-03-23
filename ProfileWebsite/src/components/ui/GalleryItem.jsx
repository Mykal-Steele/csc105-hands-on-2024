import React from "react";
import PropTypes from "prop-types";

const GalleryItem = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-3xl shadow-[0_8px_12px_rgba(0,0,0,0.30)] object-cover w-full h-64 
        transition-transform duration-300 ease-in-out 
        hover:scale-102 hover:shadow-[0_8px_12px_rgba(0,0,0,0.50)]"
    />
  );
};

GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default GalleryItem;
