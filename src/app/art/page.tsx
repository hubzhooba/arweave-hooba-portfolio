"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ArtPage() {
  const [hoveredPinned, setHoveredPinned] = useState<number | null>(null);
  const [hoveredDigital, setHoveredDigital] = useState<number | null>(null);

  const pinnedArtworks = [
    {
      title: "Unsigned_Sabrina",
      image: "http://arweave.net/mYN9HU8Q46EVScJmUnEiRe96eHSuz0jo2FN5Hj__rjw",
      description: "A heartfelt tribute to the classic film 'Sabrina', celebrating the unmatched charm and talent of my favorite actor.",
    },
    {
      title: "Unsigned_Emma",
      image: "http://arweave.net/e-LE48QkvX7oAGGBlM1QLQ-gEAXeXucXA56jX63OwQA",
      description: "Anything goes with Emma Chamberlain.",
    },
  ];

  const digitalArt = [
    {
      title: "Unsigned_Algorithm#30474",
      image: "http://arweave.net/hNBfpIECErzrN5_t3DA_3TClPlJ8oh1AusxueYczeAw",
      description: "Unlocking the secrets of the universe through energy, frequency, and vibration.",
      type: "image",
    },
    {
      title: "Untapped Energy",
      image: "http://arweave.net/owbiYHC1abkwirHXR9xtFoMQRWmayXt5eDZ7E0I7rfE",
      description: "",
      type: "image",
    },
    {
      title: "Unsigned_Fractals",
      image: "http://arweave.net/YbAk8GbgBiHPmnz4dEEwX_kqRlMmEX4dHbFanIc9kn8",
      description: "Unlocking the secrets of the universe through energy, frequency, and vibration.",
      type: "image",
    },
    {
      title: "La Playa",
      image: "http://arweave.net/87L-wDVeWS6b5Sho2NzhBuqhWRAClTIkii6BJFtFsrc",
      description: "",
      type: "video",
    },
    {
      title: "Unsigned_Scarface",
      image: "http://arweave.net/uqbHebmdC2KtIhnP5g05hO6ZK-fSheNl3vtx3BGyqnM",
      description: "What's my name? Dunkaccino",
      type: "image",
    },
    {
      title: "Unsigned_Dream",
      image: "http://arweave.net/fZSzLM2OsvrFnx2LJwsHohEHprHGUa9ONkH7AhUtwxI",
      description: "I had a dream",
      type: "image",
    },
    {
      title: "Unsigned_Frequencies",
      image: "http://arweave.net/4iGG6JlhPcqokYeTolhmEYrf51ejvnaadZjaMMJW1cA",
      description: "",
      type: "video",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true, // Enable swipe gestures on mobile
  };

  return (
    <motion.div
      className="py-16 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Pinned Section */}
      <h2 className="text-lg sm:text-xl uppercase tracking-wide text-gray-500 mb-6 sm:mb-8">
        Pinned
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
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
                ? "opacity-30"
                : "opacity-100"
            }`}
            onMouseEnter={() => setHoveredPinned(index)}
            onMouseLeave={() => setHoveredPinned(null)}
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-md">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <h2 className="mt-3 text-lg sm:text-xl font-semibold">{art.title}</h2>
            <p className="text-sm sm:text-base text-gray-600">{art.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Digital Art Section - Carousel */}
      <h2 className="text-lg sm:text-xl uppercase tracking-wide text-gray-500 mb-6 sm:mb-8">
        Digital Art
      </h2>
      <Slider {...sliderSettings} className="max-w-2xl mx-auto">
        {digitalArt.map((art, index) => (
          <div
            key={index}
            className="px-2 sm:px-4"
            onMouseEnter={() => setHoveredDigital(index)}
            onMouseLeave={() => setHoveredDigital(null)}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`cursor-pointer transition-opacity duration-300 ${
                hoveredDigital !== null && hoveredDigital !== index
                  ? "opacity-30"
                  : "opacity-100"
              }`}
            >
              <div className="w-full overflow-hidden rounded-lg shadow-md">
                {art.type === "image" ? (
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                ) : (
                  <video
                    src={art.image}
                    autoPlay
                    loop
                    muted
                    className="w-full h-auto object-cover rounded-lg"
                  />
                )}
              </div>

              <h2 className="mt-3 text-lg sm:text-xl font-semibold text-center">
                {art.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                {art.description}
              </p>
            </motion.div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
