"use client";

import React, { useState } from "react";
import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  style?: React.CSSProperties;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  loading = "lazy",
  style,
  sizes,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Use defi.ao gateway for better performance
  const optimizedSrc = src
    .replace("https://defi.ao/", "https://defi.ao/")
    .replace("https://arweave.net/", "https://defi.ao/");

  if (error) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center`}
        style={{ width: width || "100%", height: height || "100%", ...style }}
      >
        <span className="text-gray-400">Failed to load image</span>
      </div>
    );
  }

  return (
    <>
      {fill ? (
        <div className="relative w-full h-full" style={style}>
          {isLoading && !priority && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        <Image
          src={optimizedSrc}
          alt={alt}
          fill
          className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          priority={priority}
          loading={priority ? undefined : loading}
          sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          onLoad={() => setIsLoading(false)}
          onError={() => setError(true)}
          style={style}
        />
        </div>
      ) : (
        <div className={`relative ${className}`} style={style}>
          {isLoading && !priority && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <Image
            src={optimizedSrc}
            alt={alt}
            width={width || 500}
            height={height || 500}
            className={`${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
            priority={priority}
            loading={priority ? undefined : loading}
            sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            onLoad={() => setIsLoading(false)}
            onError={() => setError(true)}
            style={style}
          />
        </div>
      )}
    </>
  );
};