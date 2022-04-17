import { CircularProgress } from "@mui/material";
import { Storage } from "aws-amplify";
import React from "react";

export default function RenderImage({ url, width = 50, height = 50 }) {
  const file = process.env.REACT_APP_IMAGE_URL + url;

  return (
    <img
      src={file}
      loading="lazy"
      width={width}
      height={height}
      style={{
        objectFit: "contain",
      }}
    />
  );
}
