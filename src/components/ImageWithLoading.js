'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageWithLoading({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
  quality = 75,
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        quality={quality}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`${className} transition-all duration-700 ${
          hasError ? 'opacity-50' : ''
        } ${isLoading ? 'blur-xl scale-105 brightness-75' : 'blur-0 scale-100'}`}
        {...props}
      />

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
          <p className="text-gray-500 text-sm">Image unavailable</p>
        </div>
      )}
    </div>
  );
}
