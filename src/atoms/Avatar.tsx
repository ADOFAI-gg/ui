import React from "react";
import { Image } from "@/atoms";

export const Avatar: React.FC<{ src?: string; size: number }> = ({
  src,
  size,
}) => {
  return (
    <Image
      width={size}
      height={size}
      src={src}
      alt="Avatar"
      style={{ borderRadius: size / 2 }}
    />
  );
};
