"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
interface Props {}
const images = [
  "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fproyecto1%2Fv2%2Fimg1.png?alt=media&token=6bed5160-248d-4fe7-a477-686722838ed4",
  "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fproyecto1%2Fv2%2Fimg2.png?alt=media&token=fef342e0-3a1d-4c4a-ae5c-ada2cafb0684",
  "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fproyecto1%2Fv2%2Fimg3.png?alt=media&token=d4e31c3e-b7ef-4a1d-a60a-18999e531e10",
  "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fproyecto1%2Fv2%2Fimg5.png?alt=media&token=6b852738-5776-4be6-8623-8468aabf11e1",
  "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fproyecto1%2Fv2%2FSin%20t%C3%ADtulo4.png?alt=media&token=20927814-db81-4322-9c8b-326e35ab23ab",
];
const ProjectImages: React.FC<Props> = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className="bg-red-600">
      <div className={`flex items-center flex-wrap`}>
        {images.map((src, index) => (
          <Image
            src={src}
            onClick={() => openImageViewer(index)}
            width={250}
            height={250}
            key={index}
            style={{ margin: "2px" }}
            alt=""
          />
        ))}
      </div>

      {isViewerOpen && (
        <div className={`fixed z-50 `}>
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectImages;
