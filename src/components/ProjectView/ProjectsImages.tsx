"use client";
import Project from "@/Projects/class/Projects";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
interface Props {
  image: Project["images"];
}

const ProjectImages: React.FC<Props> = ({ image }) => {
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
    <>
      {image && (
        <div className=" w-11/12 max-w-5xl">
          <div className={`flex items-center gap-8 justify-evenly flex-wrap`}>
            {image.map((src, index) => (
              <div
                className="border-2 cursor-pointer border-neutral-500 rounded-lg transition hover:shadow-neutral-600 hover:shadow-md  hover:scale-105"
                key={index}
              >
                <Image
                  src={src}
                  onClick={() => openImageViewer(index)}
                  width={250}
                  height={250}
                  style={{ margin: "2px" }}
                  alt=""
                />
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <div className={`fixed z-50 `}>
              <ImageViewer
                src={image}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectImages;
