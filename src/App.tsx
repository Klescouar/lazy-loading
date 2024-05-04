import "./App.scss";
import "./Normalize.scss";
import HeroSection from "./ components/HeroSection/HeroSection";
import ImageList from "./ components/ImageList/ImageList";
import { generateImageUrlArray } from "./utils/images";

const images = generateImageUrlArray();

function App() {
  return (
    <div className="Home">
      <HeroSection />
      <ImageList images={images} />
    </div>
  );
}

export default App;
