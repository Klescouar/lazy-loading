import logo from "/ubi.jpg";
import "./HeroSection.scss";

const HeroSection = () => (
  <div className="HeroSection">
    <img className="HeroSection__Logo" src={logo} alt="logo" />
  </div>
);

export default HeroSection;
