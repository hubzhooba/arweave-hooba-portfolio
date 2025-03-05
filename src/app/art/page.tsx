"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ArtPage() {
  const [hoveredPinned, setHoveredPinned] = useState<number | null>(null);
  const [hoveredDigital, setHoveredDigital] = useState<number | null>(null);

  const pinnedArtworks = [
    {
      title: "Unsigned_Sabrina",
      image: "http://arweave.net/mYN9HU8Q46EVScJmUnEiRe96eHSuz0jo2FN5Hj__rjw",
      description:
        "A heartfelt tribute to the classic film 'Sabrina', celebrating the unmatched charm and talent of my favorite actor.",
      type: "image",
      position: "center",
    },
    {
      title: "Unsigned_Emma",
      image: "http://arweave.net/e-LE48QkvX7oAGGBlM1QLQ-gEAXeXucXA56jX63OwQA",
      description: "Anything goes with emma chamberlain.",
      type: "image",
      position: "center",
    },
  ];

  const digitalArt = [
    {
      title: "Unsigned_Algorithm#30474",
      image: "http://arweave.net/hNBfpIECErzrN5_t3DA_3TClPlJ8oh1AusxueYczeAw",
      description:
        "Unlocking the secrets of the universe through energy, frequency and vibration.",
      type: "image",
      position: "center",
    },
    {
      title: "Untapped Energy",
      image: "http://arweave.net/owbiYHC1abkwirHXR9xtFoMQRWmayXt5eDZ7E0I7rfE",
      description: "",
      type: "image",
      position: "center",
    },
    {
      title: "Unsigned_Fractals",
      image: "http://arweave.net/YbAk8GbgBiHPmnz4dEEwX_kqRlMmEX4dHbFanIc9kn8",
      description:
        "Unlocking the secrets of the universe through energy, frequency and vibration.",
      type: "image",
      position: "center",
    },
    {
      title: "La Playa",
      image: "http://arweave.net/87L-wDVeWS6b5Sho2NzhBuqhWRAClTIkii6BJFtFsrc",
      description: "",
      type: "video",
      position: "center",
    },
    {
      title: "Unsigned_Scarface",
      image: "http://arweave.net/uqbHebmdC2KtIhnP5g05hO6ZK-fSheNl3vtx3BGyqnM",
      description: "What's my name? Dunkaccino",
      type: "image",
      position: "center",
    },
    {
      title: "Unsigned_Dream",
      image: "http://arweave.net/fZSzLM2OsvrFnx2LJwsHohEHprHGUa9ONkH7AhUtwxI",
      description: "I had a dream",
      type: "image",
      position: "center",
    },
    {
      title: "Unsigned_Frequencies",
      image: "http://arweave.net/4iGG6JlhPcqokYeTolhmEYrf51ejvnaadZjaMMJW1cA",
      description: "",
      type: "video",
      position: "center",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <motion.div
      className="py-20 px-4 md:px-8 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Pinned Section */}
      <h2 className="text-lg uppercase tracking-wide text-gray-500 mb-8">
        Pinned
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        onMouseLeave={() => setHoveredPinned(null)}
      >
        {pinnedArtworks.map((art, index) => (
          <motion.div
            key={index}
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`cursor-pointer transition-opacity duration-300 ${
              hoveredPinned !== null && hoveredPinned !== index
                ? "opacity-20"
                : "opacity-100"
            }`}
            onMouseEnter={() => setHoveredPinned(index)}
            onMouseLeave={() => setHoveredPinned(null)}
          >
            {/* Removed aspect-video; container is flexible */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              {art.type === "image" && (
                <Image
                  src={art.image}
                  alt={art.title}
                  width={2000}
                  height={2000}
                  // Fill container width, auto height, cover for cropping
                  className="w-full h-auto object-cover"
                />
              )}
            </div>

            <h2 className="mt-4 text-lg font-semibold">{art.title}</h2>
            <p className="text-sm text-gray-600">{art.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Digital Art Section Carousel */}
      <h2 className="text-lg uppercase tracking-wide text-gray-500 mb-8">
        Digital Art
      </h2>
      <Slider {...sliderSettings}>
        {digitalArt.map((art, index) => (
          <div
            key={index}
            className="px-2"
            onMouseEnter={() => setHoveredDigital(index)}
            onMouseLeave={() => setHoveredDigital(null)}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`cursor-pointer transition-opacity duration-300 ${
                hoveredDigital !== null && hoveredDigital !== index
                  ? "opacity-20"
                  : "opacity-100"
              }`}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                {art.type === "image" ? (
                  <Image
                    src={art.image}
                    alt={art.title}
                    width={2000}
                    height={2000}
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <video
                    src={art.image}
                    autoPlay
                    loop
                    muted
                    // Match image styling: fill width, auto height, cover
                    className="w-full h-auto object-cover"
                  />
                )}
              </div>

              <h2 className="mt-4 text-lg font-semibold text-center">
                {art.title}
              </h2>
              <p className="text-sm text-gray-600 text-center">
                {art.description}
              </p>
            </motion.div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
