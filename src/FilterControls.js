import React from "react";
import useFilterStore from "./store/filterStore";

function FilterControls() {
  const {
    grayscale,
    setGrayscale,
    blur,
    setBlur,
    brightness,
    setBrightness
  } = useFilterStore();

  return (
    <div className="filter-box">
      <h2>Filtering</h2>

      <div className="control">
        <label>Grayscale</label>
        <input
          type="checkbox"
          checked={grayscale}
          onChange={() => setGrayscale(!grayscale)}
        />
      </div>

      <div className="control">
        <label>Blurring</label>
        <input
          type="range"
          min="0"
          max="10"
          value={blur}
          onChange={(e) => setBlur(Number(e.target.value))}
        />
      </div>

      <div className="control">
        <label>Brightness</label>
        <input
          type="range"
          min="50"
          max="150"
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default FilterControls;