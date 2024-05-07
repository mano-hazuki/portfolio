import NextImage from "next/image";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  fill?: boolean;
  quality?: number;
  priority?: boolean;
  className?: string;
}

export function Image({
  src,
  alt,
  width,
  height,
  sizes,
  fill = false,
  quality = 80,
  priority = false,
  className = "",
}: Props) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      fill={fill}
      quality={quality}
      priority={priority}
      className={className}
    />
  );
}
