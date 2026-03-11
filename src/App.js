import React from "react";
import ImagePreview from "./ImagePreview";
import FilterControls from "./FilterControls";
import useFilterStore from "./store/filterStore";
import "./index.css";

function App() {
  const { image, grayscale, blur, brightness, setImage } = useFilterStore();

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
      <h1 className="title">🎨 Simple Image Filter App</h1>

      <label className="upload-btn">
        ⬆ Upload Image
        <input type="file" hidden onChange={handleUpload} />
      </label>

      <div className="container">
        <ImagePreview image={image} filterStyle={filterStyle} />
        <FilterControls />
      </div>
    </div>
  );
}

export default App;