import { useState } from "react";
import "./App.css";

function App() {
  const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/022/536/549/small/modern-banner-background-colorful-blue-and-purple-gradations-circles-eps-10-free-vector.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufC6NGDk7yDulq_CRxxMHsxEcGNdDbL4s-w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2Celgxopr5dd4AmPoC7zdgVPEu4nQwRPkQ&s",
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const handlePrev = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
      return
    }

    setImageIndex(imageIndex - 1);
  };

  const handleNext = () => {
    setImageIndex((imageIndex + 1)%images.length);
  };

  return (
    <>
      <h1>Carousel</h1>

      <div className="card">
        <button onClick={handlePrev} className="btn">
          Prev
        </button>
        <img src={images[imageIndex]} alt="" className="img" />
        <button onClick={handleNext} className="btn">
          Next
        </button>
      </div>
    </>
  );
}

export default App;
