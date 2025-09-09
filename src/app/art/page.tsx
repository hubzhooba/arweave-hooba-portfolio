"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { OptimizedImage } from "@/components/OptimizedImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ArtPage() {
  const [hoveredPinned, setHoveredPinned] = useState<number | null>(null);
  const [hoveredDigital, setHoveredDigital] = useState<number | null>(null);

  const pinnedArtworks = [
    {
      title: "Unsigned_Sabrina",
      image: "https://defi.ao/mYN9HU8Q46EVScJmUnEiRe96eHSuz0jo2FN5Hj__rjw",
      description:
        "A heartfelt tribute to the classic film 'Sabrina', celebrating the unmatched charm and talent of my favorite actor.",
      type: "image",
      position: "center",
    },
    {
      title: "Unsigned_Emma",
      image: "https://defi.ao/e-LE48QkvX7oAGGBlM1QLQ-gEAXeXucXA56jX63OwQA",
      description: "Anything goes with emma chamberlain.",
      type: "image",
      position: "center",
    },
  ];

  const digitalArt = [
    {
      title: "Unsigned_Algorithm#30474",
      image: "https://defi.ao/hNBfpIECErzrN5_t3DA_3TClPlJ8oh1AusxueYczeAw",
      description:
        "Unlocking the secrets of the universe through energy, frequency and vibration.",
      type: "image",
      position: "center",
    },
    {
      title: "Untapped Energy",
      image: "https://defi.ao/owbiYHC1abkwirHXR9xtFoMQRWmayXt5eDZ7E0I7rfE",
      description: "",
      type: "image",
      position: "center",
    },
    {
      title: "Unsigned_Fractals",
      image: "https://defi.ao/YbAk8GbgBiHPmnz4dEEwX_kqRlMmEX4dHbFanIc9kn8",
      description:
        "Unlocking the secrets of the universe through energy, frequency and vibration.",
      type: "image",
      position: "center",
    },
    {
      title: "La Playa",
      image: "https://defi.ao/87L-wDVeWS6b5Sho2NzhBuqhWRAClTIkii6BJFtFsrc",
      description: "",
      type: "video",
      position: "center",
    },
    {
      title: "Unsigned_Scarface",
      image: "https://defi.ao/uqbHebmdC2KtIhnP5g05hO6ZK-fSheNl3vtx3BGyqnM",
      description: "What's my name? Dunkaccino",
      type: "image",
      position: "center",
    },
    {
      title: "Unsigned_Dream",
      image: "https://defi.ao/fZSzLM2OsvrFnx2LJwsHohEHprHGUa9ONkH7AhUtwxI",
      description: "I had a dream",
      type: "image",
      position: "center",
    },
    {
      title: "Unsigned_Frequencies",
      image: "https://defi.ao/4iGG6JlhPcqokYeTolhmEYrf51ejvnaadZjaMMJW1cA",
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
    initialSlide: 0,
  };

  return (
    <motion.div
      className="py-20 px-4 md:px-8 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              {art.type === "image" && (
                <OptimizedImage
                  src={art.image}
                  alt={art.title}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>

            <h2 className="mt-4 text-lg font-semibold">{art.title}</h2>
            <p className="text-sm text-gray-600">{art.description}</p>
          </motion.div>
        ))}
      </div>

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
                  <OptimizedImage
                    src={art.image}
                    alt={art.title}
                    width={1200}
                    height={1200}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                ) : (
                  <video
                    src={art.image}
                    autoPlay
                    loop
                    muted
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

      <div className="mt-16 text-center">
        <p className="text-x2 text-muted-foreground max-w-3x2 mx-auto">
          This website is <strong>fully deployed on the blockchain</strong>, with all
          assets permanently stored on <strong>decentralized cloud storage</strong>.
        </p>
      </div>
    </motion.div>
  );
}
