import React from "react";

function ImagePreview({ image, filterStyle }) {
  return (
    <div style={{
      width: "300px",
      height: "250px",
      border: "1px solid gray",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {image ? (
        <img
          src={image}
          alt="Preview"
          style={{ maxWidth: "100%", maxHeight: "100%", filter: filterStyle }}
        />
      ) : (
        <p>No Image</p>
      )}
    </div>
  );
}

export default ImagePreview;