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
  const [gatewayIndex, setGatewayIndex] = useState(0);

  // Fallback gateways in order of preference
  const gateways = ["https://arweave.net/", "https://gateway.arweave.net/", "https://arweave.dev/"];

  // Extract the transaction ID from the URL
  const getTxId = (url: string) => {
    const match = url.match(/(?:https?:\/\/)?(?:[^\/]+\/)?([a-zA-Z0-9_-]{43})/);
    return match ? match[1] : "";
  };

  const txId = getTxId(src);
  const optimizedSrc = txId ? `${gateways[gatewayIndex]}${txId}` : src;

  const handleImageError = () => {
    if (gatewayIndex < gateways.length - 1) {
      // Try next gateway
      setGatewayIndex(prev => prev + 1);
      setError(false);
    } else {
      // All gateways failed
      setError(true);
    }
  };

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
          onError={handleImageError}
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
            onError={handleImageError}
            style={style}
          />
        </div>
      )}
    </>
  );
};