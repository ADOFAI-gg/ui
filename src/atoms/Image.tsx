import { motion } from "framer-motion";
import React, { CSSProperties } from "react";

export const Image: React.FC<{
  src?: string;
  width: number;
  height: number;
  alt?: string;
  style?: CSSProperties;
}> = ({ src, width, height, alt, style }) => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!src) return;
    setLoading(true);
    const img = new window.Image();

    img.src = src;

    img.onload = () => {
      setLoading(false);
    };

    return () => {
      img.remove();
    };
  }, [src]);

  if (!src) {
    return <div />;
  }

  return (
    <div style={{ overflow: "hidden", width, height, ...style }}>
      {loading ? (
        <div
          style={{
            width,
            height,
          }}
        />
      ) : (
        <motion.img
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          width={width}
          src={src}
          alt={alt}
          draggable="false"
        />
      )}
    </div>
  );
};
