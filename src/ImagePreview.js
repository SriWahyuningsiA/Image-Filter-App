import React from "react";

function ImagePreview({ image, filterStyle }) {
  return (
    <div className="image-box">
      {image ? (
        <img
          src={image}
          alt="Preview"
          className="preview-image"
          style={{ filter: filterStyle }}
        />
      ) : (
        <div className="placeholder">🖼</div>
      )}
    </div>
  );
}

export default ImagePreview;