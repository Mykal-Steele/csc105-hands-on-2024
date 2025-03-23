import React from "react";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/ui/Button";
import SocialLink from "../components/ui/SocialLink";
import SectionContainer from "../components/layout/SectionContainer";

const socialLinks = [
  { icon: faFacebookF, href: "#", label: "Facebook" },
  { icon: faInstagram, href: "#", label: "Instagram" },
  { icon: faEnvelope, href: "#", label: "Email" },
];

const HomeSection = () => {
  return (
    <SectionContainer
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 my-12 items-center gap-8 mx-24 px-8 md:px-20 py-12"
    >
      <div>
        <div className="space-y-4 md:space-y-6">
          <p className="text-lg font-medium">Hello, It's me</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">Artist John</h1>
          <h2 className="text-xl font-semibold">I'm an Artist</h2>
          <p className="text-gray-600">
            Please hold your breath as we dive into a world full of creativity
            with designer John.
          </p>
        </div>

        <div className="flex items-center gap-4 pt-12 mb-12">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.label}
              icon={link.icon}
              href={link.href}
              label={link.label}
            />
          ))}
        </div>

        <Button size="large">My Portfolio</Button>
      </div>

      <div className="flex justify-center">
        <img
          src="https://www.pngall.com/wp-content/uploads/9/Male-Entrepreneur-PNG-Free-Image.png"
          alt="Artist John"
          className="w-72 md:w-96 object-cover"
        />
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
