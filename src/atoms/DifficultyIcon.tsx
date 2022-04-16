import React from "react";
import { Image } from "@/atoms/Image";

const icons = import.meta.globEager("@/assets/difficultyIcons/*.svg");

export const DifficultyIcon: React.FC<{
  size?: number;
  difficulty: number;
}> = ({ difficulty, size = 36 }) => {
  const [src, setSrc] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setSrc(icons[`../assets/difficultyIcons/${difficulty}.svg`]?.default);
  }, [difficulty]);

  return <Image width={size} height={size} src={src} />;
};
