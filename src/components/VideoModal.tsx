"use client";

import { useState } from "react";
import Image from 'next/image'

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Play Button */}
      <button onClick={openModal}>
        <Image src="/images/play-btn.svg" alt=" " width={154} height={154} />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center videoArea mx-auto my-auto animate-fadeIn">
          <div className="relative w-full aspect-video">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-10 right-5 text-black text-2xl font-bold z-10"
            >
              ✖
            </button>

            <video src="/videos/digi-opt.mp4" controls autoPlay className="w-full h-full"></video>

          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;