import React, { useState } from "react";
import ImagePreview from "./ImagePreview";
import FilterControls from "./FilterControls";
import "./index.css";

function App() {
  const [image, setImage] = useState(null);
  const [grayscale, setGrayscale] = useState(false);
  const [blur, setBlur] = useState(0);
  const [brightness, setBrightness] = useState(100);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const filterStyle = `
    grayscale(${grayscale ? 100 : 0}%)
    blur(${blur}px)
    brightness(${brightness}%)
  `;

  return (
    <div className="app">
      <h1 className="title">
        🎨 Simple Image Filter App
      </h1>

      <label className="upload-btn">
        ⬆ Upload Image
        <input type="file" hidden onChange={handleUpload} />
      </label>

      <div className="container">
        <ImagePreview image={image} filterStyle={filterStyle} />

        <FilterControls
          grayscale={grayscale}
          setGrayscale={setGrayscale}
          blur={blur}
          setBlur={setBlur}
          brightness={brightness}
          setBrightness={setBrightness}
        />
      </div>
    </div>
  );
}

export default App;