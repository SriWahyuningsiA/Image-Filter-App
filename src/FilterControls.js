import React from "react";

function FilterControls({
  grayscale,
  setGrayscale,
  blur,
  setBlur,
  brightness,
  setBrightness
}) {
  return (
    <div style={{ width: "250px", textAlign: "left" }}>
      <h3>Filtering</h3>

      <div>
        <label>
          <input
            type="checkbox"
            checked={grayscale}
            onChange={() => setGrayscale(!grayscale)}
          />
          Grayscale
        </label>
      </div>

      <div>
        <label>Blur: {blur}px</label>
        <input
          type="range"
          min="0"
          max="10"
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
        />
      </div>

      <div>
        <label>Brightness: {brightness}%</label>
        <input
          type="range"
          min="50"
          max="200"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
        />
      </div>
    </div>
  );
}

export default FilterControls;