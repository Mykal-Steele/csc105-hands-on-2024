import React from "react";
import SectionContainer from "../components/layout/SectionContainer";
import GalleryItem from "../components/ui/GalleryItem";

const galleryImages = [
  "https://cdn.dribbble.com/userupload/2952377/file/original-4209c1c0a2ee2db159499c3fe9bdf27b.png?resize=2048x1536&vertical=center",
  "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709859570/catalog/1400320195934711808/pmg5rg5tlursjxuxn29e.webp",
  "https://www.vitalcare.com.au/wp-content/uploads/2024/02/web2@288x-1030x579.png",
  "https://pbs.twimg.com/media/FPHCH0KWYAcpBY9.jpg",
  "https://cdn.dribbble.com/users/90631/screenshots/16085148/media/6f2ba333cb3086e320e45e9b6b4e16bd.png",
  "https://cdn.dribbble.com/users/1673170/screenshots/6855703/1606x1204_wa-chat.png",
];

const GallerySection = () => {
  return (
    <SectionContainer
      id="gallery"
      className="flex flex-col items-center justify-center px-4 py-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold my-12">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {galleryImages.map((src, idx) => (
          <GalleryItem key={idx} src={src} alt={`Artwork ${idx + 1}`} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default GallerySection;
