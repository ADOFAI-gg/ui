import React from "react";

const Icon: React.FC<
  { src: string; size?: number } & Omit<
    React.HTMLAttributes<HTMLImageElement>,
    "width" | "height"
  >
> = ({ src, size = 24, ...props }) => {
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt="Icon"
      draggable="false"
      {...props}
    />
  );
};

export default Icon;
