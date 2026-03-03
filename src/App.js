import React, { useState } from "react";
import ImagePreview from "./ImagePreview";
import FilterControls from "./FilterControls";

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
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>Simple Image Filter App</h2>

      <input type="file" onChange={handleUpload} />

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        
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