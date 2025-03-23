import React from "react";
import Button from "../components/ui/Button";
import SectionContainer from "../components/layout/SectionContainer";

const AboutSection = () => {
  return (
    <SectionContainer
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-24 px-8 md:px-20 py-12"
    >
      <div className="flex justify-center">
        <img
          src="https://pngimg.com/d/man_PNG6531.png"
          alt="Artist John"
          className="w-72 md:w-96 object-cover"
        />
      </div>

      <div>
        <div className="space-y-4 md:space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Me</h1>
          <h2 className="text-xl font-semibold">Artist & Designer</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            eveniet doloribus similique unde! Eligendi, deserunt totam quaerat
            laborum, veritatis aliquid placeat quis hic facilis officiis dolore
            ea aperiam consequuntur modi?
          </p>
        </div>

        <Button size="medium">Read More</Button>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
