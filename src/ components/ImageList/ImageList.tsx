import LazyImage from "../LazyImage/LazyImage";
import "./ImageList.scss";

interface ImageListProps {
  images: string[];
}

const ImageList = ({ images }: ImageListProps) => (
  <div className="ImageList">
    {images.map((image, index) => {
      return <LazyImage key={index} src={image} />;
    })}
  </div>
);

export default ImageList;
