import { useRef } from "react";
import useIsVisible from "../../hooks/useIsVisible";

interface LazyImageProps {
  src: string;
}

const LazyImage = ({ src }: LazyImageProps) => {
  const headerTwoRef = useRef<HTMLImageElement>(null);
  const visible = useIsVisible(headerTwoRef, "100px");

  return (
    <img
      ref={headerTwoRef}
      src={visible ? src : undefined}
      alt="Ubisoft Montréal"
    />
  );
};

export default LazyImage;
